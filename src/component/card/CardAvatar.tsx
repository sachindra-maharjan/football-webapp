import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons

// styles
import styles from './CardAvatar.styles'

// core components
import { Props } from './Card'

const useStyles = makeStyles(styles)

const CardAvatar: React.FC<Props> = props => {
	const classes = useStyles()
	const { children, className, plain, profile, ...rest } = props
	const cardAvatarClasses = classNames({
		[classes.cardAvatar]: true,
		[classes.cardAvatarProfile]: profile,
		[classes.cardAvatarPlain]: plain,
		[className]: className !== undefined,
	})
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div className={cardAvatarClasses} {...rest}>
			{children}
		</div>
	)
}

CardAvatar.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string.isRequired,
	profile: PropTypes.bool,
	plain: PropTypes.bool,
}

CardAvatar.defaultProps = {
	plain: false,
	profile: false,
}

export default CardAvatar
