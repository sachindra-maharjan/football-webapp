import { createStyles, makeStyles } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Card from '../../component/card/Card'
import CardBody from '../../component/card/CardBody'
import CardHeader from '../../component/card/CardHeader'
import GridContainer from '../../component/grid/GridContainer'
import GridItem from '../../component/grid/GridItem'
import Table from '../../component/table/Table'
import { RootState } from '../../state'
import getStandings from '../../state/actions/leagueActions'

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
	const { teamStandings, loaded } = useSelector(
		(state: RootState) => state.league
	)
	const [standings, setStandings] = useState<string[][]>([])
	const [league, setLeague] = useState<string>('')

	const dispatch = useDispatch()

	useEffect(() => {
		if (!loaded) {
			dispatch(getStandings())
		}
	}, [])

	useEffect(() => {
		if (teamStandings.length > 0) {
			const allTeams: string[][] = []
			teamStandings.forEach(t => {
				const team: string[] = [
					t.rank.toString(),
					t.teamName,
					t.all.matchsPlayed.toString(),
					(t.all.win * 3 + t.all.draw).toString(),
					t.all.win.toString(),
					t.all.draw.toString(),
					t.all.lose.toString(),
					t.all.goalsFor.toString(),
					t.all.goalsAgainst.toString(),
					(t.all.goalsFor - t.all.goalsAgainst).toString(),
					t.forme,
				]
				allTeams.push(team)

				if (league === '') {
					setLeague(t.group)
				}
			})
			setStandings(allTeams)
		}
	}, [teamStandings])

	return (
		<GridContainer>
			<GridItem xs={12} sm={12} md={12}>
				{loaded ? (
					<Card className=''>
						<CardHeader color='primaryCardHeader' className=''>
							<h4 className={classes.cardTitleWhite}>{league}</h4>
							{/* <p className={classes.cardCategoryWhite}>Week 12</p> */}
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
				) : (
					<div>Loading...</div>
				)}
			</GridItem>
		</GridContainer>
	)
}

export default Standings
