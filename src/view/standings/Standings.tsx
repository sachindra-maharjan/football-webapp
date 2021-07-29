import { createStyles, makeStyles } from '@material-ui/styles'
import React from 'react'
import Card from '../../component/card/Card'
import CardBody from '../../component/card/CardBody'
import CardHeader from '../../component/card/CardHeader'
import GridContainer from '../../component/grid/GridContainer'
import GridItem from '../../component/grid/GridItem'
import Table from '../../component/table/Table'

const styles = createStyles({
	cardCategoryWhite: {
		'&,& a,& a:hover,& a:focus': {
			color: 'rgba(255,255,255,.62)',
			margin: '0',
			fontSize: '14px',
			marginTop: '0',
			marginBottom: '0',
		},
		'& a,& a:hover,& a:focus': {
			color: '#FFFFFF',
		},
	},
	cardTitleWhite: {
		color: '#FFFFFF',
		marginTop: '0px',
		minHeight: 'auto',
		fontWeight: 300,
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: '3px',
		textDecoration: 'none',
		'& small': {
			color: '#777',
			fontSize: '65%',
			fontWeight: '400',
			lineHeight: '1',
		},
	},
})

interface Props {}

const useStyles = makeStyles(styles)

const Standings: React.FC<Props> = () => {
	const classes = useStyles()

	return (
		<GridContainer>
			<GridItem xs={12} sm={12} md={12}>
				<Card className=''>
					<CardHeader color='primaryCardHeader' className=''>
						<h4 className={classes.cardTitleWhite}>Premier League</h4>
						<p className={classes.cardCategoryWhite}>Week 12</p>
					</CardHeader>
					<CardBody className=''>
						<Table
							tableHeaderColor='primary'
							tableHead={[
								'Pos',
								'Team',
								'Played',
								'Won',
								'Drawn',
								'Lost',
								'For',
								'Against',
								'Diff',
								'Points',
								'Form',
							]}
							tableData={[
								[
									'1',
									'Manchester United',
									'0',
									'0',
									'0',
									'0',
									'0',
									'0',
									'0',
									'0',
									'WWWWWW',
								],
								[
									'2',
									'Liverpool',
									'0',
									'0',
									'0',
									'0',
									'0',
									'0',
									'0',
									'0',
									'WWWWWW',
								],
								[
									'3',
									'Arsenal',
									'0',
									'0',
									'0',
									'0',
									'0',
									'0',
									'0',
									'0',
									'WWWWWW',
								],
								[
									'4',
									'Manchester City',
									'0',
									'0',
									'0',
									'0',
									'0',
									'0',
									'0',
									'0',
									'WWWWWW',
								],
								[
									'5',
									'Chelsea',
									'0',
									'0',
									'0',
									'0',
									'0',
									'0',
									'0',
									'0',
									'WWWWWW',
								],
								[
									'6',
									'Tottenham Spurs',
									'0',
									'0',
									'0',
									'0',
									'0',
									'0',
									'0',
									'0',
									'WWWWWW',
								],
							]}
						/>
					</CardBody>
				</Card>
			</GridItem>
		</GridContainer>
	)
}

export default Standings
