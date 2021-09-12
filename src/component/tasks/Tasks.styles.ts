import { createStyles } from '@material-ui/styles'
import {
	defaultFont,
	primaryColor,
	dangerColor,
	grayColor,
} from '../../index.styles'

const tasksStyle = createStyles({
	table: {
		marginBottom: '0',
		overflow: 'visible',
	},
	tableHead: {
		padding: '50px',
	},
	tableHeadCell: {
		...defaultFont,
		padding: '5px',
		verticalAlign: 'middle',
		border: 'none',
		lineHeight: '1.42857143',
		fontSize: '14px',
		borderBottom: 'none',
		fontWeight: 350,
	},
	tableRow: {
		position: 'relative',
		borderBottom: `1px solid ${grayColor[5]}`,
	},
	tableRowNoBorder: {
		position: 'relative',
		borderBottom: 'none',
	},
	tableActions: {
		display: 'flex',
		border: 'none',
		padding: '12px 8px !important',
		verticalAlign: 'middle',
	},
	tableCellTitle: {
		...defaultFont,
		fontWeight: 400,
		padding: '8px',
		verticalAlign: 'middle',
		border: 'none',
		lineHeight: '1.42857143',
		fontSize: '14px',
		textAlign: 'center',
	},
	tableCell: {
		...defaultFont,
		padding: '8px',
		verticalAlign: 'middle',
		border: 'none',
		lineHeight: '1.42857143',
		fontSize: '14px',
	},
	tableCellNoDivider: {
		...defaultFont,
		padding: '5px',
		verticalAlign: 'middle',
		border: 'none',
		lineHeight: '1.42857143',
		fontSize: '13px',
		borderBottom: 'none',
	},
	tableCellRight: {
		textAlign: 'right',
	},
	tableCellCenter: {
		textAlign: 'center',
	},
	tableActionButton: {
		width: '27px',
		height: '27px',
		padding: '0',
	},
	tableActionButtonIcon: {
		width: '17px',
		height: '17px',
	},
	edit: {
		backgroundColor: 'transparent',
		color: primaryColor[0],
		boxShadow: 'none',
	},
	close: {
		backgroundColor: 'transparent',
		color: dangerColor[0],
		boxShadow: 'none',
	},
	tableSpacing: {
		padding: '5px',
		textAlign: 'center',
	},
})

export default tasksStyle
