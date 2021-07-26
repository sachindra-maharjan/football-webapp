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
						<a href='#home' className={classes.block}>
							Home
						</a>
					</ListItem>
					<ListItem className={classes.inlineBlock}>
						<a href='#company' className={classes.block}>
							Standings
						</a>
					</ListItem>
					<ListItem className={classes.inlineBlock}>
						<a href='#portfolio' className={classes.block}>
							Fixtures
						</a>
					</ListItem>
					<ListItem className={classes.inlineBlock}>
						<a href='#blog' className={classes.block}>
							Teams
						</a>
					</ListItem>
				</List>
			</div>
		</div>
	)
}

export default Menu
