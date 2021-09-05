import React from 'react'
import { Badge, IconButton, makeStyles } from '@material-ui/core'
import { createStyles, withStyles } from '@material-ui/styles'
import CardAvatar from '../../component/card/CardAvatar'
import CardBody from '../../component/card/CardBody'
import styles from './Players.styles'
import avatar from '../../asset/img/faces/marc.jpg'
import Card from '../../component/card/Card'

const useStyles = makeStyles(styles)

const StyledBadge = withStyles(() =>
	createStyles({
		badge: {
			right: '-3',
			top: '13',
			border: `2px solid`,
			padding: '0 4px',
		},
	})
)(Badge)

const PlayerCard = () => {
	const classes = useStyles()
	return (
		<Card className='' profile>
			<CardAvatar className='' profile>
				<a href='#pablo' onClick={e => e.preventDefault()}>
					<img src={avatar} alt='...' />
				</a>
			</CardAvatar>
			<CardBody className='' profile>
				<h4 className={classes.cardTitle}>Wayne Rooney</h4>
				<h5 className={classes.cardCategory}>Manchester United</h5>
				<h6 className={classes.cardCategory}>Midfield</h6>
				<IconButton aria-label='number'>
					<StyledBadge badgeContent={4} color='primary' />
				</IconButton>
			</CardBody>
		</Card>
	)
}

export default PlayerCard
