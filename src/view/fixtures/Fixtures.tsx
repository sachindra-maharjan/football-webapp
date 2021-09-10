import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase'
import convertToObj from '../../firebase/convert'

import { AppState } from '../../state/reducer'
import { Fixture } from '../../state/types/fixtures.types'

const Fixtures = () => {
	// Selectors
	const fixtures = useSelector(
		(state: AppState) => state.firestore.ordered.fixtures
	)
	const timestampMap = new Map<string, Fixture[]>()	
	useEffect(() => {
		if (isLoaded(fixtures) && fixtures.length > 0) {
			fixtures.forEach(f => {
				const fixture = convertToObj<Fixture>(f)
				const date: string = new Date(fixture.eventTimestamp*1000).toDateString()
				const  eventFixtures = timestampMap.get(date)
				if(eventFixtures && eventFixtures.length > 0){
					eventFixtures.push(fixture)
				}else {
					const newFixtures: Fixture[] = [fixture]
					timestampMap.set(date, newFixtures)	
				}
			})
		}
		
		Array.from(timestampMap.entries()).forEach(entry => {
			console.log(`key: ${entry[0]} values: ${entry[1].length}`)
		})
	
	})

	// const pastDate = new Date()
	// pastDate.setDate(pastDate.getDate() - 3)
	// console.log(`pastDate${pastDate.toISOString()}`)
	// console.log(fixture)
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
								['eventTimestamp', '>=', 1606780800],
								['eventTimestamp', '<=', 1609459199],
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
