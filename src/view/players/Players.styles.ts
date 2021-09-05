import { createStyles } from '@material-ui/styles'
import { grayColor } from '../../index.styles'

const PlayersStyles = createStyles({
	cardCategory: {
		color: grayColor[1],
		margin: '0',
		fontSize: '14px',
		marginTop: '0',
		marginBottom: '0',
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 300,
	},
	cardCategoryWhite: {
		color: 'rgba(255,255,255,.62)',
		margin: '0',
		fontSize: '14px',
		marginTop: '0',
		marginBottom: '0',
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 300,
	},
	cardTitle: {
		color: grayColor[2],
		marginTop: '0px',
		minHeight: 'auto',
		fontWeight: 300,
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: '10px',
		textDecoration: 'none',
	},
	cardTitleWhite: {
		color: '#FFFFFF',
		marginTop: '0px',
		minHeight: 'auto',
		fontWeight: 300,
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: '3px',
		textDecoration: 'none',
	},
	data: {
		fontWeight: 200,
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		textDecoration: 'none',
		fontSize: '13px',
		color: grayColor[2],
	},
	label: {
		display: 'inline-block',
		padding: '5px 20px 5px 5px',
		marginTop: '0',
		marginBottom: '0',
		margin: '0',
		width: '10%',
	},
	value: {
		display: 'inline-block',
		padding: '5px 5px 5px 20px',
		marginTop: '0',
		marginBottom: '0',
		margin: '0',
	},
	spacing: {
		marginTop: '30px',
		padding: '5px',
	},
	spacingBotton: {
		paddingBottom: '15px',
	},
	cardBodyAlign: {
		textAlign: 'center',
	},
})

export default PlayersStyles
