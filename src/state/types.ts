export enum LeagueActionType {
	GET_SEASONS = 'seasons',
	GET_STANDINGS = 'standings',
}

// Interfaces

export interface LeagueSeason {
	leagueId: number
	leageuName: string
	season: string
	seasonStart: Date
	seasonEnd: Date
}

export interface StandingStat {
	draw: number
	goalsAgainst: number
	goalsFor: number
	lose: number
	matchsPlayed: number
	win: number
}

export interface TeamStanding {
	leagueId: number
	teamId: number
	teamName: string
	rank: number
	logo: string
	forme: string
	group: string
	all: StandingStat
	away: StandingStat
	home: StandingStat
}

// States

export interface LeagueSeasonState {
	seasons: LeagueSeason[]
	loaded: boolean
}

export interface StandingsState {
	teamStandings: TeamStanding[]
	loaded: boolean
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
