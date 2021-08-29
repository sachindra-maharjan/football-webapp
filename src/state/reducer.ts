import { combineReducers } from 'redux'
import { firebaseReducer, FirebaseReducer } from 'react-redux-firebase'
import { firestoreReducer, FirestoreReducer } from 'redux-firestore'
import { TeamStanding } from './types/standings.types'
import { CurrentLeague, League, LeagueSeason } from './types/league.types'
import { Settings } from './types/settings'
import currentSelectedLeague from './reducers/settingsReducer'

interface FirestoreSchema {
	settings: Settings
	league: League
	seasons: LeagueSeason
	standings: TeamStanding
	[name: string]: any
}

interface RootState {
	firebase: FirebaseReducer.Reducer<{}, FirestoreSchema>
	firestore: FirestoreReducer.Reducer<FirestoreSchema>
	selectedLeague: CurrentLeague
}

const rootReducer = combineReducers<RootState>({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	selectedLeague: currentSelectedLeague,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
