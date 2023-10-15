export type JSONValue =
	| string
	| number
	| boolean
	| { [x: string]: JSONValue }
	| Array<JSONValue>;

export type OSMData = {
	place_id: number,
	licence: string
	osm_type: string
	osm_id: number
	lat: string
	lon: string
	class: string
	type: string
	place_rank: number
	importance: number
	addresstype: string
	name: string
	display_name: string
	boundingbox: Array<string>
}

type WeatherStatus = {
	id: number
	main: string
	description: string
	icon: string
}

type WeatherDay = {
	dt: number
	temp: number,
	feels_like: number,
	pressure: number,
	humidity: number,
	dew_point: number,
	pop: number
	uvi: number,
	clouds: number,
	visibility: number,
	wind_speed: number,
	wind_deg: number,
	wind_gust: number,
	weather: Array<WeatherStatus>
}

type CurrentWeatherDay = Omit<WeatherDay, 'pop'> & {
	sunrise: number,
	sunset: number,
}

type RichWeatherDay = Omit<WeatherDay, 'temp' | 'feels_like' | 'visibility'> & {
	sunrise: number,
	sunset: number,
	moonrise: number,
	moonset: number,
	moon_phase: number,
	summary: string,
	temp: {
		min: number
		max: number
		day: number
		night: number
		eve: number
		morning: number
	}
	feels_like: {
		day: number
		night: number
		eve: number
		morning: number
	}
}

/**
 * Done quickly from a sample response, probably missing things but can omit them now
 */
export type WeatherDTO = {
	lat: number
	lon: number
	timezone: string // An enum could be more accurate, but is not needed now
	timezone_offset: number,
	current: CurrentWeatherDay
	minutely: Array<{ dt: number, precipitation: number }>
	hourly: Array<WeatherDay>
	daily: Array<RichWeatherDay>
}
