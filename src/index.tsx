// import { createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
// import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
// import { createFirestoreInstance } from 'redux-firestore'

import App from './App'
import store from './state/index'
// import firebase from './firebase/config'

// const rrfConfig = {
// 	userProfile: 'users',
// 	useFirestoreForProfile: true,
// }

// const rrfProps = {
// 	firebase,
// 	config: rrfConfig,
// 	dispatch: store.dispatch,
// 	createFirestoreInstance,
// }

ReactDOM.render(
	<Provider store={store}>
		{/* eslint-disable-next-line react/jsx-props-no-spreading */}
		{/* <ReactReduxFirebaseProvider {...rrfProps}> */}
			<BrowserRouter>
				<Switch>
					<Route path='/' component={App} />
				</Switch>
			</BrowserRouter>
		{/* </ReactReduxFirebaseProvider> */}
	</Provider>,
	document.getElementById('root')
)
