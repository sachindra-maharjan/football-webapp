import { Grid } from '@material-ui/core'
import React from 'react'
import FixtureTabs from '../../component/customTabs/FixtureTabs'
import GridContainer from '../../component/grid/GridContainer'

const currentDate = new Date()
const currentMonthIndex = currentDate.getMonth() - 7
currentDate.setFullYear(currentDate.getFullYear())
currentDate.setMonth(7)

const fixtureMonths: {
	tabName: string
	startTimestamp: number
	endTimestamp: number
}[] = []

// eslint-disable-next-line no-plusplus
for (let i = 1; i <= 12; i++) {
	const year = currentDate.getFullYear()
	const month = currentDate.getMonth()
	const firstDay = new Date(year, month, 1)
	const lastDay = new Date(year, month + 1, 0)

	fixtureMonths.push({
		tabName: `${currentDate.toLocaleDateString('default', {
			month: 'short',
		})} ${currentDate.getFullYear()}`,
		startTimestamp: firstDay.getTime() / 1000,
		endTimestamp: lastDay.getTime() / 1000,
	})
	currentDate.setMonth(currentDate.getMonth() + 1)
}

const Fixtures = () => {
	return (
		<GridContainer>
			<Grid xs={12} sm={12} md={12}>
				<FixtureTabs
					title=''
					headerColor='successCardHeader'
					selectedIndex={currentMonthIndex}
					tabs={fixtureMonths}
				/>
			</Grid>
		</GridContainer>
	)
}
export default Fixtures
