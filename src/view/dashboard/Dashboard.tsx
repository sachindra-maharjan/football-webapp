import { makeStyles } from '@material-ui/core'
import { SportsSoccer } from '@material-ui/icons'
import React from 'react'
import Card from '../../component/card/Card'
import CardBody from '../../component/card/CardBody'
import CardHeader from '../../component/card/CardHeader'
import CustomTabs from '../../component/customTabs/CustomTabs'
import GridContainer from '../../component/grid/GridContainer'
import GridItem from '../../component/grid/GridItem'
import CustomTable from '../../component/table/Table'
import Tasks from '../../component/tasks/FixtureTasks'

// core components

import styles from './Dashboard.styles'

const useStyles = makeStyles(styles)

const bugs = [
	{ fixtureId: '1', home: 'Manchester United', away: 'Manchester City' },
	{ fixtureId: '2', home: 'Manchester United', away: 'Manchester City' },
	{ fixtureId: '3', home: 'Manchester United', away: 'Manchester City' },
	{ fixtureId: '4', home: 'Manchester United', away: 'Manchester City' },
]

const bugs2 = [
	{ fixtureId: '1', home: 'Chelsea', away: 'Liverpool' },
	{ fixtureId: '2', home: 'Manchester United', away: 'Manchester City' },
	{ fixtureId: '3', home: 'Manchester United', away: 'Manchester City' },
	{ fixtureId: '4', home: 'Manchester United', away: 'Manchester City' },
]

const dashboard = () => {
	const classes = useStyles()

	return (
		<GridContainer>
			<GridItem xs={12} sm={12} md={6}>
				<CustomTabs
					title='Fixtures'
					headerColor='successCardHeader'
					selectedIndex={0}
					tabs={[
						{
							tabName: 'Week 1',
							tabContent: <Tasks tasks={bugs} />,
						},
					]}
				/>
			</GridItem>
			<GridItem xs={12} sm={12} md={6}>
				<CustomTabs
					title='Fixtures'
					headerColor='infoCardHeader'
					selectedIndex={2}
					tabs={[
						{
							tabName: 'Week 1',
							tabIcon: SportsSoccer,
							tabContent: <Tasks tasks={bugs} />,
						},
						{
							tabName: 'Week 2',
							tabIcon: SportsSoccer,
							tabContent: <Tasks tasks={bugs2} />,
						},
						{
							tabName: 'Week10',
							tabIcon: SportsSoccer,
							tabContent: <Tasks tasks={bugs} />,
						},
						{
							tabName: 'Week 1',
							tabIcon: SportsSoccer,
							tabContent: <Tasks tasks={bugs} />,
						},
						{
							tabName: 'Week 2',
							tabIcon: SportsSoccer,
							tabContent: <Tasks tasks={bugs2} />,
						},
						{
							tabName: 'Week10',
							tabIcon: SportsSoccer,
							tabContent: <Tasks tasks={bugs} />,
						},
					]}
				/>
			</GridItem>
			<GridItem xs={12} sm={12} md={6}>
				<Card className=''>
					<CardHeader color='primaryCardHeader' className=''>
						<h4 className={classes.cardTitleWhite}>Standings</h4>
						<p className={classes.cardCategoryWhite}>Week 3</p>
					</CardHeader>
					<CardBody className=''>
						<CustomTable
							tableHeaderColor='warning'
							tableHead={['ID', 'Name', 'Salary', 'Country']}
							tableData={[
								['1', 'Dakota Rice', '$36,738', 'Niger'],
								['2', 'Minerva Hooper', '$23,789', 'Curaçao'],
								['3', 'Sage Rodriguez', '$56,142', 'Netherlands'],
								['4', 'Philip Chaney', '$38,735', 'Korea, South'],
							]}
						/>
					</CardBody>
				</Card>
			</GridItem>
			<GridItem xs={12} sm={12} md={6}>
				<Card className=''>
					<CardHeader color='roseCardHeader' className=''>
						<h4 className={classes.cardTitleWhite}>Top Scorer</h4>
						<p className={classes.cardCategoryWhite}>Week 3</p>
					</CardHeader>
					<CardBody className=''>
						<CustomTable
							tableHeaderColor='warning'
							tableHead={['ID', 'Name', 'Salary', 'Country']}
							tableData={[
								['1', 'Dakota Rice', '$36,738', 'Niger'],
								['2', 'Minerva Hooper', '$23,789', 'Curaçao'],
								['3', 'Sage Rodriguez', '$56,142', 'Netherlands'],
								['4', 'Philip Chaney', '$38,735', 'Korea, South'],
							]}
						/>
					</CardBody>
				</Card>
			</GridItem>
		</GridContainer>
	)
}

export default dashboard
