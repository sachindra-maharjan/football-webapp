import { ThunkAction } from 'redux-thunk'
import { AppState } from '../reducer'
import { Action, ActionType } from '../types'
import { CurrentTeam } from '../types/league.types'

const getCurrentSelectedTeam = (
	currentTeam: string
): ThunkAction<void, AppState, null, Action> => {
	return dispatch => {
		const team: CurrentTeam = {
			team: currentTeam,
			loaded: true,
		}

		dispatch({
			type: ActionType.GET_SELECTED_TEAM,
			payload: team,
		})
	}
}

export default getCurrentSelectedTeam
