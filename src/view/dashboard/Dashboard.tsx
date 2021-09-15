import { makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase'
import Card from '../../component/card/Card'
import CardBody from '../../component/card/CardBody'
import CardHeader from '../../component/card/CardHeader'
import FixtureTabs from '../../component/customTabs/FixtureTabs'
import GridContainer from '../../component/grid/GridContainer'
import GridItem from '../../component/grid/GridItem'
import CustomTable from '../../component/table/Table'
import convertToObj from '../../firebase/convert'
import { getNumber, getString } from '../../hooks/useValues'
import { AppState } from '../../state/reducer'
import { Games, Goals } from '../../state/types/player.types'
import { StandingStat } from '../../state/types/standings.types'

// core components

import styles from './Dashboard.styles'

const fixtureWeeks: {
	tabName: string
	startTimestamp: number
	endTimestamp: number
}[] = []

const getDaysInMonth = (year: number, month: number): number => {
	return new Date(year, month, 0).getDate()
}

const currentDate = new Date()
currentDate.setFullYear(currentDate.getFullYear())

const totalDays = getDaysInMonth(
	currentDate.getFullYear(),
	currentDate.getMonth()
)
const totalWeeks = Math.ceil(totalDays / 7)
const currentWeek = Math.ceil(currentDate.getDate() / 7)

// eslint-disable-next-line no-plusplus
for (let i = 0; i < totalWeeks; i++) {
	const year = currentDate.getFullYear()
	const month = currentDate.getMonth()
	const lastDay = (i + 1) * 7
	const firstDayInAWeek = new Date(year, month, i * 7 + 1)
	const lastDayInAWeek = new Date(
		year,
		month,
		lastDay > totalDays ? totalDays - lastDay : lastDay
	)

	fixtureWeeks.push({
		tabName: `Week ${i + 1}`,
		startTimestamp: firstDayInAWeek.getTime() / 1000,
		endTimestamp: lastDayInAWeek.getTime() / 1000,
	})
}

const useStyles = makeStyles(styles)

const dashboard = () => {
	const classes = useStyles()

	// State
	const [standings, setStandings] = useState<string[][]>([])
	const [topScorerList, setTopScorerList] = useState<string[][]>([])

	// Selectors
	const { selectedLeague } = useSelector(
		(state: AppState) => state.selectedLeague
	)

	const season = useSelector(
		(state: AppState) => state.firestore.ordered.seasons
	)

	const teamStandings = useSelector(
		(state: AppState) => state.firestore.ordered.standings
	)

	const topScorers = useSelector(
		(state: AppState) => state.firestore.ordered.topScorers
	)

	let leagueId = '#'
	if (isLoaded(season)) {
		leagueId = season[0].id.toString()
	}

	// Firestore Hooks
	useFirestoreConnect([
		{
			collection: '/football',
			doc: selectedLeague,
			subcollections: [
				{
					collection: '/leagues',
					doc: leagueId,
					subcollections: [
						{ collection: 'standings', orderBy: ['rank', 'asc'] },
					],
				},
			],
			storeAs: 'standings',
		},
		{
			collection: '/football',
			doc: selectedLeague,
			subcollections: [
				{
					collection: '/leagues',
					doc: leagueId,
					subcollections: [
						{
							collection: 'topScorers',
							orderBy: ['goals', 'desc'],
						},
					],
				},
			],
			storeAs: 'topScorers',
		},
	])

	// React Hooks
	useEffect(() => {
		if (isLoaded(teamStandings)) {
			const allTeams: string[][] = []
			teamStandings.forEach(t => {
				const all = convertToObj<StandingStat>(t.all)
				const team: string[] = [
					getString(t.rank.toString()),
					getString(t.teamName.toString()),
					getNumber(all.matchesPlayed).toString(),
					(getNumber(all.win) * 3 + getNumber(all.draw)).toString(),
					getNumber(all.win).toString(),
					getNumber(all.draw).toString(),
					getNumber(all.lose).toString(),
				]
				allTeams.push(team)
			})
			setStandings(allTeams)
		}
	}, [teamStandings])

	useEffect(() => {
		if (isLoaded(topScorers)) {
			const players: string[][] = []
			let rank: number = 0
			let totalGoals: number = Number.MAX_VALUE
			topScorers.forEach(p => {
				const games = convertToObj<Games>(p.games)
				const goals = convertToObj<Goals>(p.goals)
				if (totalGoals > goals.total) {
					rank += 1
					totalGoals = goals.total
				}
				const player: string[] = [
					`${rank}`,
					`${p.playerName}`,
					`${games.appearences}`,
					`${goals.total}`,
				]
				players.push(player)
			})
			setTopScorerList(players)
		}
	}, [topScorers])

	return (
		<GridContainer>
			<GridItem xs={12} sm={12} md={6}>
				<FixtureTabs
					title='Fixtures'
					headerColor='successCardHeader'
					selectedIndex={currentWeek}
					tabs={fixtureWeeks}
				/>
			</GridItem>
			<GridItem xs={12} sm={12} md={6}>
				<Card className=''>
					<CardHeader color='primaryCardHeader' className=''>
						<h4 className={classes.cardTitleWhite}>Standings</h4>
						<p className={classes.cardCategoryWhite}>
							{season && season[0].season}
						</p>
					</CardHeader>
					<CardBody className=''>
						<CustomTable
							tableHeaderColor='warning'
							tableHead={[
								'Pos',
								'Team',
								'Played',
								'Points',
								'Won',
								'Drawn',
								'Lost',
							]}
							tableData={standings}
						/>
					</CardBody>
				</Card>
			</GridItem>
			<GridItem xs={12} sm={12} md={6}>
				<Card className=''>
					<CardHeader color='roseCardHeader' className=''>
						<h4 className={classes.cardTitleWhite}>Top Scorer</h4>
						<p className={classes.cardCategoryWhite}>
							{season && season[0].season}
						</p>
					</CardHeader>
					<CardBody className=''>
						<CustomTable
							tableHeaderColor='warning'
							tableHead={['Pos', 'Name', 'Appearences', 'Goals']}
							tableData={topScorerList}
						/>
					</CardBody>
				</Card>
			</GridItem>
		</GridContainer>
	)
}

export default dashboard
