import { Player } from './player.types'

export interface Team {
	teamId: string
	name: string
	code: string
	country: string
	founded: number
	logo: string
	venueAddress: string
	venueCity: string
	venueCapacity: number
	venueSurface: string
}

export interface SquadMember extends Player {
	minutesPlayed: number
	gamesPlayed: number
	playerName: string
	number: number
}
