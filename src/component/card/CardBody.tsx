import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons

// styles
import styles from './CardBody.styles'

export interface Props {
	className: string
	children?: React.ReactNode
	plain?: boolean
	profile?: boolean
}

const useStyles = makeStyles(styles)

const CardBody: React.FC<Props> = props => {
	const classes = useStyles()
	const { className, children, plain, profile, ...rest } = props
	const cardBodyClasses = classNames({
		[classes.cardBody]: true,
		[classes.cardBodyPlain]: plain,
		[classes.cardBodyProfile]: profile,
		[className]: className !== undefined,
	})
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div className={cardBodyClasses} {...rest}>
			{children}
		</div>
	)
}

CardBody.propTypes = {
	className: PropTypes.string.isRequired,
	plain: PropTypes.bool,
	profile: PropTypes.bool,
	children: PropTypes.node,
}

CardBody.defaultProps = {
	plain: false,
	profile: false,
	children: null,
}

export default CardBody
