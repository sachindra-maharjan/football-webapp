import { makeStyles } from '@material-ui/core'
import { SportsSoccer } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase'
import Card from '../../component/card/Card'
import CardBody from '../../component/card/CardBody'
import CardHeader from '../../component/card/CardHeader'
import CustomTabs from '../../component/customTabs/CustomTabs'
import GridContainer from '../../component/grid/GridContainer'
import GridItem from '../../component/grid/GridItem'
import CustomTable from '../../component/table/Table'
import Tasks from '../../component/tasks/FixtureTasks'
import convertToObj from '../../firebase/convert'
import { AppState } from '../../state/reducer'
import { Games, Goals } from '../../state/types/player.types'
import { StandingStat } from '../../state/types/standings.types'

// core components

import styles from './Dashboard.styles'

const useStyles = makeStyles(styles)

const bugs = [
	{ fixtureId: '1', home: 'Manchester United', away: 'Manchester City' },
	{ fixtureId: '2', home: 'Manchester United', away: 'Manchester City' },
	{ fixtureId: '3', home: 'Manchester United', away: 'Manchester City' },
	{ fixtureId: '4', home: 'Manchester United', away: 'Manchester City' },
]

const bugs2 = [
	{ fixtureId: '1', home: 'Chelsea', away: 'Liverpool' },
	{ fixtureId: '2', home: 'Manchester United', away: 'Manchester City' },
	{ fixtureId: '3', home: 'Manchester United', away: 'Manchester City' },
	{ fixtureId: '4', home: 'Manchester United', away: 'Manchester City' },
]

const dashboard = () => {
	const classes = useStyles()

	// State
	const [standings, setStandings] = useState<string[][]>([])
	const [topScorerList, setTopScorerList] = useState<string[][]>([])

	// Selectors
	const { selectedLeague } = useSelector(
		(state: AppState) => state.selectedLeague
	)

	// const league = useSelector(
	// 	(state: AppState) => state.firestore.ordered.league
	// )

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
					`${t.rank}`,
					`${t.teamName}`,
					`${all.matchesPlayed}`,
					`${all.win * 3 + all.draw}`,
					`${all.win}`,
					`${all.draw}`,
					`${all.lose}`,
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
				<CustomTabs
					title='Fixtures'
					headerColor='successCardHeader'
					selectedIndex={0}
					tabs={[
						{
							tabName: 'Week 1',
							tabContent: <Tasks tasks={bugs} />,
						},
					]}
				/>
			</GridItem>
			<GridItem xs={12} sm={12} md={6}>
				<CustomTabs
					title='Fixtures'
					headerColor='infoCardHeader'
					selectedIndex={2}
					tabs={[
						{
							tabName: 'Week 1',
							tabIcon: SportsSoccer,
							tabContent: <Tasks tasks={bugs} />,
						},
						{
							tabName: 'Week 2',
							tabIcon: SportsSoccer,
							tabContent: <Tasks tasks={bugs2} />,
						},
						{
							tabName: 'Week10',
							tabIcon: SportsSoccer,
							tabContent: <Tasks tasks={bugs} />,
						},
						{
							tabName: 'Week 1',
							tabIcon: SportsSoccer,
							tabContent: <Tasks tasks={bugs} />,
						},
						{
							tabName: 'Week 2',
							tabIcon: SportsSoccer,
							tabContent: <Tasks tasks={bugs2} />,
						},
						{
							tabName: 'Week10',
							tabIcon: SportsSoccer,
							tabContent: <Tasks tasks={bugs} />,
						},
					]}
				/>
			</GridItem>
			<GridItem xs={12} sm={12} md={6}>
				<Card className=''>
					<CardHeader color='primaryCardHeader' className=''>
						<h4 className={classes.cardTitleWhite}>Standings</h4>
						<p className={classes.cardCategoryWhite}>Week 3</p>
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
						<p className={classes.cardCategoryWhite}>Week 3</p>
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
