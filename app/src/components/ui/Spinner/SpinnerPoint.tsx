import React, { FC } from 'react'

import CN from 'classnames'

interface SpinnerPointProps {
	pointIndex: number
	pointTitle: string
	isActive?: boolean
	rotate: number
	onClickPoint?: () => void
}

const SpinnerPoint: FC<SpinnerPointProps> = ({
	pointIndex,
	pointTitle,
	isActive,
	rotate = 0,
	onClickPoint,
}) => {
	const spinnerCN = CN('spinner_point', { active: isActive })

	return (
		<div
			className={spinnerCN}
			style={{
				transform: `rotate(${rotate}deg)`,
			}}
		>
			<div
				className='spinner_point_wrapper'
				style={{
					transform: `rotate(${-rotate}deg)`,
				}}
			>
				<span className='spinner_point_index' onClick={onClickPoint}>
					{pointIndex}
				</span>

				<p className='spinner_point_title'>{pointTitle}</p>
			</div>
		</div>
	)
}

export default SpinnerPoint
