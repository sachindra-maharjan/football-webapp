import { ThunkAction } from 'redux-thunk'
import { AppState } from '../reducer'
import { Action, ActionType } from '../types'
import { CurrentLeague } from '../types/league.types'

const getCurrentSelectedLeague = (
	currentLeague: string
): ThunkAction<void, AppState, null, Action> => {
	return dispatch => {
		const league: CurrentLeague = {
			selectedLeague: currentLeague,
			selectedLeagueLoaded: true,
		}

		dispatch({
			type: ActionType.GET_SELECTED_LEAGUE,
			payload: league,
		})
	}
}

export default getCurrentSelectedLeague
