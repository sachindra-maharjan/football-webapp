import { createStyles } from '@material-ui/styles'
import {
	warningCardHeader,
	successCardHeader,
	dangerCardHeader,
	infoCardHeader,
	primaryCardHeader,
	roseCardHeader,
	grayColor,
} from '../../index.styles'

const cardIconStyle = createStyles({
	cardIcon: {
		'&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader':
			{
				borderRadius: '3px',
				backgroundColor: grayColor[0],
				padding: '15px',
				marginTop: '-20px',
				marginRight: '15px',
				float: 'left',
			},
	},
	warningCardHeader,
	successCardHeader,
	dangerCardHeader,
	infoCardHeader,
	primaryCardHeader,
	roseCardHeader,
})

export default cardIconStyle
