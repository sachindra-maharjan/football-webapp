import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// Material UI
import { makeStyles } from '@material-ui/core/styles'

// import PerfectScrollbar from 'perfect-scrollbar'
import routes from './routes'

// Images
import bgImage from './asset/img/sidebar-5.jpg'
import logo from './asset/img/reactlogo.png'

// Styles
import styles from './App.styles'

// Components
import Sidebar from './component/sidebar/Sidebar'
import NavBar from './component/navbar/NavBar'

import { RootState } from './state'
import getCurrentSeason from './state/actions/leagueActions'

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

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	const { seasonsLoaded } = useSelector((state: RootState) => state.league)

	const dispatch = useDispatch()

	useEffect(() => {
		if (!seasonsLoaded) {
			dispatch(getCurrentSeason())
		}
	}, [])

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
