import React, { FC } from 'react'

import './DateInterval.style.scss'

interface DateIntervalProps {
	intervalStart: number
	intervalEnd: number
}

export const DateInterval: FC<DateIntervalProps> = ({ intervalStart, intervalEnd }) => {
	return (
		<div className='dateInterval'>
			<span className='dateInterval_year start'>{intervalStart}</span>
			<span className='dateInterval_year end'>{intervalEnd}</span>
		</div>
	)
}
