import React, { useCallback, useEffect, useState } from 'react'

import {
	DELAY_UPDATE_INTERVAL,
	DELAY_UPDATE_SLIDER,
	DURATION_ROTATE_SPINNER,
	START_INDEX_INTERVAL,
} from '@config/settings'

import { historyIntervals } from '@constants/historyIntervals'

import { getWindowDimensions } from '@utils/getWindowDimensions'

import { Navigation } from '@components/base/Navigation/Navigation'

import { Title } from '@components/ui/Title/Title'
import Spinner from '@components/ui/Spinner/Spinner'
import { DateInterval } from '@components/ui/DateInterval/DateInterval'
import { IntervalSlider } from '@components/ui/IntervalSlider/IntervalSlider'

const App = () => {
	const [intervalIndex, setIntervalIndex] = useState(START_INDEX_INTERVAL)

	const historyInterval = historyIntervals[intervalIndex]

	const [intervalStart, setIntervalStart] = useState(historyInterval.interval.start)
	const [intervalEnd, setIntervalEnd] = useState(historyInterval.interval.end)
	const [intervalTitle, setIntervalTitle] = useState(historyInterval.name)

	const [slides, setSlides] = useState(historyInterval.slides)
	const [inAnimation, setAnimation] = useState(false)

	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

	const handleClickNavigation = useCallback((value: number) => {
		if (
			(value < 0 && intervalIndex === 0) ||
			(value > 0 && intervalIndex + 1 === historyIntervals.length)
		)
			return

		setIntervalIndex(intervalIndex + value)

		if (setAnimation) {
			setAnimation(true)

			const timer = setTimeout(() => {
				setAnimation(false)
				clearTimeout(timer)
			}, DURATION_ROTATE_SPINNER)
		}
	}, [intervalIndex])

	useEffect(() => {
		let start = historyInterval.interval.start
		let end = historyInterval.interval.end

		let prevStart = intervalStart
		let prevEnd = intervalEnd

		const updateIntervalStart: NodeJS.Timeout = setInterval(() => {
			if (prevStart === start) {
				return clearInterval(updateIntervalStart)
			}
			if (prevStart < start) {
				setIntervalStart(++prevStart)
			}
			if (prevStart > start) {
				setIntervalStart(--prevStart)
			}
		}, DELAY_UPDATE_INTERVAL)

		const updateIntervalEnd: NodeJS.Timeout = setInterval(() => {
			if (prevEnd === end) {
				return clearInterval(updateIntervalEnd)
			}
			if (prevEnd < end) {
				setIntervalEnd(++prevEnd)
			}
			if (prevEnd > end) {
				setIntervalEnd(--prevEnd)
			}
		}, DELAY_UPDATE_INTERVAL)

		const timer = setTimeout(() => {
			setSlides(historyInterval.slides)
			setIntervalTitle(historyInterval.name)

			clearTimeout(timer)
		}, DELAY_UPDATE_SLIDER)
	}, [intervalIndex])

	useEffect(() => {
		window.addEventListener('resize', () =>
			setWindowDimensions(getWindowDimensions())
		)

		return () =>
			window.removeEventListener('resize', () =>
				setWindowDimensions(getWindowDimensions())
			)
	}, [])

	return (
		<div className='app'>
			{windowDimensions.width > 600 && (
				<div className='app_layout'>
					<Title text='Исторические даты' />

					<div className='spinner_wrapper'>
						<Spinner
							pointsList={historyIntervals.map(interval => interval.name)}
							activePointIndex={intervalIndex}
							inAnimation={inAnimation}
							onChangePoint={setIntervalIndex}
							setAnimation={setAnimation}
						/>
						<div className='dateInterval_wrapper'>
							<DateInterval
								intervalStart={intervalStart}
								intervalEnd={intervalEnd}
							/>
						</div>
					</div>

					<div className='slider_wrapper'>
						<Navigation
							propgress={{
								current: intervalIndex + 1,
								total: historyIntervals.length,
							}}
							isDisabledPrev={intervalIndex === 0}
							isDisabledNext={intervalIndex === historyIntervals.length - 1}
							onClickPrev={() => !inAnimation && handleClickNavigation(-1)}
							onClickNext={() => !inAnimation && handleClickNavigation(1)}
						/>
						<IntervalSlider
							slides={slides}
							slidesPerView={3}
							spaceBetween={windowDimensions.width <= 840 ? 40 : 80}
							grabCursor
							navigation
							inAnimation={inAnimation}
						/>
					</div>
				</div>
			)}

			{windowDimensions.width <= 600 && (
				<div className='app_layout'>
					<Title text='Исторические даты' />
					<div className='dateInterval_wrapper'>
						<DateInterval
							intervalStart={intervalStart}
							intervalEnd={intervalEnd}
						/>
					</div>
					<div className='slider_wrapper'>
						<p className={`interval_title ${inAnimation && 'hide'}`}>
							{intervalTitle}
						</p>
						<IntervalSlider
							slides={slides}
							slidesPerView={2}
							spaceBetween={25}
							grabCursor
							freeMode
							navigation={false}
							pagination
							inAnimation={inAnimation}
						/>
						<Navigation
							propgress={{
								current: intervalIndex + 1,
								total: historyIntervals.length,
							}}
							isDisabledPrev={intervalIndex === 0}
							isDisabledNext={intervalIndex === historyIntervals.length - 1}
							onClickPrev={() => !inAnimation && handleClickNavigation(-1)}
							onClickNext={() => !inAnimation && handleClickNavigation(1)}
						/>
						<div className='intervalSlider_bullets'></div>
					</div>
				</div>
			)}
		</div>
	)
}

export default App
