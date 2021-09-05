import React from 'react'
import PropTypes from 'prop-types'
import {
	makeStyles,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@material-ui/core'
import styles from './Tasks.styles'

interface Props {
	title: string
	tasks: {
		label: string
		value: string
	}[]
}

const useStyle = makeStyles(styles)

const PlayerTask: React.FC<Props> = ({ title, tasks }) => {
	const classes = useStyle()

	return (
		<div className={classes.tableSpacing}>
			<Table className={classes.table}>
				<TableHead>{title}</TableHead>
				<TableBody>
					{tasks.map(task => (
						<TableRow className={classes.tableRowNoBorder}>
							<TableCell width='30%' className={classes.tableCellNoDivider}>
								{task.label}
							</TableCell>
							<TableCell className={classes.tableCellNoDivider}>
								{task.value}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}

PlayerTask.propTypes = {
	title: PropTypes.string.isRequired,
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
}

export default PlayerTask
