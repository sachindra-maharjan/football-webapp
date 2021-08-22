import { combineReducers } from 'redux'
import { firebaseReducer, FirebaseReducer } from 'react-redux-firebase'
import { firestoreReducer, FirestoreReducer } from 'redux-firestore'
import { TeamStanding } from './types/standings.types'
import { LeagueSeason } from './types/league.types'

interface FirestoreSchema {
	seasons: LeagueSeason
	standings: TeamStanding
	[name: string]: any
}

interface RootState {
	firebase: FirebaseReducer.Reducer<{}, FirestoreSchema>
	firestore: FirestoreReducer.Reducer<FirestoreSchema>
}

const rootReducer = combineReducers<RootState>({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
