/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/forbid-prop-types */
import React from 'react'
import classNames from 'classnames'
import PropTypes, { ReactNodeLike } from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
// @material-ui/icons
import Clear from '@material-ui/icons/Clear'
import Check from '@material-ui/icons/Check'
// core components
import styles from './CustomInput.styles'

interface Prop {
	labelText?: ReactNodeLike
	id?: string
	inputProps?: object
	formControlProps: {
		className: string
	}
	error?: boolean
	success?: boolean
	labelProps?: object
}

const useStyles = makeStyles(styles)

const CustomInput: React.FC<Prop> = props => {
	const {
		formControlProps,
		labelText,
		id,
		labelProps,
		inputProps,
		error,
		success,
	} = props

	const classes = useStyles()

	const labelClasses = classNames({
		[` ${classes.labelRootError}`]: error,
		[` ${classes.labelRootSuccess}`]: success && !error,
	})
	const underlineClasses = classNames({
		[classes.underlineError]: error,
		[classes.underlineSuccess]: success && !error,
		[classes.underline]: true,
	})
	const marginTop = classNames({
		[classes.marginTop]: labelText === undefined,
	})
	const newInputProps = {
		maxLength: inputProps,
		minLength: inputProps,
		step: inputProps,
	}
	return (
		<FormControl
			{...formControlProps}
			className={`${formControlProps.className} ${classes.formControl}`}
		>
			{labelText !== undefined ? (
				<InputLabel
					className={classes.labelRoot + labelClasses}
					htmlFor={id}
					{...labelProps}
				>
					{labelText}
				</InputLabel>
			) : null}
			<Input
				classes={{
					root: marginTop,
					disabled: classes.disabled,
					underline: underlineClasses,
				}}
				id={id}
				{...inputProps}
				inputProps={newInputProps}
			/>
			{error ? (
				<Clear className={`${classes.feedback} ${classes.labelRootError}`} />
			) : success ? (
				<Check className={`${classes.feedback} ${classes.labelRootSuccess}`} />
			) : null}
		</FormControl>
	)
}

CustomInput.propTypes = {
	labelText: PropTypes.node,
	labelProps: PropTypes.object,
	id: PropTypes.string,
	inputProps: PropTypes.object,
	formControlProps: PropTypes.shape({
		className: PropTypes.string.isRequired,
	}).isRequired,
	error: PropTypes.bool,
	success: PropTypes.bool,
}

CustomInput.defaultProps = {
	labelText: undefined,
	labelProps: undefined,
	id: '',
	inputProps: undefined,
	error: false,
	success: false,
}

export default CustomInput
