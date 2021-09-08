import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Card from '../../component/card/Card'
import CardBody from '../../component/card/CardBody'
import GridContainer from '../../component/grid/GridContainer'
import GridItem from '../../component/grid/GridItem'
import CardHeader from '../../component/card/CardHeader'
import styles from './Players.styles'
import Data from '../../component/tasks/PlayerTasks'
import { SquadMember } from '../../state/types/team.types'
import PlayerCard from './PlayerCard'
// import PlayerCard from './PlayerCard'

interface Props {}

interface HistoryState {
	squadMember: SquadMember
}

const useStyles = makeStyles(styles)

const PlayerDetail: React.FC<Props> = () => {
	const classes = useStyles()
	const location = useLocation()
	const history = useHistory()

	const historyState = location.state as HistoryState
	const stat = historyState.squadMember

	const getData = (key: string, value: number) => {
		return { label: key, value: value ? `${value}` : '0' }
	}

	const games = [
		getData('Played', stat.gamesPlayed),
		getData('Minutes Played', stat.minutesPlayed),
	]

	const goals = [
		getData('Total', stat.goals.total),
		getData('Assists', stat.goals.assists),
		getData('Saves', stat.goals.saves),
		getData('Conceded', stat.goals.conceded),
	]

	const penalty = [
		getData('Success', stat.penalty.success),
		getData('Won', stat.penalty.won),
		getData('Saved', stat.penalty.saved),
		getData('Missed', stat.penalty.missed),
		getData('Committed', stat.penalty.committed),
	]

	const shots = [
		getData('Total', stat.shots.total),
		getData('On Target', stat.shots.on),
	]

	const fouls = [
		getData('Drawn', stat.fouls.drawn),
		getData('Committed', stat.fouls.committed),
	]

	const tackles = [
		getData('Total', stat.tackles.total),
		getData('Blocks', stat.tackles.blocks),
		getData('Interceptions', stat.tackles.interceptions),
	]

	const duels = [
		getData('Total', stat.duels.total),
		getData('Won', stat.duels.won),
	]

	const passes = [
		getData('Total', stat.passes.total),
		getData('Key', stat.passes.key),
		getData('Accuracy', stat.passes.accuracy),
	]

	const dribbles = [
		getData('Attempt', stat.dribbles.attempt),
		getData('Past', stat.dribbles.past),
		getData('Success', stat.dribbles.success),
	]

	const cards = [
		getData('Yellow', stat.cards.yellow),
		getData('Red', stat.cards.red),
	]

	return (
		<div>
			<div>
				<Button
					variant='text'
					size='small'
					className={classes.data}
					onClick={() => history.goBack()}
					startIcon={<ArrowBackIosIcon fontSize='small' />}
				>
					Back
				</Button>
			</div>
			<div className={classes.spacing}>
				<GridContainer>
					<GridItem xs={12} sm={12} md={4}>
						<PlayerCard squadMember={historyState.squadMember} />
					</GridItem>
					<GridItem xs={12} sm={12} md={8}>
						<Card className=''>
							<CardHeader className='' color='primaryCardHeader'>
								<h4 className={classes.cardTitleWhite}>Statistics</h4>
								{/* <p className={classes.cardCategoryWhite}>2020</p> */}
							</CardHeader>
							<CardBody className=''>
								<GridContainer>
									<GridItem xs={12} sm={12} md={6}>
										<Data title='Matches' tasks={games} />
									</GridItem>
								</GridContainer>
								<GridContainer>
									<GridItem xs={12} sm={12} md={6}>
										<Data title='Goals' tasks={goals} />
									</GridItem>
									<GridItem xs={12} sm={12} md={6}>
										<Data title='Penalty' tasks={penalty} />
									</GridItem>
									<GridItem xs={12} sm={12} md={6}>
										<Data title='Passes' tasks={passes} />
									</GridItem>
									<GridItem xs={12} sm={12} md={6}>
										<Data title='Dribbles' tasks={dribbles} />
									</GridItem>
									<GridItem xs={12} sm={12} md={6}>
										<Data title='Shots' tasks={shots} />
									</GridItem>
									<GridItem xs={12} sm={12} md={6}>
										<Data title='Duels' tasks={duels} />
									</GridItem>
									<GridItem xs={12} sm={12} md={6}>
										<Data title='Tackles' tasks={tackles} />
									</GridItem>
									<GridItem xs={12} sm={12} md={6}>
										<Data title='Fouls' tasks={fouls} />
									</GridItem>
									<GridItem xs={12} sm={12} md={6}>
										<Data title='Cards' tasks={cards} />
									</GridItem>
								</GridContainer>
							</CardBody>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	)
}

PlayerDetail.propTypes = {}

export default PlayerDetail
