export interface Fixture {
	fixtureId: string
	leagueId: string
	eventDate: Date
	eventTimeStamp: number
	venue: string
	status: string
	shortStatus: string
	referee: string
	round: string
	goalsHomeTeam: number
	goalsAwayTeam: number
	homeTeam: Team
	awayTeam: Team
	firstHalfStart: number
	secondHalfStart: number
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
