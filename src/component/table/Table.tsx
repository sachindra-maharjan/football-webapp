/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
// core components
import styles from './Table.styles'

type TableHeadColor =
	| 'warning'
	| 'primary'
	| 'danger'
	| 'success'
	| 'info'
	| 'rose'
	| 'gray'

interface Props {
	tableHead: string[]
	tableData: string[][]
	tableHeaderColor?: TableHeadColor
}

const useStyles = makeStyles(styles)

const CustomTable: React.FC<Props> = props => {
	const classes = useStyles()
	const { tableHead, tableData } = props
	let { tableHeaderColor } = props

	if (tableHeaderColor === undefined) {
		tableHeaderColor = 'gray'
	}

	return (
		<div className={classes.tableResponsive}>
			<Table className={classes.table}>
				{tableHead !== undefined ? (
					<TableHead className={classes.primaryTableHeader}>
						<TableRow className={classes.tableHeadRow}>
							{tableHead.map((prop, key) => {
								return (
									<TableCell
										className={`${classes.tableCell} ${classes.tableHeadCell}`}
										key={key}
									>
										{prop}
									</TableCell>
								)
							})}
						</TableRow>
					</TableHead>
				) : null}
				<TableBody>
					{tableData.map((prop, key) => {
						return (
							<TableRow key={key} className={classes.tableBodyRow}>
								{prop.map((data, dataKey) => {
									return (
										<TableCell className={classes.tableCell} key={dataKey}>
											{data}
										</TableCell>
									)
								})}
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		</div>
	)
}

CustomTable.defaultProps = {
	tableHeaderColor: 'gray',
}

CustomTable.propTypes = {
	tableHeaderColor: PropTypes.oneOf<TableHeadColor>([
		'warning',
		'primary',
		'danger',
		'success',
		'info',
		'rose',
		'gray',
	]),
	tableHead: PropTypes.arrayOf(PropTypes.any).isRequired,
	tableData: PropTypes.arrayOf(PropTypes.any).isRequired,
}
