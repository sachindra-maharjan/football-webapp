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
	tableRow: {
		position: 'relative',
		borderBottom: `1px solid ${grayColor[5]}`,
	},
	tableActions: {
		display: 'flex',
		border: 'none',
		padding: '12px 8px !important',
		verticalAlign: 'middle',
	},
	tableCell: {
		...defaultFont,
		padding: '8px',
		verticalAlign: 'middle',
		border: 'none',
		lineHeight: '1.42857143',
		fontSize: '14px',
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
})

export default tasksStyle
