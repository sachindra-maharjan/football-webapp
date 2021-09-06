import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import GridContainer from '../../component/grid/GridContainer'
import GridItem from '../../component/grid/GridItem'
import styles from './Players.styles'
import PlayerCard from './PlayerCard'

const useStyles = makeStyles(styles)

const Players = () => {
	const classes = useStyles()
	const history = useHistory()

	return (
		<div>
			<div className={classes.spacingBotton}>
				<span className={classes.cardTitle}>Manchester United</span>
			</div>
			<div className={classes.spacing}>
				<GridContainer>
					<GridItem
						xs={12}
						sm={12}
						md={4}
						onClick={() =>
							history.push({
								pathname: '/player',
								state: { playerId: 'player1' },
							})
						}
					>
						<PlayerCard />
					</GridItem>
					<GridItem
						xs={12}
						sm={12}
						md={4}
						onClick={() =>
							history.push({
								pathname: '/player',
								state: { playerId: 'player1' },
							})
						}
					>
						<PlayerCard />
					</GridItem>
					<GridItem
						xs={12}
						sm={12}
						md={4}
						onClick={() =>
							history.push({
								pathname: '/player',
								state: { playerId: 'player1' },
							})
						}
					>
						<PlayerCard />
					</GridItem>
				</GridContainer>
			</div>
		</div>
	)
}

export default Players
