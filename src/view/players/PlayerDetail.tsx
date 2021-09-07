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

	const data = [
		{ label: 'Goal', value: '5' },
		{ label: 'Goal', value: '5' },
		{ label: 'Goal', value: '5' },
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
								<p className={classes.cardCategoryWhite}>2020</p>
							</CardHeader>
							<CardBody className=''>
								<GridContainer>
									<GridItem xs={12} sm={12} md={6}>
										<Data title='Fouls' tasks={data} />
									</GridItem>
									<GridItem xs={12} sm={12} md={6}>
										<Data title='Fouls' tasks={data} />
									</GridItem>
									<GridItem xs={12} sm={12} md={6}>
										<Data title='Fouls' tasks={data} />
									</GridItem>
									<GridItem xs={12} sm={12} md={6}>
										<Data title='Fouls' tasks={data} />
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
