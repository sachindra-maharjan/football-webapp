import { List, ListItem, makeStyles } from '@material-ui/core'
import React from 'react'

// Styles
import styles from './Menu.styles'

interface Prop {}

const useStyles = makeStyles(styles)

const Menu: React.FC<Prop> = () => {
	const classes = useStyles()

	return (
		<div className={classes.container}>
			<div className={classes.left}>
				<List className={classes.list}>
					<ListItem className={classes.inlineBlock}>
						<a href='/dashboard' className={classes.block}>
							Premier League
						</a>
					</ListItem>
					<ListItem className={classes.inlineBlock}>
						<a href='/dashboard' className={classes.block}>
							La-Liga
						</a>
					</ListItem>
					<ListItem className={classes.inlineBlock}>
						<a href='/dashboard' className={classes.block}>
							Bundesliga
						</a>
					</ListItem>
					<ListItem className={classes.inlineBlock}>
						<a href='/dashboard' className={classes.block}>
							Seria A
						</a>
					</ListItem>
				</List>
			</div>
		</div>
	)
}

export default Menu
