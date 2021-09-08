import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'

// Styles
import styles from './NavBar.styles'

// Components
import NavbarLinks from '../navbarLinks/NavBarLinks'
import MenuBar from '../menu/Menu'

interface Props {
	color: string
	handleDrawerToggle: () => void
}

const useStyles = makeStyles(styles)

const NavBar: React.FC<Props> = ({ color }) => {
	const classes = useStyles()
	const appBarClasses = classNames({
		[` ${classes.title}`]: { color },
	})

	return (
		<AppBar className={classes.appBar + appBarClasses}>
			<Toolbar className={classes.container}>
				<div className={classes.flex}>
					<MenuBar />
				</div>

				<Hidden smDown implementation='css'>
					<NavbarLinks />
				</Hidden>
				{/* <Hidden mdUp implementation='css'>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerToggle}
					>
						<MenuBar />
					</IconButton>
				</Hidden> */}
			</Toolbar>
		</AppBar>
	)
}

NavBar.propTypes = {
	color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger'])
		.isRequired,
	// handleDrawerToggle: PropTypes.func.isRequired,
}

export default NavBar
