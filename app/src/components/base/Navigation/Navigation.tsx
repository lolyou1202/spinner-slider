import React, { FC } from 'react'

import './Navigation.style.scss'

import { NavigationButton } from './NavigationButton'
import { Arrow } from '@components/icons/Arrow'

interface NavigationProps {
	propgress: {
		current: number
		total: number
	}
	isDisabledPrev?: boolean
	isDisabledNext?: boolean
	onClickPrev: () => void
	onClickNext: () => void
}

export const Navigation: FC<NavigationProps> = ({
	propgress,
	isDisabledPrev,
	isDisabledNext,
	onClickPrev,
	onClickNext,
}) => {
	return (
		<div className='navigation'>
			<p className='navigation_progress'>
				{'0' + propgress.current}/{'0' + propgress.total}
			</p>
			<div className='navigation_controls'>
				<NavigationButton
					className='prev'
					disabled={isDisabledPrev}
					onClick={onClickPrev}
				>
					<Arrow direction='left' />
				</NavigationButton>
				<NavigationButton
					className='next'
					disabled={isDisabledNext}
					onClick={onClickNext}
				>
					<Arrow direction='right' />
				</NavigationButton>
			</div>
		</div>
	)
}
