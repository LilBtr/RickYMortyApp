import React, { useState, useEffect } from 'react'
import RandomCard from './RandomCard.jsx'

export default function RandomWrapper() {
	const [randomCharState, setData] = useState({ data: null })

	const randNumber = () => Math.floor(Math.random() * 826 - 1) + 1
	const getInfo = () => {
		fetch(`https://rickandmortyapi.com/api/character/${randNumber()}`)
			.then(res => res.json())
			.then(res => {
				setData({ data: res })
			})
	}
	useEffect(getInfo, [])

	return (
		<main className='container flex justify-center'>
			{randomCharState.data !== null && randomCharState.data !== undefined && (
				<RandomCard card_info={randomCharState.data} getInfo={getInfo} />
			)}
		</main>
	)
}
