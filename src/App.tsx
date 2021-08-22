import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useFirestoreConnect } from 'react-redux-firebase'

// State
import { makeStyles } from '@material-ui/core/styles'

// Material UI

// Styles
import styles from './App.styles'

import routes from './routes'

// Components
import Sidebar from './component/sidebar/Sidebar'
import NavBar from './component/navbar/NavBar'

// Image
import logo from './asset/img/reactlogo.png'
import bgImage from './asset/img/sidebar-5.jpg'

// let ps: PerfectScrollbar
const switchRoutes = (
	<Switch>
		{routes.map(prop => {
			return (
				<Route path={prop.path} component={prop.component} key={prop.name} />
			)
		})}
		<Redirect from='/' to='/dashboard' />
	</Switch>
)

const useStyles = makeStyles(styles)

const App = () => {
	const classes = useStyles()
	// ref to help us initialize PerfectScrollbar on windows devices
	// const mainPanel: React.RefObject<Element> = React.createRef<Element>()
	// states and functions
	const [image] = React.useState(bgImage)
	const [color] = React.useState('blue')
	const [mobileOpen, setMobileOpen] = React.useState(false)
	const [selectedLeague] = React.useState('premierleague')

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}
	const year = new Date().getFullYear() - 1

	useFirestoreConnect([
		{
			collection: '/football-leagues',
			doc: selectedLeague,
			storeAs: 'league',
		},
	])

	// Get Default Current Season
	useFirestoreConnect([
		{
			collection: '/football-leagues',
			doc: selectedLeague,
			subcollections: [
				{
					collection: 'leagues',
					where: ['season', '>=', year.toString()],
					orderBy: ['season', 'desc'],
					limit: 1,
				},
			],
			storeAs: 'seasons',
		},
	])

	return (
		<div className={classes.wrapper}>
			<Sidebar
				routes={routes}
				image={image}
				logo={logo}
				open={mobileOpen}
				color={color}
				handleDrawerToggle={handleDrawerToggle}
			/>
			<div className={classes.mainPanel}>
				<NavBar color='primary' handleDrawerToggle={handleDrawerToggle} />
				<div className={classes.content}>
					<div className={classes.container}>{switchRoutes}</div>
				</div>
			</div>
		</div>
	)
}

export default App
