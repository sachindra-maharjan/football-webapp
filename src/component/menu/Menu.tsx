import { List, ListItem, makeStyles } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
import { NavLink } from 'react-router-dom'
import convertToObj from '../../firebase/convert'
import useRouteName from '../../hooks/useRouteNames'
import { AppState } from '../../state/reducer'
import { AvailableLeague, Settings } from '../../state/types/settings'

// Styles
import styles from './Menu.styles'

interface Prop {}

const useStyles = makeStyles(styles)

const Menu: React.FC<Prop> = () => {
	const classes = useStyles()
	const [availableLeague, setAvailableLeague] =
		React.useState<AvailableLeague>()
	const [currentRoute, setCurrentRoute] = React.useState<string>('')

	const settings = useSelector(
		(state: AppState) => state.firestore.data.settings
	)

	useEffect(() => {
		if (isLoaded(settings)) {
			const appsettings = convertToObj<Settings>(settings)
			setAvailableLeague(appsettings.available)
		}
	}, [settings])

	useEffect(() => setCurrentRoute(useRouteName()))

	return (
		<div className={classes.container}>
			<div className={classes.left}>
				<List className={classes.list}>
					{availableLeague?.premierleague ? (
						<NavLink
							to={currentRoute}
							className=''
							activeClassName=''
							key='premierleague'
						>
							<ListItem className={classes.inlineBlock}>
								<a href='/dashboard' className={classes.block}>
									Premier League
								</a>
							</ListItem>
						</NavLink>
					) : (
						''
					)}
					{availableLeague?.laliga ? (
						<NavLink
							to={currentRoute}
							className=''
							activeClassName=''
							key='laliga'
						>
							<ListItem className={classes.inlineBlock}>
								<a href='/dashboard' className={classes.block}>
									La Liga
								</a>
							</ListItem>
						</NavLink>
					) : (
						''
					)}
					{availableLeague?.bundesliga ? (
						<NavLink
							to={currentRoute}
							className=''
							activeClassName=''
							key='bundesliga'
						>
							<ListItem className={classes.inlineBlock}>
								<a href='/dashboard' className={classes.block}>
									BundesLiga
								</a>
							</ListItem>
						</NavLink>
					) : (
						''
					)}
					{availableLeague?.serieA ? (
						<NavLink
							to={currentRoute}
							className=''
							activeClassName=''
							key='serieA'
						>
							<ListItem className={classes.inlineBlock}>
								<a href='/dashboard' className={classes.block}>
									Serie A
								</a>
							</ListItem>
						</NavLink>
					) : (
						''
					)}
				</List>
			</div>
		</div>
	)
}

export default Menu
