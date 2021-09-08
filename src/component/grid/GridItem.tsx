import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Grid, { GridProps } from '@material-ui/core/Grid'

const styles = {
	grid: {
		padding: '0px 15px !important',
	},
}

const useStyles = makeStyles(styles)

interface Props extends GridProps {
	children?: React.ReactNode
}

const GridItem: React.FC<Props> = ({ children, ...rest }) => {
	const classes = useStyles()

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Grid item {...rest} className={classes.grid}>
			{children}
		</Grid>
	)
}

GridItem.propTypes = {
	children: PropTypes.node,
}

GridItem.defaultProps = {
	children: null,
}

export default GridItem
