import { createStyles } from '@material-ui/styles'
import { hexToRgb, whiteColor } from '../../index.styles'

const customTabsStyle = createStyles({
	cardTitle: {
		float: 'left',
		padding: '10px 10px 10px 0px',
		lineHeight: '24px',
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 300,
	},
	cardTitleRTL: {
		float: 'right',
		padding: '10px 0px 10px 10px !important',
	},
	cardCategory: {
		color: `rgba(${hexToRgb(whiteColor)},.62)`,
		margin: '0',
		fontSize: '14px',
		marginTop: '0',
		marginBottom: '0',
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 300,
	},
	displayNone: {
		display: 'none !important',
	},
	tabsRoot: {
		minHeight: 'unset !important',
		overflowX: 'visible',
		'& $tabRootButton': {
			fontSize: '0.875rem',
		},
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 300,
	},
	tabRootButton: {
		minHeight: 'unset !important',
		minWidth: 'unset !important',
		width: 'unset !important',
		height: 'unset !important',
		maxWidth: 'unset !important',
		maxHeight: 'unset !important',
		padding: '10px 15px',
		borderRadius: '3px',
		lineHeight: '24px',
		border: '0 !important',
		color: `${whiteColor} !important`,
		marginLeft: '4px',
		'&:last-child': {
			marginLeft: '0px',
		},
	},
	tabSelected: {
		backgroundColor: `rgba(${hexToRgb(whiteColor)}, 0.2)`,
		transition: '0.2s background-color 0.1s',
	},
	tabWrapper: {
		display: 'inline-block',
		minHeight: 'unset !important',
		minWidth: 'unset !important',
		width: 'unset !important',
		height: 'unset !important',
		maxWidth: 'unset !important',
		maxHeight: 'unset !important',
		fontWeight: 500,
		fontSize: '12px',
		marginTop: '1px',
		'& > svg,& > .material-icons': {
			verticalAlign: 'middle',
			margin: '-1px 5px 0 0 !important',
		},
	},
})

export default customTabsStyle
