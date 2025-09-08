import React, { FC } from 'react'

import './Title.style.scss'

interface TitleProps {
	text: string
}

export const Title: FC<TitleProps> = ({ text }) => {
	return (
		<div className='title'>
			<h1 className='title_text'>{text}</h1>
		</div>
	)
}
