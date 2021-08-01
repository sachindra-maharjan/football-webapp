import { LeagueAction, LeagueActionType } from '../types'
import { LeagueSeasonState } from '../types/league.types'

const initialState: LeagueSeasonState = {
	seasons: [],
	loaded: false,
}

export default (state = initialState, action: LeagueAction) => {
	switch (action.type) {
		case LeagueActionType.GET_SEASONS:
			return {
				...state,
				seaons: action.payload,
				loaded: true,
			}
		default:
			return state
	}
}
