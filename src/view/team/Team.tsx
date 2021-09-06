import { Place } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { useSelector } from 'react-redux'
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase'
import Card from '../../component/card/Card'
import CardBody from '../../component/card/CardBody'
import CardFooter from '../../component/card/CardFooter'
import CardHeader from '../../component/card/CardHeader'
import GridContainer from '../../component/grid/GridContainer'
import GridItem from '../../component/grid/GridItem'
import { AppState } from '../../state/reducer'
import styles from '../dashboard/Dashboard.styles'

interface Props {}

const useStyles = makeStyles(styles)

const Team: React.FC<Props> = () => {
	const classes = useStyles()

	let leagueId = '#'

	// Selectors
	// Selectors
	const { selectedLeague } = useSelector(
		(state: AppState) => state.selectedLeague
	)
	const season = useSelector(
		(state: AppState) => state.firestore.ordered.seasons
	)
	const teams = useSelector((state: AppState) => state.firestore.ordered.teams)

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
					subcollections: [{ collection: 'teams', orderBy: ['name', 'asc'] }],
				},
			],
			storeAs: 'teams',
		},
	])

	// React Hooks
	if (!isLoaded(teams)) {
		return <div>Loading...</div>
	}

	return (
		<GridContainer>
			{teams.length > 0
				? teams.map(t => {
						return (
							<GridItem xs={12} sm={12} md={4}>
								<Card chart className=''>
									<CardHeader color='successCardHeader' stats icon className=''>
										<div className={classes.teamLogo}>
											<img
												alt=''
												src={
													t.logo
														? `${t.logo}`
														: `https://media.api-sports.io/football/teams/${t.teamId}.png`
												}
											/>
										</div>
									</CardHeader>
									<CardBody className=''>
										<h4 className={classes.cardTitle}>{t.name}</h4>
										<p className={classes.cardCategory}>Founded: {t.founded}</p>
										<p className={classes.cardCategory}>
											Stadium Capacity: {t.venueCapacity}
										</p>
									</CardBody>
									<CardFooter className='' chart>
										<div className={classes.stats}>
											<Place /> {t.venueAddress}, {t.venueCity}
										</div>
									</CardFooter>
								</Card>
							</GridItem>
						)
				  })
				: ''}
		</GridContainer>
	)
}

export default Team
