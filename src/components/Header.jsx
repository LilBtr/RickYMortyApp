import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
	const headerItemList = [
		{
			path: '/',
			text: 'Gallery',
		},
		{
			path: '/random_character',
			text: 'Random Character',
		},
	]
	return (
		<header className='w-full flex justify-center gap-5 py-6 bg-purple-600 text-white'>
			{headerItemList.map(item => (
				<Link to={item.path}>{item.text}</Link>
			))}
		</header>
	)
}
