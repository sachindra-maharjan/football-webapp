import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'

import App from './App'
import configureStore from './state/store'
import { firebaseConfig, reduxFirebase } from './firebase/config'

const store = configureStore()
firebase.initializeApp(firebaseConfig)
firebase.firestore()

const rrfProps = {
	firebase,
	config: reduxFirebase,
	dispatch: store.dispatch,
	createFirestoreInstance,
}

ReactDOM.render(
	<Provider store={store}>
		{/* eslint-disable-next-line react/jsx-props-no-spreading */}
		<ReactReduxFirebaseProvider {...rrfProps}>
			<BrowserRouter>
				<Switch>
					<Route path='/' component={App} />
				</Switch>
			</BrowserRouter>
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById('root')
)
