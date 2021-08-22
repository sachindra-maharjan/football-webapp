import { LeagueAction, LeagueActionType } from '../types'
import { StandingsState } from '../types/standings.types'

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
