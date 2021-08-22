import { LeagueSeason } from './types/league.types'
import { TeamStanding } from './types/standings.types'

export enum LeagueActionType {
	GET_SEASONS = 'seasons',
	GET_STANDINGS = 'standings',
}

export enum AppSettingType {
	GET_FOOTBALL_SETTINGS = 'football',
}

// Actions
export interface GetLeagueSeasonAction {
	type: typeof LeagueActionType.GET_SEASONS
	payload: LeagueSeason[]
}

export interface GetStandingsAction {
	type: typeof LeagueActionType.GET_STANDINGS
	payload: TeamStanding[]
}

export type LeagueAction = GetLeagueSeasonAction | GetStandingsAction
