import React, { FC, useEffect, useState } from 'react'

import './Slider.style.scss'
import 'swiper/css'

import CN from 'classnames'

import { Swiper, SwiperProps, SwiperSlide, useSwiper } from 'swiper/react'
import { A11y, Navigation, Pagination } from 'swiper/modules'

import { HistoryInterval } from '@constants/historyIntervals'
import { Arrow } from '@components/icons/Arrow'
import { DURATION_ROTATE_SPINNER } from '@config/settings'

export interface SliderProps extends SwiperProps {
	inAnimation: boolean
	slides: HistoryInterval['slides']
}

export const Slider: FC<SliderProps> = ({
	inAnimation,
	slides,
	navigation,
	pagination,
	...props
}) => {
	const [_slides, setSlides] = useState(slides)

	useEffect(() => {
		const timer = setTimeout(() => {
			setSlides(slides)
			clearTimeout(timer)
		}, DURATION_ROTATE_SPINNER)
	}, [slides])

	const sliderCN = CN('slider', { hide: inAnimation })

	return (
		<div className={sliderCN}>
			<Swiper
				{...props}
				navigation={
					!!navigation && {
						prevEl: '.slider_arrow.prev',
						nextEl: '.slider_arrow.next',
						disabledClass: 'disabled',
					}
				}
				pagination={
					!!pagination && {
						el: '.slider_bullets',
						type: 'bullets',
						clickable: true,
					}
				}
				modules={[Navigation, Pagination, A11y]}
			>
				{_slides.map(({ title, description }, index) => (
					<SwiperSlide key={index}>
						<div className='slider_slide'>
							<p className='slider_slide_title'>{title}</p>
							<span className='slider_slide_text'>
								{description}
							</span>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			{!!navigation && (
				<>
					<button className='slider_arrow prev'>
						<Arrow direction='left' />
					</button>
					<button className='slider_arrow next'>
						<Arrow direction='right' />
					</button>
				</>
			)}
		</div>
	)
}
