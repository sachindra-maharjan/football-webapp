export interface Fixture {
	fixtureId: string
	leagueId: string
	eventDate: Date
	eventTimestamp: number
	venue: string
	status: string
	statusShort: string
	referee: string
	round: string
	goalsHomeTeam: number
	goalsAwayTeam: number
	homeTeam: Team
	awayTeam: Team
	firstHalfStart: number
	secondHalfStart: number
	elapsed: number
	Score: Score
}

export interface Team {
	teamId: string
	teamName: string
	logo: string
}

export interface Score {
	halfTime: string
	fullTime: string
}
