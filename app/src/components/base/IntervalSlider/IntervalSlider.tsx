import React, { FC, useEffect, useState } from 'react'

import CN from 'classnames'

import { useWindowDimensions } from '@utils/useWindowDimensions'

import { DURATION_ROTATE_SPINNER } from '@config/settings'

import { Navigation, NavigationProps } from '../Navigation/Navigation'
import { Slider, SliderProps } from '@components/ui/Slider/Slider'

interface IntervalSliderProps
	extends Pick<SliderProps, 'inAnimation' | 'slides'>,
		Pick<NavigationProps, 'propgress'> {
	variant: 'mobile' | 'desktop'
	title: string
	handleClickNavigation: (value: number) => void
}

export const IntervalSlider: FC<IntervalSliderProps> = ({
	variant,
	propgress,
	title,
	slides,
	inAnimation,
	handleClickNavigation,
}) => {
	const [currentTitle, setCurrentTitle] = useState(title)

	const windowDimensions = useWindowDimensions()

	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrentTitle(title)
			clearTimeout(timer)
		}, DURATION_ROTATE_SPINNER)
	}, [title])

	const titleCN = CN('interval_title', { hide: inAnimation })

	const navigation = (
		<Navigation
			propgress={propgress}
			isDisabledPrev={propgress.current === 1}
			isDisabledNext={propgress.current === propgress.total}
			onClickPrev={() => !inAnimation && handleClickNavigation(-1)}
			onClickNext={() => !inAnimation && handleClickNavigation(1)}
		/>
	)

	switch (variant) {
		case 'mobile':
			return (
				<div className='slider_wrapper'>
					<p className={titleCN}>{currentTitle}</p>
					<Slider
						slides={slides}
						slidesPerView={2}
						spaceBetween={25}
						grabCursor
						freeMode
						navigation={false}
						pagination
						inAnimation={inAnimation}
					/>
					{navigation}
					<div className='intervalSlider_bullets'></div>
				</div>
			)
		case 'desktop':
			return (
				<div className='slider_wrapper'>
					{navigation}
					<Slider
						slides={slides}
						slidesPerView={3}
						spaceBetween={windowDimensions.width <= 840 ? 40 : 80}
						grabCursor
						navigation
						inAnimation={inAnimation}
					/>
				</div>
			)
	}
}
