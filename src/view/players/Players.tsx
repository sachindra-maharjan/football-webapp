import { makeStyles } from '@material-ui/core'
import React from 'react'
// import classNames from 'classnames'
import Card from '../../component/card/Card'
import CardAvatar from '../../component/card/CardAvatar'
import CardBody from '../../component/card/CardBody'
import GridContainer from '../../component/grid/GridContainer'
import GridItem from '../../component/grid/GridItem'
import avatar from '../../asset/img/faces/marc.jpg'
import CardHeader from '../../component/card/CardHeader'
import styles from './Players.styles'
import Data from '../../component/tasks/PlayerTasks'

const useStyles = makeStyles(styles)

const Players = () => {
	const classes = useStyles()
	// const labelClasses = classNames(classes.data, classes.label)
	// const valueClasses = classNames(classes.data, classes.value)

	const data = [
		{ label: 'Goal', value: '5' },
		{ label: 'Goal', value: '5' },
		{ label: 'Goal', value: '5' },
	]

	return (
		<GridContainer>
			<GridItem xs={12} sm={12} md={4}>
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
						<h6 className={classes.cardCategory}>4</h6>
					</CardBody>
				</Card>
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
						</GridContainer>
					</CardBody>
				</Card>
			</GridItem>
		</GridContainer>
	)
}

export default Players
