import { Action, ActionType } from '../types'
import { CurrentLeague } from '../types/league.types'

const initialState: CurrentLeague = {
	selectedLeague: 'premierleague',
	selectedLeagueLoaded: false,
}

export const currentSelectedLeague = (state = initialState, action: Action) => {
	switch (action.type) {
		case ActionType.GET_SELECTED_LEAGUE:
			return action.payload
		default:
			return state
	}
}

export default currentSelectedLeague
