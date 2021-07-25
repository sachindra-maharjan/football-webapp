import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Drawer, Hidden, makeStyles } from '@material-ui/core'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import classNames from 'classnames'
import PropTypes from 'prop-types'

// import Dashboard from '@material-ui/icons/Dashboard'

// Styles
import styles, { LogoWrapper } from './Sidebar.styles'

const useStyle = makeStyles(styles)

export interface Props {
	logo: string
	image: string
	open: boolean
	color: string
	handleDrawerToggle: () => void
	routes: {
		name: string
		path: string
		icon: any
		component: any
	}[]
}

const Sidebar: React.FC<Props> = ({
	routes,
	logo,
	image,
	open,
	handleDrawerToggle,
}) => {
	const classes = useStyle()
	const location = useLocation()

	// verifies if routeName is the one active (in browser input)
	function activeRoute(routeName: string): boolean {
		return location.pathname === routeName
	}

	const links = (
		<List className={classes.list}>
			{routes.map(prop => {
				const listItemClasses = classNames({
					[` ${classes.blue}`]: activeRoute(prop.path),
				})
				const whiteFontClasses = classNames({
					[` ${classes.whiteFont}`]: activeRoute(prop.path),
				})
				return (
					<NavLink
						to={prop.path}
						className={classes.item}
						activeClassName='active'
						key={prop.name}
					>
						<ListItem button className={classes.itemLink + listItemClasses}>
							<div className={classNames(classes.itemIcon, whiteFontClasses)}>
								{prop.icon}
							</div>
							<ListItemText
								primary={prop.name}
								className={classNames(classes.itemText)}
							/>
						</ListItem>
					</NavLink>
				)
			})}
		</List>
	)

	const brand = (
		<LogoWrapper>
			<a
				href='/'
				className={classNames(classes.logoLink, {
					[classes.logoLinkRTL]: false,
				})}
				target='_self'
				rel='noreferrer'
			>
				<div className={classes.logoImage}>
					<img src={logo} alt='logo' className={classes.img} />
				</div>
				Prime Sport
			</a>
		</LogoWrapper>
	)

	return (
		<div>
			<Hidden mdUp implementation='css'>
				<Drawer
					variant='temporary'
					anchor='left'
					open={open}
					classes={{
						paper: classNames(classes.drawerPaper),
					}}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
				>
					{brand}
					<div className={classes.sidebarWrapper}>{links}</div>
				</Drawer>
			</Hidden>
			<Hidden smDown implementation='css'>
				<Drawer
					anchor='left'
					variant='permanent'
					open
					classes={{
						paper: classNames(classes.drawerPaper, {
							[classes.drawerPaperRTL]: false,
						}),
					}}
				>
					{brand}
					<div className={classes.sidebarWrapper}>{links}</div>
					{image !== undefined ? (
						<div
							className={classes.background}
							style={{ backgroundImage: `url(${image})` }}
						/>
					) : null}
				</Drawer>
			</Hidden>
		</div>
	)
}

Sidebar.propTypes = {
	logo: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
	// color: PropTypes.string.isRequired,
	handleDrawerToggle: PropTypes.func.isRequired,
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			path: PropTypes.string.isRequired,
			// eslint-disable-next-line react/forbid-prop-types
			icon: PropTypes.string.isRequired,
			// eslint-disable-next-line react/forbid-prop-types
			component: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
}

export default Sidebar
