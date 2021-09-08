import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import styles from './Typography.styles'

interface Props {
	children?: React.ReactNode
}

const useStyles = makeStyles(styles)

const Danger: React.FC<Props> = props => {
	const classes = useStyles()
	const { children } = props
	return (
		<div className={`${classes.defaultFontStyle} ${classes.dangerText}`}>
			{children}
		</div>
	)
}

Danger.propTypes = {
	children: PropTypes.node,
}

Danger.defaultProps = {
	children: null,
}

export default Danger
