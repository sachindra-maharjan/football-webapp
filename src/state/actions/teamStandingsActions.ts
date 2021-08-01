import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import { LeagueActionType, LeagueAction } from '../types'
import { TeamStanding } from '../types/standings.types'
import db from '../../firebase/database'

const getStandings = (): ThunkAction<void, RootState, null, LeagueAction> => {
	return async dispatch => {
		try {
			const arr: TeamStanding[] = []
			const docs = await db
				.standings('premierleague', 'leagueId_2')
				.orderBy('rank', 'asc')
				.get()

			docs.forEach(doc => {
				const teamStanding = doc.data()
				arr.push(teamStanding)
			})

			dispatch({
				type: LeagueActionType.GET_STANDINGS,
				payload: arr,
			})
		} catch (err) {
			console.log(err)
		}
	}
}

export default getStandings
