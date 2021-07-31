import { StandingsState, LeagueAction, LeagueActionType } from '../types'

const initialState: StandingsState = {
	teamStandings: [],
	loaded: false,
}

export default (state = initialState, action: LeagueAction) => {
	switch (action.type) {
		case LeagueActionType.GET_STANDINGS:
			return {
				...state,
				teamStandings: action.payload,
				loaded: true,
			}
		default:
			return state
	}
}
