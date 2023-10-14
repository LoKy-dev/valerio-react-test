import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { provinces } from '../../lib/provinces'
import { OSMData } from '../../lib/types'

export const Provincia: FC = ({}) => {
	const { key } = useParams()
	const province = provinces.find(el => el.key == key)
	const [error, setError] = useState<unknown | undefined>(undefined)
	const [geospatialData, setGeospatialData] = useState<OSMData | undefined>(undefined)
	const [weatherData, setWeatherData] = useState(undefined)

	useEffect(() => {
		// I know that the return should be used to define the dismount hook, but this is a simple component that does not
		// need a dismount hook
		if (!province) return

		try {
			(async () => {
				const g = await fetch(`https://nominatim.openstreetmap.org/search?q=${key}&format=json&featureType=city`)
				// Automatically pics the first element in this case is correct, for a complex application a check should be implemented
				const geoData = (await g.json())[0] as OSMData
				setGeospatialData(geoData)

			})()
		} catch (e: unknown) {
			setError(e)
		}
	}, [key])

	if (!province)
		return <div>404</div> // TODO 404 page

	if (error) {
		return <div>errore</div> // TODO Error page
	}

	return (
		<div className="">
			<pre><code>{JSON.stringify(geospatialData, null, 2)}</code></pre>
			<pre><code>{JSON.stringify(weatherData, null, 2)}</code></pre>
		</div>
	)
}

export default Provincia
