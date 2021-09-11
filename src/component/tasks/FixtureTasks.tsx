import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
	makeStyles,
	Table,
	TableBody,
	TableCell,
	TableRow,
} from '@material-ui/core'
import classNames from 'classnames'
import { isLoaded } from 'react-redux-firebase'
import styles from './Tasks.styles'
import { Fixture } from '../../state/types/fixtures.types'
import convertToObj from '../../firebase/convert'

interface Props {
	fixtures: Fixture[]
}

const useStyle = makeStyles(styles)

const FixtureTasks: React.FC<Props> = ({ fixtures }) => {
	const [fixtureMap, setFixtureMap] = useState<Map<string, Fixture[]>>()
	const classes = useStyle()
	const tableCellClasses = classNames(classes.tableCell)
	const tableCellCenterClasses = classNames(
		classes.tableCell,
		classes.tableCellCenter
	)
	const tableCellClassesRight = classNames(
		classes.tableCell,
		classes.tableCellRight
	)

	useEffect(() => {
		if (isLoaded(fixtures)) {
			const map = new Map<string, Fixture[]>()
			fixtures.forEach(f => {
				const fixture = convertToObj<Fixture>(f)
				const date: string = new Date(
					fixture.eventTimestamp * 1000
				).toDateString()
				const eventFixtures = map.get(date)
				if (eventFixtures && eventFixtures.length > 0) {
					eventFixtures.push(fixture)
				} else {
					const newFixtures: Fixture[] = [fixture]
					map.set(date, newFixtures)
				}
			})
			setFixtureMap(map)
		}
	}, [fixtures])

	if (fixtureMap === undefined) {
		return <div>Loading...</div>
	}
	if (Array.from(fixtureMap.entries()).length === 0) {
		return <div>Fixtures not available.</div>
	}

	return (
		<Table className={classes.table}>
			<TableBody>
				{Array.from(fixtureMap.entries()).map(entry =>
					entry[1].map(v => (
						<TableRow key={v.fixtureId} className={classes.tableRow}>
							<TableCell className={tableCellClassesRight}>
								{v.homeTeam.teamName}
							</TableCell>
							<TableCell className={tableCellCenterClasses}>Vs</TableCell>
							<TableCell className={tableCellClasses}>
								{v.awayTeam.teamName}
							</TableCell>
						</TableRow>
					))
				)}
			</TableBody>
		</Table>
	)
}

FixtureTasks.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	fixtures: PropTypes.any.isRequired,
}

export default FixtureTasks
