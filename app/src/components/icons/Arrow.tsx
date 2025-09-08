import React, { FC, SVGProps } from 'react'

interface ArrowProps extends SVGProps<SVGSVGElement> {
	direction?: 'left' | 'right'
}

export const Arrow: FC<ArrowProps> = ({ direction = 'left', ...props }) => {
	switch (direction) {
		case 'left':
			return (
				<svg
					width='9'
					height='16'
					viewBox='0 0 9 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path d='M8 0.999999L2 8L8 15' />
				</svg>
			)
		case 'right':
			return (
				<svg
					width='9'
					height='16'
					viewBox='0 0 9 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M1 0.999999L7 8L1 15' />
				</svg>
			)
	}
}
