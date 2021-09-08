import { CurrentLeague, CurrentTeam, LeagueSeason } from './types/league.types'
import { TeamStanding } from './types/standings.types'

export enum ActionType {
	GET_SEASONS = 'seasons',
	GET_STANDINGS = 'standings',
	GET_SELECTED_LEAGUE = 'selectedLeague',
	GET_SELECTED_TEAM = 'selectedTeam',
}

export enum AppSettingType {
	GET_FOOTBALL_SETTINGS = 'football',
}

// Actions
export interface GetLeagueSeasonAction {
	type: typeof ActionType.GET_SEASONS
	payload: LeagueSeason[]
}

export interface GetStandingsAction {
	type: typeof ActionType.GET_STANDINGS
	payload: TeamStanding[]
}

export interface GetSelectedLeagueAction {
	type: typeof ActionType.GET_SELECTED_LEAGUE
	payload: CurrentLeague
}

export interface GetSelectedTeamAction {
	type: typeof ActionType.GET_SELECTED_TEAM
	payload: CurrentTeam
}

export type Action =
	| GetLeagueSeasonAction
	| GetStandingsAction
	| GetSelectedLeagueAction
	| GetSelectedTeamAction
