// import { createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './state/index'

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path='/' component={App} />
			</Switch>
		</BrowserRouter>
	</Provider>,

	document.getElementById('root')
)
