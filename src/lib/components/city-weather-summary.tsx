import type { FC, MouseEventHandler } from 'react'

export type CityWeatherSummeryProps = {
	name: string
	temp: number
	iconUrl: string
	iconAlt: string
	className?: string
	onClick?: MouseEventHandler<HTMLDivElement>
}

export const CityWeatherSummary: FC<CityWeatherSummeryProps> = ({ name, temp, iconUrl, iconAlt, className, onClick }) => {
	return ( // I don't care about the extra space if `className` is empty, if react transpiler sucks it's not my fault :)
		<div className={`p-2 flex gap-2 items-center ${className}`} onClick={onClick}>
			<span className="flex-1 text-2xl pl-2">{name}</span>
			{/* It could be nice to add min and max temps */}
			<span className="text-5xl font-extralight">{temp.toFixed()}°</span>
			<img alt={iconAlt} src={iconUrl} className="aspect-square h-16" />
		</div>
	)
}

export default CityWeatherSummary
