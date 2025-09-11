import React, { FC, useEffect, useState } from 'react'

import './Spinner.style.scss'

import {
	DURATION_ROTATE_SPINNER,
	MAX_COUNT_SPINNER_POINTS,
	MIN_COUNT_SPINNER_POINTS,
} from '@config/settings'
import { calculateAngle } from '@utils/calculateAngle'

import { gsap } from 'gsap'

import SpinnerPoint from './SpinnerPoint'

interface SpinnerProps {
	pointsList: string[]
	activePointIndex?: number
	onChangePoint?: (pointIndex: number) => void
}

const Spinner: FC<SpinnerProps> = ({
	pointsList,
	activePointIndex = 0,
	onChangePoint,
}) => {
	const countPoints = pointsList.length

	if (
		countPoints < MIN_COUNT_SPINNER_POINTS ||
		countPoints > MAX_COUNT_SPINNER_POINTS
	) {
		return
	}

	const [_activePointIndex, setActivePoint] = useState(activePointIndex)
	const [pointAngle, setPointAngle] = useState(calculateAngle(countPoints))

	const handleChangeActivePoint = (pointIndex: number) => {
		if (pointIndex === _activePointIndex) return

		setActivePoint(pointIndex)
		onChangePoint && onChangePoint(pointIndex)
		rotate(pointIndex)
	}

	const rotate = (pointIndex: number) => {
		const targetAngle = (360 / countPoints) * pointIndex
		const currentAngle = pointAngle

		const angleDifference = ((targetAngle - currentAngle + 540) % 360) - 180
		const finalAngle = currentAngle + angleDifference + calculateAngle(countPoints)

		gsap.to(
			{ angle: currentAngle },
			{
				angle: finalAngle,
				duration: DURATION_ROTATE_SPINNER / 1000,
				ease: 'power1.out',
				onUpdate: function () {
					setPointAngle(this.targets()[0].angle)
				},
			}
		)
	}

	useEffect(() => {
		if (activePointIndex !== _activePointIndex) {
			handleChangeActivePoint(activePointIndex)
		}
	}, [activePointIndex])

	return (
		<div className='spinner'>
			{pointsList.map((point, index) => (
				<SpinnerPoint
					key={index}
					isActive={index === _activePointIndex}
					pointTitle={point}
					pointIndex={index + 1}
					rotate={(360 / countPoints) * (index + 1) - pointAngle}
					onClickPoint={() => handleChangeActivePoint(index)}
				/>
			))}
		</div>
	)
}

export default Spinner
