import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons

import styles from './CardIcon.styles'

// core components
import { CardHeaderColor, Props } from './CardHeader'

const useStyles = makeStyles(styles)

const CardIcon: React.FC<Props> = props => {
	const classes = useStyles()
	const { className, children, color, ...rest } = props
	const cardIconClasses = classNames({
		[classes.cardIcon]: true,
		[classes[color]]: color,
		[className]: className !== undefined,
	})
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div className={cardIconClasses} {...rest}>
			{children}
		</div>
	)
}

CardIcon.propTypes = {
	className: PropTypes.string.isRequired,
	color: PropTypes.oneOf<CardHeaderColor>([
		'warningCardHeader',
		'successCardHeader',
		'dangerCardHeader',
		'infoCardHeader',
		'primaryCardHeader',
		'roseCardHeader',
	]).isRequired,
	children: PropTypes.node,
}

CardIcon.defaultProps = {
	children: null,
}

export default CardIcon
