import { useEffect, useState } from 'react'

export const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	})

	const handleResize = () => {
		setWindowDimensions({
			width: window.innerWidth,
			height: window.innerHeight,
		})
	}

	useEffect(() => {
		handleResize()

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowDimensions
}
