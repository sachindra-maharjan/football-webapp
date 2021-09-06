export interface StandingStat {
	draw: number
	goalsAgainst: number
	goalsFor: number
	lose: number
	matchesPlayed: number
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
export interface StandingsState {
	teamStandings: TeamStanding[]
	loaded: boolean
}
