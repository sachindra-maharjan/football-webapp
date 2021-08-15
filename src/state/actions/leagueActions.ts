import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import { LeagueActionType, LeagueAction } from '../types'
import { LeagueSeason } from '../types/league.types'
import db from '../../firebase/database'

const getCurrentSeason = (): ThunkAction<
	void,
	RootState,
	null,
	LeagueAction
> => {
	return async dispatch => {
		try {
			const currentSeason: LeagueSeason[] = []
			const year = new Date().getFullYear()
			let querySnapshot = await db
				.seasons('premierleague')
				.where('season', '==', year.toString())
				.get()

			if (!querySnapshot.empty) {
				currentSeason.push(querySnapshot.docs[0].data())
			} else {
				querySnapshot = await db
					.seasons('premierleague')
					.where('season', '==', (year - 1).toString())
					.get()
				currentSeason.push(querySnapshot.docs[0].data())
			}

			dispatch({
				type: LeagueActionType.GET_SEASONS,
				payload: currentSeason,
			})
		} catch (err) {
			console.log(err)
		}
	}
}

export default getCurrentSeason
