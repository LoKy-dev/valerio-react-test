import { useEffect, useState } from 'react'
import { JSONValue } from '../types'

export type RequestData = {
	url: RequestInfo | URL
	options?: RequestInit
}

export function useLazyAsyncData<T extends JSONValue>({ url, options }: RequestData) {
	const [data, setData] = useState<T | undefined>()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | undefined>(undefined)

	useEffect(() => {
		(async () => {
			try {
				const res = await fetch(url, options)
				setData(await res.json())
				setLoading(false)
				setError(undefined)
			} catch (e) {
				setData(undefined)
				setLoading(false)
				setError(e as Error) // Oversimplifying error collection and handling
			}
		})()
		// eslint-disable-next-line
	}, [])
	// url and options are missing by design, this function is supposed to fetch data only on initial load
	// this is done to leave room to implement refresh function

	return { data, loading, error }
}

export function useBatchLazyAsyncData<T extends JSONValue>(requestsData: Array<RequestData>) {
	const [data, setData] = useState<Array<T> | undefined>()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | undefined>(undefined)

	useEffect(() => {
		(async () => {
			try {
				const dataBuffer: Array<T> = []

				// The looping for all the requests is done sequentially to avoid rate limiting
				for (const { url, options } of requestsData) {
					const res = await fetch(url, options)
					dataBuffer.push(await res.json())
				}

				setData(dataBuffer)
				setLoading(false)
				setError(undefined)
			} catch (e) {
				setData(undefined)
				setLoading(false)
				setError(e as Error) // Oversimplifying error collection and handling
			}
		})()
		// eslint-disable-next-line
	}, [])
	// requestsData is missing by design, this function is supposed to fetch data only on initial load
	// this is done to leave room to implement refresh function

	return { data, loading, error }
}
