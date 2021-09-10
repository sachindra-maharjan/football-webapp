import { FormControl, InputLabel, makeStyles, Select } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase'
import GridContainer from '../../component/grid/GridContainer'
import GridItem from '../../component/grid/GridItem'
import styles from './Players.styles'
import PlayerCard from './PlayerCard'
import { AppState } from '../../state/reducer'
import convertToObj from '../../firebase/convert'
import { SquadMember } from '../../state/types/team.types'
import getCurrentSelectedTeam from '../../state/action/teamActions'

const useStyles = makeStyles(styles)

const Players = () => {
	const classes = useStyles()
	const history = useHistory()
	const dispatch = useDispatch()

	// React state
	const [teamState, setTeamState] = useState<{
		id: string
		name: string
	}>({
		id: '#',
		name: '#',
	})

	// Selectors
	const { selectedLeague } = useSelector(
		(state: AppState) => state.selectedLeague
	)
	const selectedTeam = useSelector((state: AppState) => state.selectedTeam)

	const season = useSelector(
		(state: AppState) => state.firestore.ordered.seasons
	)
	const teams = useSelector((state: AppState) => state.firestore.ordered.teams)
	const squad = useSelector((state: AppState) => state.firestore.ordered.squad)

	const handleChange = (
		event: React.ChangeEvent<{ name?: string; value: unknown }>
	) => {
		const name = event.target.name as keyof typeof teamState
		setTeamState({
			...teamState,
			[name]: event.target.value,
		})
	}

	useEffect(() => {
		dispatch(getCurrentSelectedTeam(teamState.id))
	}, [teamState])

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
					subcollections: [{ collection: 'teams', orderBy: ['name', 'asc'] }],
				},
			],
			storeAs: 'teams',
		},
	])

	useFirestoreConnect([
		{
			collection: '/football',
			doc: selectedLeague,
			subcollections: [
				{
					collection: '/leagues',
					doc: leagueId,
					subcollections: [
						{
							collection: 'teams',
							doc: teamState.id,
							subcollections: [
								{ collection: '/squad', orderBy: ['playerName', 'asc'] },
							],
						},
					],
				},
			],
			storeAs: `squad`,
		},
	])

	useEffect(() => {
		if (isLoaded(teams) && teams.length > 0) {
			setTeamState({
				...teamState,
				id: selectedTeam.loaded ? selectedTeam.team : `${teams[0].id}`,
			})
		}
	}, [teams])

	if (!isLoaded(teams) || !isLoaded(squad)) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<div className={classes.spacingBotton}>
				{/* <span className={classes.cardTitle}>Manchester United</span> */}
				<FormControl variant='outlined'>
					<InputLabel
						htmlFor='outlined-age-native-simple'
						className={classes.cardTitle}
					>
						Team
					</InputLabel>
					<Select
						native
						value={teamState.id}
						onChange={handleChange}
						label='Team'
						className={classes.cardTitle}
						inputProps={{
							name: 'id',
							id: 'outlined-age-native-simple',
						}}
					>
						<option>Select Team</option>
						{teams.map(t => {
							return (
								<option
									selected={selectedTeam.team === `${t.id}`}
									value={`${t.id}`}
								>
									{t.name}
								</option>
							)
						})}
					</Select>
				</FormControl>
			</div>
			<div className={classes.spacing}>
				<GridContainer>
					{squad.map(s => {
						const squadMember: SquadMember = convertToObj(s)
						squadMember.teamName = ''
						return (
							<GridItem
								xs={12}
								sm={12}
								md={4}
								onClick={() =>
									history.push({
										pathname: '/player',
										state: { squadMember },
									})
								}
							>
								<PlayerCard squadMember={squadMember} />
							</GridItem>
						)
					})}
				</GridContainer>
			</div>
		</div>
	)
}

export default Players
