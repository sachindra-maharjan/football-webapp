export interface Goals {
	assists: number
	conceded: number
	saves: number
	total: number
}

export interface Games {
	appearences: number
	minutesPlayed: number
}

export interface Dribbles {
	attempt: number
	past: number
	success: number
}

export interface Duels {
	won: number
	total: number
}

export interface Fouls {
	drawn: number
	committed: number
}

export interface Passes {
	accuracy: number
	key: number
	total: number
}

export interface Shots {
	on: number
	total: number
}

export interface Cards {
	yellow: number
	red: number
}

export interface Penalty {
	committed: number
	missed: number
	saved: number
	success: number
	won: number
}

export interface Tackles {
	blocks: number
	interceptions: number
	total: number
}

export interface Player {
	firstName: string
	lastName: string
	playerName: string
	playerId: number
	teamId: number
	teamName: string
	position: string
	nationality: string
	goals: Goals
	dribbles: Dribbles
	duels: Duels
	games: Games
	passes: Passes
	shots: Shots
	cards: Cards
	penalty: Penalty
	tackles: Tackles
}
