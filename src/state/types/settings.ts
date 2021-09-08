export interface Settings {
	default: string
	available: AvailableLeague
}

export interface AvailableLeague {
	premierleague: boolean
	bundesliga: boolean
	laliga: boolean
	serieA: boolean
}
