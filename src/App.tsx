import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

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
console.log(switchRoutes)

const useStyles = makeStyles(styles)

const App = () => {
	const classes = useStyles()
	// ref to help us initialize PerfectScrollbar on windows devices
	// const mainPanel: React.RefObject<Element> = React.createRef<Element>()
	// states and functions
	const [image] = React.useState(bgImage)
	const [color] = React.useState('blue')
	// const [color, setColor] = React.useState('blue')
	// const [fixedClasses, setFixedClasses] = React.useState('dropdown show')
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}
	// const resizeFunction = () => {
	// 	if (window.innerWidth >= 960) {
	// 	  setMobileOpen(false);
	// 	}
	//   };
	// initialize and destroy the PerfectScrollbar plugin
	// React.useEffect(() => {
	// 	if (navigator.platform.indexOf("Win") > -1) {
	// 	  ps = new PerfectScrollbar(mainPanel.current !== null ? mainPanel.current : '', {
	// 		suppressScrollX: true,
	// 		suppressScrollY: false,
	// 	  });
	// 	  document.body.style.overflow = "hidden";
	// 	}
	// 	window.addEventListener("resize", resizeFunction);
	// 	// Specify how to clean up after this effect:
	// 	return function cleanup() {
	// 	  if (navigator.platform.indexOf("Win") > -1) {
	// 		ps.destroy();
	// 	  }
	// 	  window.removeEventListener("resize", resizeFunction);
	// 	};
	//   }, [mainPanel]);

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
				<NavBar color={color} handleDrawerToggle={handleDrawerToggle} />
				<div className={classes.content}>
					<div className={classes.container}>{switchRoutes}</div>
				</div>
			</div>
		</div>
	)
}

export default App
