import { combineReducers } from 'redux'
import { firebaseReducer, FirebaseReducer } from 'react-redux-firebase'
import { firestoreReducer, FirestoreReducer } from 'redux-firestore'
import { TeamStanding } from './types/standings.types'
import {
	CurrentLeague,
	CurrentTeam,
	League,
	LeagueSeason,
} from './types/league.types'
import { Settings } from './types/settings'
import currentSelectedLeague from './reducers/leagueReducer'
import { Player } from './types/player.types'
import { SquadMember, Team } from './types/team.types'
import currentSelectedTeam from './reducers/teamReducer'

interface FirestoreSchema {
	settings: Settings
	league: League
	seasons: LeagueSeason
	standings: TeamStanding
	topScorers: Player
	teams: Team
	squad: SquadMember
	[name: string]: any
}

interface RootState {
	firebase: FirebaseReducer.Reducer<{}, FirestoreSchema>
	firestore: FirestoreReducer.Reducer<FirestoreSchema>
	selectedLeague: CurrentLeague
	selectedTeam: CurrentTeam
}

const rootReducer = combineReducers<RootState>({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	selectedLeague: currentSelectedLeague,
	selectedTeam: currentSelectedTeam,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
