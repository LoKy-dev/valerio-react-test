import type { FC } from 'react'
import { LoaderFunction, useLoaderData } from 'react-router-dom'

import type { WeatherDay, WeatherDTO } from '../../lib/types'
import { provinces } from '../../lib/provinces'
import { CityWeatherSummary } from '../../lib/components'

export const provinciaLoader: LoaderFunction = async ({ params: { key } }) => {
	const geo = provinces.find(el => el.key === key)
	if (!geo)
		throw new Response('Not Found', { status: 404 })

	// Fetch error handling omitted for development speed
	const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${geo.lat}&lon=${geo.lon}&units=metric&appid=${process.env.WEATHER_API_KEY}`)
	// Cached data
	// const res = await fetch('/cache/agrigento.json')
	const weather = await res.json() as WeatherDTO

	// The aggregation algorithm was not specified so the first hour of the 3 hours period is taken
	const aggregate: WeatherDay[] = []
	for (let i = 0; i < weather.hourly.length; i += 3) {
		aggregate.push(weather.hourly[i])
	}

	return { geo, weather, aggregate }
}

export const Provincia: FC = () => {
	const { geo: { name }, weather, aggregate } = useLoaderData() as { geo: any, weather: WeatherDTO, aggregate: WeatherDay[] }

	const d = Intl.DateTimeFormat('it-IT', {
		weekday: 'short',
		hour: '2-digit',
		minute: '2-digit',
	})

	return (
		<div className="min-h-screen max-w-screen-lg mx-auto">
			<div className="card m-4">
				<CityWeatherSummary
					name={name}
					temp={weather.current.temp}
					iconAlt={weather.current.weather[0]?.main}
					iconUrl={`https://openweathermap.org/img/wn/${weather.current.weather[0]?.icon}@2x.png`}
					className="border-b border-default"
				/>

				<div className="w-full">
					{aggregate.map((w) => (
						<div key={w.dt} className="even:bg-hover flex items-center gap-2 p-2">
							<div className="flex-1 pl-2 capitalize">{d.format(new Date(w.dt * 1000))}</div>
							<div>{w.temp.toFixed()}°</div>
							<div>
								<img alt={w.weather[0]?.main}
								     src={`https://openweathermap.org/img/wn/${w.weather[0]?.icon}@2x.png`}
								     className="aspect-square h-10"
								/>
							</div>
						</div>
					))}
				</div>

				{/* This dead code was left in to display the attempt to use table, due to time constraints the layout above was chosen
				<table className="w-full">
					<tbody className="relative">
					{aggregate.map((w) => (
						<tr key={w.dt} className="even:bg-hover">
							<td className="p-2 capitalize">{d.format(new Date(w.dt * 1000))}</td>
							<td>{w.temp.toFixed()}°</td>
							<td>
								<img alt={w.weather[0]?.main}
								     src={`https://openweathermap.org/img/wn/${w.weather[0]?.icon}@2x.png`}
								     className="aspect-square h-10"
								/>
							</td>
						</tr>
					))}
					</tbody>
				</table>
				*/}
			</div>
		</div>
	)
}

export default Provincia
