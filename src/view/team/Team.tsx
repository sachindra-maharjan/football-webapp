import { DateRange } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Card from '../../component/card/Card'
import CardFooter from '../../component/card/CardFooter'
import CardHeader from '../../component/card/CardHeader'
import CardIcon from '../../component/card/CardIcon'
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
				<GridItem xs={12} sm={6} md={3}>
					<Card className=''>
						<CardHeader color='successCardHeader' stats icon className=''>
							<CardIcon color='successCardHeader' className=''>
								<img
									alt=''
									src='https://cdn.cdnlogo.com/logos/m/68/manchester-united.svg'
								/>
							</CardIcon>
							<p className={classes.cardCategory}>Revenue</p>
							<h3 className={classes.cardTitle}>$34,245</h3>
						</CardHeader>
						<CardFooter stats className=''>
							<div className={classes.stats}>
								<DateRange />
								Last 24 Hours
							</div>
						</CardFooter>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	)
}

export default Team
