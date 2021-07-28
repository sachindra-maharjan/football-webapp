import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

export interface Props {
	children?: React.ReactNode
}

const styles = {
	grid: {
		margin: '0 -15px !important',
		width: 'unset',
	},
}

const useStyles = makeStyles(styles)

const GridContainer: React.FC<Props> = props => {
	const classes = useStyles()
	const { children, ...rest } = props
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Grid container {...rest} className={classes.grid}>
			{children}
		</Grid>
	)
}

GridContainer.propTypes = {
	children: PropTypes.node,
}

GridContainer.defaultProps = {
	children: null,
}

export default GridContainer
