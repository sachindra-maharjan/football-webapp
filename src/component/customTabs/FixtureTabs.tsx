import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Tab, Tabs } from '@material-ui/core'
import styles from './CustomTabs.styles'
import Card from '../card/Card'
import CardHeader, { CardHeaderColor } from '../card/CardHeader'
import CardBody from '../card/CardBody'

import { AppState } from '../../state/reducer'
import FixtureTasks from '../tasks/FixtureTasks'
import convertToObj from '../../firebase/convert'

interface Props {
	headerColor: CardHeaderColor
	plainTabs?: boolean
	tabs: {
		tabName: string
		startTimestamp: number
		endTimestamp: number
		tabIcon?: any
	}[]
	title: string
	selectedIndex: number
}

const useStyle = makeStyles(styles)

const FixtureTabs: React.FC<Props> = props => {
	const { headerColor, plainTabs, tabs, title, selectedIndex } = props

	const [value, setValue] = React.useState(selectedIndex)
	const [eventStartMonth, setEventStartMonth] = React.useState(0)
	const [eventEndMonth, setEventEndMonth] = React.useState(0)

	const handleChange = (event: any, val: number) => {
		setValue(val)
		setEventStartMonth(tabs[val].startTimestamp)
		setEventEndMonth(tabs[val].endTimestamp)
	}

	const classes = useStyle()

	const cardTitle = classNames({
		[classes.cardTitle]: true,
	})

	// Selectors
	const fixtures = useSelector(
		(state: AppState) => state.firestore.ordered.fixtures
	)

	// Firestore Hooks
	useFirestoreConnect([
		{
			collection: '/football',
			doc: 'premierleague',
			subcollections: [
				{
					collection: '/leagues',
					doc: 'leagueId_2790',
					subcollections: [
						{
							collection: 'fixtures',
							where: [
								['eventTimestamp', '>=', eventStartMonth],
								['eventTimestamp', '<=', eventEndMonth],
							],
						},
					],
				},
			],
			storeAs: 'fixtures',
		},
	])

	if (!isLoaded(fixtures)) {
		return <div>Loading...</div>
	}

	return (
		<Card className=''>
			<CardHeader color={headerColor} plain={plainTabs} className=''>
				{title !== undefined ? <div className={cardTitle}>{title}</div> : null}
				<Tabs
					value={value}
					onChange={handleChange}
					classes={{
						root: classes.tabsRoot,
						indicator: classes.displayNone,
					}}
					variant='scrollable'
					scrollButtons='auto'
				>
					{tabs.map(prop => {
						let icon = {}
						if (prop.tabIcon) {
							icon = {
								icon: <prop.tabIcon />,
							}
						}
						return (
							<Tab
								classes={{
									root: classes.tabRootButton,
									selected: classes.tabSelected,
									wrapper: classes.tabWrapper,
								}}
								key={prop.tabName}
								label={prop.tabName}
								// eslint-disable-next-line react/jsx-props-no-spreading
								{...icon}
							/>
						)
					})}
				</Tabs>
			</CardHeader>
			<CardBody className=''>
				{tabs.map((prop, key) => {
					if (key === value) {
						return (
							// eslint-disable-next-line react/no-array-index-key
							<div key={key}>
								<FixtureTasks fixtures={convertToObj(fixtures)} />
							</div>
						)
					}
					return ''
				})}
			</CardBody>
		</Card>
	)
}

FixtureTabs.defaultProps = {
	plainTabs: false,
}

FixtureTabs.propTypes = {
	headerColor: PropTypes.oneOf<CardHeaderColor>([
		'warningCardHeader',
		'successCardHeader',
		'dangerCardHeader',
		'infoCardHeader',
		'primaryCardHeader',
		'roseCardHeader',
	]).isRequired,
	title: PropTypes.string.isRequired,
	tabs: PropTypes.arrayOf(
		PropTypes.shape({
			tabName: PropTypes.string.isRequired,
			startTimestamp: PropTypes.number.isRequired,
			endTimestamp: PropTypes.number.isRequired,
			// eslint-disable-next-line react/forbid-prop-types
			tabIcon: PropTypes.object,
		}).isRequired
	).isRequired,
	plainTabs: PropTypes.bool,
	selectedIndex: PropTypes.number.isRequired,
}

export default FixtureTabs
