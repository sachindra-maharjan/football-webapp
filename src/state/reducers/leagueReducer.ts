import { LeagueAction, LeagueActionType } from '../types'
import { LeagueSeasonState } from '../types/league.types'

const initialState: LeagueSeasonState = {
	seasons: [],
	seasonsLoaded: false,
}

export default (state = initialState, action: LeagueAction) => {
	switch (action.type) {
		case LeagueActionType.GET_SEASONS:
			return {
				...state,
				seasons: action.payload,
				seasonsLoaded: true,
			}
		default:
			return state
	}
}
