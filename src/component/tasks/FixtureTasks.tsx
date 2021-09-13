import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
	makeStyles,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@material-ui/core'
import classNames from 'classnames'
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import styles from './Tasks.styles'
import { Fixture } from '../../state/types/fixtures.types'
import convertToObj from '../../firebase/convert'
import { AppState } from '../../state/reducer'

interface Props {
	// fixtures?: Fixture[]
	eventStartTime: number
	eventEndTime: number
}

const useStyle = makeStyles(styles)

const FixtureTasks: React.FC<Props> = ({ eventStartTime, eventEndTime }) => {
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

	const getDateString = (time: number): string => {
		const date = new Date(time)
		return date.toDateString()
		// return `${date.toLocaleDateString('en-us', { weekday: 'long' })},
		// 	${date.getDay() + 1} ${date.toLocaleDateString('en-us', {
		// 	month: 'long',
		// })} ${date.getFullYear()}`
	}

	const getScore = (fixture: Fixture): string => {
		if (fixture.elapsed && fixture.elapsed > 0) {
			return `${fixture.goalsHomeTeam ? fixture.goalsHomeTeam : 0} - ${
				fixture.goalsAwayTeam ? fixture.goalsAwayTeam : 0
			}`
		}

		const date = new Date(fixture.eventTimestamp * 1000)
		return `${date.getUTCHours()}:${
			date.getUTCMinutes() / 10 < 1
				? `0${date.getUTCMinutes()}`
				: date.getUTCMinutes()
		}`
	}

	// Selectors
	const fixtures = useSelector(
		(state: AppState) => state.firestore.ordered.fixtures
	)

	// Firestore Hooks
	useFirestoreConnect([
		{
			collection: '/football',
			doc: 'premierleague',
			subcollections: [
				{
					collection: '/leagues',
					doc: 'leagueId_2790',
					subcollections: [
						{
							collection: 'fixtures',
							where: [
								['eventTimestamp', '>=', eventStartTime],
								['eventTimestamp', '<=', eventEndTime],
							],
						},
					],
				},
			],
			storeAs: 'fixtures',
		},
	])

	useEffect(() => {
		if (isLoaded(fixtures)) {
			const map = new Map<string, Fixture[]>()
			fixtures.forEach(f => {
				const fixture = convertToObj<Fixture>(f)
				const date: string = getDateString(fixture.eventTimestamp * 1000)
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
	if (fixtureMap && Array.from(fixtureMap.entries()).length === 0) {
		return <div>Fixtures not available.</div>
	}

	return (
		<Table className={classes.table}>
			<TableBody>
				{fixtureMap &&
					Array.from(fixtureMap.entries()).map(entry => (
						<Table>
							<TableHead>
								<TableRow className={classes.tableRow}>
									<TableCell width='39%' />
									<TableCell className={classes.tableCellTitle}>
										{entry[0]}
									</TableCell>
									<TableCell width='39%' />
								</TableRow>
							</TableHead>
							<TableBody>
								{entry[1].map(v => (
									<TableRow key={v.fixtureId} className={classes.tableRow}>
										<TableCell className={tableCellClassesRight}>
											{v.homeTeam.teamName}
										</TableCell>
										<TableCell className={tableCellCenterClasses}>
											<div className={classes.score}>{getScore(v)}</div>
											<div>
												{v.statusShort && v.statusShort !== 'NS'
													? v.statusShort
													: ''}
											</div>
										</TableCell>
										<TableCell className={tableCellClasses}>
											{v.awayTeam.teamName}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					))}
			</TableBody>
		</Table>
	)
}

FixtureTasks.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	// fixtures: PropTypes.any.isRequired,
	eventStartTime: PropTypes.number.isRequired,
	eventEndTime: PropTypes.number.isRequired,
}

export default FixtureTasks
