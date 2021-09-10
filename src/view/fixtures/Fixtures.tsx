import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase'
import convertToObj from '../../firebase/convert'

import { AppState } from '../../state/reducer'
import { Fixture } from '../../state/types/fixtures.types'

const Fixtures = () => {
	// Selectors
	const fixture = useSelector(
		(state: AppState) => state.firestore.ordered.fixtures
	)

	useEffect(() => {
		if (isLoaded(fixture) && fixture.length > 0) {
			const f = convertToObj<Fixture>(fixture[0])
			const d: Date = f.eventDate
			console.log(`FixtureId:${f.fixtureId}  Date1: ${d}`)
		}
	})

	const pastDate = new Date()
	pastDate.setDate(pastDate.getDate() - 3)
	console.log(`pastDate${pastDate.toISOString()}`)
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
								['fixtureId', '==', 592145],
								['eventTimestamp', '==', 1611165600],
							],
						},
					],
				},
			],
			storeAs: 'fixtures',
		},
	])

	return <div>Fixtures</div>
}
export default Fixtures
