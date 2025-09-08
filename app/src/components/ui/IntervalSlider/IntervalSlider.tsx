import React, { FC } from 'react'

import './IntervalSlider.style.scss'
import 'swiper/css'

import CN from 'classnames'

import { Swiper, SwiperProps, SwiperSlide, useSwiper } from 'swiper/react'
import { A11y, Navigation, Pagination } from 'swiper/modules'

import { HistoryInterval } from '@constants/historyIntervals'
import { Arrow } from '@components/icons/Arrow'

interface IntervalSliderProps extends SwiperProps {
	inAnimation: boolean
	slides: HistoryInterval['slides']
}

export const IntervalSlider: FC<IntervalSliderProps> = ({
	inAnimation,
	slides,
	navigation,
	pagination,
	...props
}) => {
	const sliderCN = CN('intervalSlider', { hide: inAnimation })

	return (
		<div className={sliderCN}>
			<Swiper
				{...props}
				navigation={
					!!navigation && {
						prevEl: '.intervalSlider_arrow.prev',
						nextEl: '.intervalSlider_arrow.next',
						disabledClass: 'disabled',
					}
				}
				pagination={
					!!pagination && {
						el: '.intervalSlider_bullets',
						type: 'bullets',
						clickable: true,
					}
				}
				modules={[Navigation, Pagination, A11y]}
			>
				{slides.map(({ title, description }, index) => (
					<SwiperSlide key={index}>
						<div className='intervalSlider_slide'>
							<p className='intervalSlider_slide_title'>{title}</p>
							<span className='intervalSlider_slide_text'>
								{description}
							</span>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			{!!navigation && (
				<>
					<button className='intervalSlider_arrow prev'>
						<Arrow direction='left' />
					</button>
					<button className='intervalSlider_arrow next'>
						<Arrow direction='right' />
					</button>
				</>
			)}
		</div>
	)
}
