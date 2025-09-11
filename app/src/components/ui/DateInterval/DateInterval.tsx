import React, { FC, useEffect, useState } from 'react'

import './DateInterval.style.scss'

import { DELAY_UPDATE_INTERVAL } from '@config/settings'

interface DateIntervalProps {
	intervalStart: number
	intervalEnd: number
}

export const DateInterval: FC<DateIntervalProps> = ({ intervalStart, intervalEnd }) => {
	const [currentIntervalStart, setCurrentIntervalStart] = useState(intervalStart)
	const [currentIntervalEnd, setCurrentIntervalEnd] = useState(intervalEnd)

	useEffect(() => {
		let start = intervalStart
		let end = intervalEnd
		let prevStart = currentIntervalStart
		let prevEnd = currentIntervalEnd

		const updateIntervalStart: NodeJS.Timeout = setInterval(() => {
			if (prevStart === start) {
				return clearInterval(updateIntervalStart)
			}
			if (prevStart < start) {
				setCurrentIntervalStart(++prevStart)
			}
			if (prevStart > start) {
				setCurrentIntervalStart(--prevStart)
			}
		}, DELAY_UPDATE_INTERVAL)

		const updateIntervalEnd: NodeJS.Timeout = setInterval(() => {
			if (prevEnd === end) {
				return clearInterval(updateIntervalEnd)
			}
			if (prevEnd < end) {
				setCurrentIntervalEnd(++prevEnd)
			}
			if (prevEnd > end) {
				setCurrentIntervalEnd(--prevEnd)
			}
		}, DELAY_UPDATE_INTERVAL)
	}, [intervalStart, intervalEnd])

	return (
		<div className='dateInterval'>
			<span className='dateInterval_year start'>{currentIntervalStart}</span>
			<span className='dateInterval_year end'>{currentIntervalEnd}</span>
		</div>
	)
}
