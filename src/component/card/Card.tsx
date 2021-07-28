import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

// Styles
import styles from './Card.styles'

const useStyles = makeStyles(styles)

export interface Props {
	className: string
	plain?: boolean
	profile?: boolean
	chart?: boolean
	children?: React.ReactNode
}

const Card: React.FC<Props> = props => {
	const classes = useStyles()

	const { className, children, plain, profile, chart, ...rest } = props
	const cardClasses = classNames({
		[classes.card]: true,
		[classes.cardPlain]: plain,
		[classes.cardProfile]: profile,
		[classes.cardChart]: chart,
		[className]: className !== undefined,
	})
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div className={cardClasses} {...rest}>
			{children}
		</div>
	)
}

Card.propTypes = {
	className: PropTypes.string.isRequired,
	plain: PropTypes.bool,
	profile: PropTypes.bool,
	chart: PropTypes.bool,
	children: PropTypes.node,
}

Card.defaultProps = {
	plain: false,
	profile: false,
	chart: false,
	children: null,
}

export default Card
