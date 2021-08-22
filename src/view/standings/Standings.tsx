import { createStyles, makeStyles } from '@material-ui/styles'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase'

import Card from '../../component/card/Card'
import CardBody from '../../component/card/CardBody'
import CardHeader from '../../component/card/CardHeader'
import GridContainer from '../../component/grid/GridContainer'
import GridItem from '../../component/grid/GridItem'
import Table from '../../component/table/Table'
import convertToObj from '../../firebase/convert'
import { AppState } from '../../state/reducer'
import { StandingStat } from '../../state/types/standings.types'

const styles = createStyles({
	cardCategoryWhite: {
		'&,& a,& a:hover,& a:focus': {
			color: 'rgba(255,255,255,.62)',
			margin: '0',
			fontSize: '14px',
			marginTop: '0',
			marginBottom: '0',
		},
		'& a,& a:hover,& a:focus': {
			color: '#FFFFFF',
		},
	},
	cardTitleWhite: {
		color: '#FFFFFF',
		marginTop: '0px',
		minHeight: 'auto',
		fontWeight: 300,
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: '3px',
		textDecoration: 'none',
		'& small': {
			color: '#777',
			fontSize: '65%',
			fontWeight: '400',
			lineHeight: '1',
		},
	},
})

interface Props {}

const useStyles = makeStyles(styles)

const Standings: React.FC<Props> = () => {
	const classes = useStyles()

	const [standings, setStandings] = useState<string[][]>([])
	const [leagueName, setLeagueName] = useState<string>('')
	const [leagueSeason, setLeagueSeason] = useState<string>('')

	const league = useSelector(
		(state: AppState) => state.firestore.ordered.league
	)

	const season = useSelector(
		(state: AppState) => state.firestore.ordered.seasons
	)

	const selectTeamStandings = (state: AppState) =>
		state.firestore.ordered.standings

	const teamStandings = useSelector((state: AppState) =>
		selectTeamStandings(state)
	)

	let leagueId = '#'
	let currentSeason = ''
	let currentLeagueName = ''

	if (isLoaded(league) && league.length > 0) {
		currentLeagueName = league[0].name.toString()
	}

	if (isLoaded(season)) {
		leagueId = season[0].id.toString()
		currentSeason = season[0].season.toString()
		currentLeagueName = 'Premier League'
	}

	useFirestoreConnect([
		{
			collection: '/football-leagues/premierleague/leagues',
			doc: leagueId,
			subcollections: [{ collection: 'standings', orderBy: ['rank', 'asc'] }],
			storeAs: 'standings',
		},
	])

	useEffect(() => {
		setLeagueName(currentLeagueName)
		setLeagueSeason(currentSeason)
	})

	useEffect(() => {
		if (isLoaded(teamStandings)) {
			const allTeams: string[][] = []
			teamStandings.forEach(t => {
				const all = convertToObj<StandingStat>(t.all)
				const team: string[] = [
					t.rank.toString(),
					t.teamName.toString(),
					all.matchsPlayed.toString(),
					(all.win * 3 + all.draw).toString(),
					all.win.toString(),
					all.draw.toString(),
					all.lose.toString(),
					all.goalsFor.toString(),
					all.goalsAgainst.toString(),
					(all.goalsFor - all.goalsAgainst).toString(),
					t.forme.toString(),
				]
				allTeams.push(team)
			})
			setStandings(allTeams)
		}
	}, [teamStandings])

	return (
		<GridContainer>
			<GridItem xs={12} sm={12} md={12}>
				{!isLoaded(teamStandings) || standings.length === 0 ? (
					<div>Loading...</div>
				) : (
					<Card className=''>
						<CardHeader color='primaryCardHeader' className=''>
							<h4 className={classes.cardTitleWhite}>{leagueName}</h4>
							<p className={classes.cardCategoryWhite}>{leagueSeason}</p>
						</CardHeader>
						<CardBody className=''>
							<Table
								tableHeaderColor='primary'
								tableHead={[
									'Pos',
									'Team',
									'Played',
									'Points',
									'Won',
									'Drawn',
									'Lost',
									'GF',
									'GA',
									'GD',
									'Form',
								]}
								tableData={standings}
							/>
						</CardBody>
					</Card>
				)}
			</GridItem>
		</GridContainer>
	)
}

export default Standings
