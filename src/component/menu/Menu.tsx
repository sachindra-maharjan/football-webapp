import { List, ListItem, makeStyles } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
import convertToObj from '../../firebase/convert'
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

	const settings = useSelector(
		(state: AppState) => state.firestore.data.settings
	)

	useEffect(() => {
		if (isLoaded(settings)) {
			const appsettings = convertToObj<Settings>(settings)
			setAvailableLeague(appsettings.available)
		}
	})

	return (
		<div className={classes.container}>
			<div className={classes.left}>
				<List className={classes.list}>
					{availableLeague?.premierleague ? (
						<ListItem className={classes.inlineBlock}>
							<a href='/dashboard' className={classes.block}>
								Premier League
							</a>
						</ListItem>
					) : (
						''
					)}

					{availableLeague?.laliga ? (
						<ListItem className={classes.inlineBlock}>
							<a href='/dashboard' className={classes.block}>
								La Liga
							</a>
						</ListItem>
					) : (
						''
					)}

					{availableLeague?.bundesliga ? (
						<ListItem className={classes.inlineBlock}>
							<a href='/dashboard' className={classes.block}>
								Buendes Liga
							</a>
						</ListItem>
					) : (
						''
					)}

					{availableLeague?.serieA ? (
						<ListItem className={classes.inlineBlock}>
							<a href='/dashboard' className={classes.block}>
								Serie A
							</a>
						</ListItem>
					) : (
						''
					)}
				</List>
			</div>
		</div>
	)
}

export default Menu
