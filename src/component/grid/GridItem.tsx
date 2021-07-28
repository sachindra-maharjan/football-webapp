import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = {
	grid: {
		padding: '0 15px !important',
	},
}

const useStyles = makeStyles(styles)

interface Props {
	children?: React.ReactNode
	xs?: number | boolean
	sm?: number | boolean
	md?: number | boolean
}

const GridItem: React.FC<Props> = ({ children }) => {
	const classes = useStyles()

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Grid item className={classes.grid}>
			{children}
		</Grid>
	)
}

GridItem.propTypes = {
	children: PropTypes.node,
	xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
	sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
	md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
}

GridItem.defaultProps = {
	children: null,
	xs: 0,
	sm: 0,
	md: 0,
}

export default GridItem
