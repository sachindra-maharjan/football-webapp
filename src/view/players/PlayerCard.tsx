import React from 'react'
import { Badge, IconButton, makeStyles } from '@material-ui/core'
import { createStyles, withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import CardAvatar from '../../component/card/CardAvatar'
import CardBody from '../../component/card/CardBody'
import styles from './Players.styles'
import avatar from '../../asset/img/faces/marc.jpg'
import Card from '../../component/card/Card'
import { SquadMember } from '../../state/types/team.types'

const positions: { [key: string]: string } = {
	G: 'GoalKeeper',
	D: 'Defender',
	M: 'Midfielder',
	F: 'Attacker',
}

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

interface Props {
	squadMember: SquadMember
}

const PlayerCard: React.FC<Props> = ({ squadMember }) => {
	const classes = useStyles()
	return (
		<Card className='' profile>
			<CardAvatar className='' profile>
				<a href='#pablo' onClick={e => e.preventDefault()}>
					<img src={avatar} alt='...' />
				</a>
			</CardAvatar>
			<CardBody className='' profile>
				<h4 className={classes.cardTitle}>{squadMember.playerName}</h4>
				<h5 className={classes.cardCategory}>{squadMember.teamName}</h5>
				<h6 className={classes.cardCategory}>
					{positions[squadMember.position]}
				</h6>
				<IconButton aria-label='number'>
					<StyledBadge badgeContent={squadMember.number} color='primary' />
				</IconButton>
			</CardBody>
		</Card>
	)
}

PlayerCard.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	squadMember: PropTypes.any.isRequired,
}

export default PlayerCard
