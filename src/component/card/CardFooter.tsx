import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons

// core components
import styles from './CardFooter.styles'

interface Props {
	className: string
	plain?: boolean
	profile?: boolean
	stats?: boolean
	chart?: boolean
	children?: React.ReactNode
}

const useStyles = makeStyles(styles)

const CardFooter: React.FC<Props> = props => {
	const classes = useStyles()
	const { className, children, plain, profile, stats, chart, ...rest } = props
	const cardFooterClasses = classNames({
		[classes.cardFooter]: true,
		[classes.cardFooterPlain]: plain,
		[classes.cardFooterProfile]: profile,
		[classes.cardFooterStats]: stats,
		[classes.cardFooterChart]: chart,
		[className]: className !== undefined,
	})

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div className={cardFooterClasses} {...rest}>
			{children}
		</div>
	)
}

CardFooter.propTypes = {
	className: PropTypes.string.isRequired,
	plain: PropTypes.bool,
	profile: PropTypes.bool,
	stats: PropTypes.bool,
	chart: PropTypes.bool,
	children: PropTypes.node,
}

CardFooter.defaultProps = {
	plain: false,
	profile: false,
	stats: false,
	chart: false,
	children: null,
}

export default CardFooter
