// Interfaces

export interface League {
	country: string
	countryCode: string
	logo: string
	name: string
	type: string
}

export interface LeagueSeason {
	leagueId: number
	season: string
	seasonStart: Date
	seasonEnd: Date
	coverage: LeagueCoverage
}

export interface LeagueCoverageFixtures {
	events: boolean
	lineUps: boolean
	statistics: boolean
	playerStatistics: boolean
}

export interface LeagueCoverage {
	players: boolean
	topScorers: boolean
	standings: boolean
	predictions: boolean
	fixtures: LeagueCoverageFixtures
}

export interface Seasons {
	seasons: LeagueSeason
	done: boolean
}

export interface CurrentLeague {
	selectedLeague: string
	selectedLeagueLoaded: boolean
}

export interface CurrentTeam {
	team: string
	loaded: boolean
}

// States
export interface LeagueSeasonState {
	seasons: LeagueSeason[]
	seasonsLoaded: boolean
}

