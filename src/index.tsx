import { createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'

// Redux
// import { createStore } from 'redux'

// const store = createStore()

const theme = createTheme({
	typography: {
		body1: {
			fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
			fontWeight: 300,
			fontSize: 14,
			color: '#FFF',
			lineHeight: '30px',
		},
	},
})

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<Switch>
				<Route path='/' component={App} />
			</Switch>
		</BrowserRouter>
	</ThemeProvider>,

	document.getElementById('root')
)
