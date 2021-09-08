import React from 'react'
import PropTypes from 'prop-types'
import {
	makeStyles,
	Table,
	TableBody,
	TableCell,
	TableRow,
} from '@material-ui/core'
import classNames from 'classnames'
import styles from './Tasks.styles'

interface Props {
	tasks: {
		fixtureId: string
		home: string
		away: string
	}[]
}

const useStyle = makeStyles(styles)

const Tasks: React.FC<Props> = ({ tasks }) => {
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

	return (
		<Table className={classes.table}>
			<TableBody>
				{tasks.map(value => (
					<TableRow key={value.fixtureId} className={classes.tableRow}>
						<TableCell className={tableCellClassesRight}>
							{value.home}
						</TableCell>
						<TableCell className={tableCellCenterClasses}>Vs</TableCell>
						<TableCell className={tableCellClasses}>{value.away}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

Tasks.propTypes = {
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			fixtureId: PropTypes.string.isRequired,
			home: PropTypes.string.isRequired,
			away: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
}

export default Tasks
