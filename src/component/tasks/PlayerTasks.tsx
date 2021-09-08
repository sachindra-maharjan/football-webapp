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
				<TableHead>
					<TableRow className={classes.tableRowNoBorder}>
						<TableCell align='left' className={classes.tableHeadCell}>
							{title}
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{tasks.map((task, k) => (
						// eslint-disable-next-line react/no-array-index-key
						<TableRow className={classes.tableRowNoBorder} key={k}>
							<TableCell
								align='right'
								width='50%'
								className={classes.tableCellNoDivider}
							>
								{task.label}
							</TableCell>
							<TableCell align='center' className={classes.tableCellNoDivider}>
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
