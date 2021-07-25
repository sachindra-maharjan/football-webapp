import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Material UI
import { makeStyles } from '@material-ui/core/styles'

import routes from './routes'

// Images
import bgImage from './asset/img/sidebar-5.jpg'
import logo from './asset/img/reactlogo.png'

// Styles
import styles from './App.styles'

// Components
import Sidebar from './component/sidebar/Sidebar'

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
	// const mainPanel = React.createRef()
	// states and functions
	const [image] = React.useState(bgImage)
	const [color] = React.useState('blue')
	// const [color, setColor] = React.useState('blue')
	// const [fixedClasses, setFixedClasses] = React.useState('dropdown show')
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

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
				<div className={classes.content}>
					<div className={classes.container}>{switchRoutes}</div>
				</div>
			</div>
		</div>
	)
}

export default App
