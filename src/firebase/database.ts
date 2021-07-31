import { TeamStanding } from '../state/types'
import firebase from './config'

// This helper function pipes your types through a firestore converter
const converter = <T>() => ({
	toFirestore: (data: Partial<T>) => data,
	fromFirestore: (snap: firebase.firestore.QueryDocumentSnapshot) =>
		snap.data() as T,
})

const dataPoint = <T>(collectionPath: string) =>
	firebase.firestore().collection(collectionPath).withConverter(converter<T>())

const db = {
	// list of collections
	standings: (leagueType: string, leageuId: string) =>
		dataPoint<TeamStanding>(
			`/football-leagues/${leagueType}/leagues/${leageuId}/standings`
		),
}

export default db
