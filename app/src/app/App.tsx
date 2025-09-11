import React, { useCallback, useState } from 'react'

import { DURATION_ROTATE_SPINNER, START_INDEX_INTERVAL } from '@config/settings'

import { historyIntervals } from '@constants/historyIntervals'

import { useWindowDimensions } from '@utils/useWindowDimensions'

import { Title } from '@components/ui/Title/Title'
import Spinner from '@components/ui/Spinner/Spinner'
import { DateInterval } from '@components/ui/DateInterval/DateInterval'
import { IntervalSlider } from '@components/base/IntervalSlider/IntervalSlider'

const App = () => {
	const [intervalIndex, setIntervalIndex] = useState(START_INDEX_INTERVAL)

	const historyInterval = historyIntervals[intervalIndex]

	const [inAnimation, setAnimation] = useState(false)

	const windowDimensions = useWindowDimensions()

	const handleChangeAnimation = useCallback(() => {
		setAnimation(true)

		const timer = setTimeout(() => {
			setAnimation(false)
			clearTimeout(timer)
		}, DURATION_ROTATE_SPINNER)
	}, [setAnimation])

	const handleClickNavigation = useCallback((value: number) => {
		setIntervalIndex(prevValue => prevValue + value)

		handleChangeAnimation()
	}, [])

	const handleChangePoint = useCallback((pointIndex: number) => {
		setIntervalIndex(pointIndex)

		setAnimation(true)

		handleChangeAnimation()
	}, [])

	const dateInterval = (
		<div className='dateInterval_wrapper'>
			<DateInterval
				intervalStart={historyInterval.interval.start}
				intervalEnd={historyInterval.interval.end}
			/>
		</div>
	)

	return (
		<div className='app'>
			<div className='app_layout'>
				<Title text='Исторические даты' />

				{windowDimensions.width > 600 ? (
					<div className='spinner_wrapper'>
						<Spinner
							pointsList={historyIntervals.map(interval => interval.name)}
							activePointIndex={intervalIndex}
							onChangePoint={handleChangePoint}
						/>
						{dateInterval}
					</div>
				) : (
					<>{dateInterval}</>
				)}

				<IntervalSlider
					variant={windowDimensions.width > 600 ? 'desktop' : 'mobile'}
					inAnimation={inAnimation}
					slides={historyInterval.slides}
					propgress={{
						current: intervalIndex + 1,
						total: historyIntervals.length,
					}}
					title={historyInterval.name}
					handleClickNavigation={handleClickNavigation}
				/>
			</div>
		</div>
	)
}

export default App
