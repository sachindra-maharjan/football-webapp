import { makeStyles } from '@material-ui/core'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

// Styles
import styles from './CardHeader.styles'

export type CardHeaderColor =
	| 'primaryCardHeader'
	| 'infoCardHeader'
	| 'successCardHeader'
	| 'warningCardHeader'
	| 'dangerCardHeader'
	| 'roseCardHeader'

export interface Props {
	className: string
	color: CardHeaderColor
	plain?: boolean
	stats?: boolean
	icon?: boolean
	children?: React.ReactNode
}

const useStyles = makeStyles(styles)

const CardHeader: React.FC<Props> = props => {
	const classes = useStyles()
	const { className, children, color, plain, stats, icon, ...rest } = props
	const cardHeaderClasses = classNames({
		[classes.cardHeader]: true,
		[classes[color]]: color,
		[classes.cardHeaderPlain]: plain,
		[classes.cardHeaderStats]: stats,
		[classes.cardHeaderIcon]: icon,
		[className]: className !== undefined,
	})
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div className={cardHeaderClasses} {...rest}>
			{children}
		</div>
	)
}

CardHeader.propTypes = {
	className: PropTypes.string.isRequired,
	color: PropTypes.oneOf<CardHeaderColor>([
		'warningCardHeader',
		'successCardHeader',
		'dangerCardHeader',
		'infoCardHeader',
		'primaryCardHeader',
		'roseCardHeader',
	]).isRequired,
	plain: PropTypes.bool,
	stats: PropTypes.bool,
	icon: PropTypes.bool,
	children: PropTypes.node,
}

CardHeader.defaultProps = {
	plain: false,
	stats: false,
	icon: false,
	children: null,
}

export default CardHeader
