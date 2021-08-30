import { Card, makeStyles } from '@material-ui/core'
import React from 'react'
import GridContainer from '../../component/grid/GridContainer'
import GridItem from '../../component/grid/GridItem'

// core components
import CardHeader from '../../component/card/CardHeader'
import CardFooter from '../../component/card/CardFooter'
import styles from './Dashboard.styles'

const useStyles = makeStyles(styles)

const dashboard = () => {
	const classes = useStyles()

	return (
		<div>
			<GridContainer>
				<GridItem xs={12} sm={6} md={3}>
					<Card>
						<CardHeader color='primaryCardHeader' className='' icon>
							<div className={classes.cardCategory}>
								<h4 className={classes.cardTitle}>
									<span className={classes.teamBlock}>Manchester United</span>
									<span className={classes.scoreBlock}>10</span>
								</h4>
								<h4 className={classes.cardTitle}>
									<span className={classes.teamBlock}>Manchester City</span>
									<span className={classes.scoreBlock}>9</span>
								</h4>
							</div>
						</CardHeader>
						<CardFooter className={classes.venueDivider}>
							<span className={classes.venue}>Old Trafford</span>
						</CardFooter>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	)
}

export default dashboard
