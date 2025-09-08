import React, { FC, HTMLAttributes } from 'react'

import CN from 'classnames'

interface NavigationButtonProps extends HTMLAttributes<HTMLButtonElement> {
	disabled?: boolean
}

export const NavigationButton: FC<NavigationButtonProps> = ({
	className,
	children,
	...props
}) => {
	const buttonCN = CN('navigation_button', className)

	return (
		<button className={buttonCN} {...props}>
			{children}
		</button>
	)
}
