import { createStyles } from '@material-ui/styles'
import {
	successColor,
	whiteColor,
	grayColor,
	hexToRgb,
} from '../../index.styles'

const dashboardStyles = createStyles({
	successText: {
		color: successColor[0],
	},
	upArrowCardCategory: {
		width: '16px',
		height: '16px',
	},
	stats: {
		color: grayColor[0],
		display: 'inline-flex',
		fontSize: '12px',
		lineHeight: '22px',
		'& svg': {
			top: '4px',
			width: '16px',
			height: '16px',
			position: 'relative',
			marginRight: '3px',
			marginLeft: '3px',
		},
		'& .fab,& .fas,& .far,& .fal,& .material-icons': {
			top: '4px',
			fontSize: '16px',
			position: 'relative',
			marginRight: '3px',
			marginLeft: '3px',
		},
	},
	cardCategory: {
		color: grayColor[0],
		margin: '0',
		fontSize: '14px',
		marginTop: '0',
		paddingTop: '12px',
		marginBottom: '0',
	},
	cardCategoryWhite: {
		color: `rgba(${hexToRgb(whiteColor)},.62)`,
		margin: '0',
		fontSize: '14px',
		marginTop: '0',
		marginBottom: '0',
	},
	cardTitle: {
		color: grayColor[2],
		marginTop: '0px',
		minHeight: 'auto',
		padding: '3px',
		fontWeight: 300,
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: '3px',
		textDecoration: 'none',
		'& small': {
			color: grayColor[1],
			fontWeight: '400',
			lineHeight: '1',
		},
	},
	cardTitleWhite: {
		color: whiteColor,
		marginTop: '0px',
		minHeight: 'auto',
		fontWeight: 300,
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: '3px',
		textDecoration: 'none',
		'& small': {
			color: grayColor[1],
			fontWeight: '400',
			lineHeight: '1',
		},
	},
	teamBlock: {
		display: 'inline-block',
		width: '70%',
		float: 'left',
	},
	scoreBlock: {
		display: 'inline-block',
		textAlign: 'right',
		width: '30%',
		float: 'right',
	},
	venueDivider: {
		borderTop: `1px solid ${grayColor[10]}`,
		marginTop: '30px',
	},
	venue: {
		color: grayColor[0],
		display: 'inline-flex',
		fontSize: '12px',
		lineHeight: '15px',
	},
})

export default dashboardStyles
