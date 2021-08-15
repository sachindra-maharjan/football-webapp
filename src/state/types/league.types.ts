// Interfaces

export interface LeagueSeason {
	leagueId: number
	leageuName: string
	season: string
	seasonStart: Date
	seasonEnd: Date
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

// States
export interface LeagueSeasonState {
	seasons: LeagueSeason[]
	seasonsLoaded: boolean
}
