import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

// reducers
import leagueReducer from './reducers/teamStandingReducer'

const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	league: leagueReducer,
})

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof rootReducer>

export default store
