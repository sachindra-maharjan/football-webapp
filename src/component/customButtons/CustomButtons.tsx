import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes, { ReactNodeLike } from 'prop-types'

// material-ui components
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import styles from './CustomButtons.sytles'

type ButtonColor =
	| 'primary'
	| 'info'
	| 'success'
	| 'warning'
	| 'danger'
	| 'rose'
	| 'white'
	| 'transparent'

type ButtonSize = 'sm' | 'lg'

interface Prop {
	color: ButtonColor
	round?: boolean
	children?: ReactNodeLike
	disabled?: boolean
	simple?: boolean
	size: ButtonSize
	block?: boolean
	link?: boolean
	justIcon?: boolean
	className: string
	muiClasses?: object
}

const useStyles = makeStyles(styles)

const RegularButton: React.FC<Prop> = props => {
	const classes = useStyles()
	const {
		color,
		round,
		children,
		disabled,
		simple,
		size,
		block,
		link,
		justIcon,
		className,
		muiClasses,
	} = props
	const btnClasses = classNames({
		[classes.button]: true,
		[classes[size]]: size,
		[classes[color]]: color,
		[classes.round]: round,
		[classes.disabled]: disabled,
		[classes.simple]: simple,
		[classes.block]: block,
		[classes.link]: link,
		[classes.justIcon]: justIcon,
		[className]: className,
	})
	return (
		<Button classes={muiClasses} className={btnClasses}>
			{children}
		</Button>
	)
}

const ColorEnum = PropTypes.oneOf<ButtonColor>([
	'primary',
	'info',
	'success',
	'warning',
	'danger',
	'rose',
	'white',
	'transparent',
])

RegularButton.propTypes = {
	color: ColorEnum.isRequired,
	size: PropTypes.oneOf<ButtonSize>(['sm', 'lg']).isRequired,
	simple: PropTypes.bool,
	round: PropTypes.bool,
	disabled: PropTypes.bool,
	block: PropTypes.bool,
	link: PropTypes.bool,
	justIcon: PropTypes.bool,
	className: PropTypes.string.isRequired,
	// use this to pass the classes props from Material-UI
	// eslint-disable-next-line react/forbid-prop-types
	muiClasses: PropTypes.object,
	children: PropTypes.node,
}

RegularButton.defaultProps = {
	simple: true,
	round: false,
	disabled: false,
	block: false,
	link: false,
	justIcon: false,
	muiClasses: undefined,
	children: null,
}

export default RegularButton
