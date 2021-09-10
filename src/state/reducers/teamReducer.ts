import { Action, ActionType } from '../types'
import { CurrentTeam } from '../types/league.types'

const initialState: CurrentTeam = {
	team: '',
	loaded: false,
}

export const currentSelectedTeam = (
	state = initialState,
	action: Action
): CurrentTeam => {
	switch (action.type) {
		case ActionType.GET_SELECTED_TEAM:
			return action.payload as CurrentTeam
		default:
			return state
	}
}

export default currentSelectedTeam
