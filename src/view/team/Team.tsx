import { Place } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Card from '../../component/card/Card'
import CardBody from '../../component/card/CardBody'
import CardFooter from '../../component/card/CardFooter'
import CardHeader from '../../component/card/CardHeader'
import GridContainer from '../../component/grid/GridContainer'
import GridItem from '../../component/grid/GridItem'
import styles from '../dashboard/Dashboard.styles'

interface Props {}

const useStyles = makeStyles(styles)

const Team: React.FC<Props> = () => {
	const classes = useStyles()
	return (
		<div>
			<GridContainer>
				<GridItem xs={12} sm={12} md={4}>
					<Card chart className=''>
						<CardHeader color='successCardHeader' stats icon className=''>
							<div>
								<img
									alt=''
									src='https://cdn.cdnlogo.com/logos/m/68/manchester-united.svg'
								/>
							</div>
						</CardHeader>
						<CardBody className=''>
							<h4 className={classes.cardTitle}>Manchester United</h4>
							<p className={classes.cardCategory}>Founded: 1878</p>
							<p className={classes.cardCategory}>Stadium Capacity: 76212</p>
						</CardBody>
						<CardFooter className='' chart>
							<div className={classes.stats}>
								<Place /> Sir Matt Busby Way, Manchester
							</div>
						</CardFooter>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	)
}

export default Team
