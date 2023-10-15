import type { FC } from 'react'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import type { WeatherDTO } from '../../lib/types'
import { provinces } from '../../lib/provinces'
import { useBatchLazyAsyncData } from '../../lib/hooks'

export const Home: FC = () => {
	const navigate = useNavigate()
	const [searchText, setSearchText] = useState('')
	const { data, loading, error } = useBatchLazyAsyncData<WeatherDTO>(
		provinces.map(p => ({
			url: `https://api.openweathermap.org/data/3.0/onecall?lat=${p.lat}&lon=${p.lon}&units=metric&appid=${process.env.WEATHER_API_KEY}`,
		})),
	)
	// Cache version
	// const { data, loading, error } = useLazyAsyncData<WeatherDTO[]>({ url: '/cache/cities-weather.json' })

	const visibleCity = useMemo(() => {
		if (!data) return []
		if (searchText) console.log('Search-text')
		const filterText = searchText.toUpperCase()

		// I'm assuming that the order is not messed up since useBatchLazyAsyncData performs requests and return data in the
		// same order as it was provided, if the function would change its behaviour (e.g. performing parallel requests) this
		// Procedure should be adjusted
		return data
			.map((el, index) => ({
				geo: provinces[index],
				weather: el,
			}))
			.filter(el => el.geo.name.toUpperCase().indexOf(filterText) !== -1)
	}, [data, searchText])

	if (loading)
		return <div>loading</div> // TODO: Loading ui

	if (error || !visibleCity)
		return <div>
			error
			<div>{JSON.stringify(error, null, 2)}</div>
		</div> // TODO: Error ui

	return (<>
		{/* Header */}
		<div className="sticky top-0 bg-m shadow-lg border-b border-default">
			<div className="max-w-screen-lg mx-auto p-2 flex justify-between">
				<span>{/* Placeholder for spacing, could be used for logo */}</span>
				<input type="text" onChange={e => setSearchText(e.target.value)}
				       placeholder="Cerca.."
				       className="bg-f py-2 px-4 rounded-lg border border-default outline-none transition-all focus:outline-primary placeholder:text-default/25"
				/>
			</div>
		</div>

		{/* Page content */}
		<div className="max-w-screen-lg mx-auto grid md:grid-cols-2 gap-4 p-4 select-none">
			{visibleCity.map(({ geo: { key, name }, weather: { current } }) => (
				<div key={key}
				     className="city-card p-2 flex gap-2 items-center"
				     onClick={() => navigate(`/provincia/${key}`)}
				>
					<span className="flex-1 text-2xl pl-2">{name}</span>
					<span className="text-5xl font-extralight"
					>{current.temp.toFixed()}°</span> {/* It could be nice to add min and max temps */}
					<img alt={current.weather[0]?.main}
					     src={`https://openweathermap.org/img/wn/${current.weather[0]?.icon}@2x.png`}
					     className="aspect-square h-16"
					/>
				</div>
			))}
		</div>
	</>)
}

export default Home
