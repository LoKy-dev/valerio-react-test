import type { FC } from 'react'
import { useEffect, useState } from 'react'

export const ToggleButton: FC = () => {
	// This behaviour is currently prone to flashing, it's just a quick implementation
	const [isDark, setIsDark] = useState(true)

	useEffect(() => {
		document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
	}, [isDark])

	return (
		<button onClick={() => setIsDark(!isDark)}>Flip</button>
	)
}

export default ToggleButton
