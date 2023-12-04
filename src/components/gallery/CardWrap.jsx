import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function CardWrap() {
	const [appState, getData] = useState({
		loading: false,
		data: null,
		count: null,
	})

	const changeData = () => {
		getData({ loading: false, data: 1, count: 6 })
	}

	useEffect(() => {
		getData({ loading: true })
		const url = 'https://rickandmortyapi.com/api/character/?page=1'

		fetch(url)
			.then(res => res.json())
			.then(res => {
				getData({
					loading: false,
					data: res.results,
					count: res.info.count,
				})
			})
	}, [getData])

	return (
		<>
			<h1 className='text-xl font-medium'>Total characters: {appState.count}</h1>
			<section className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
				<Card card_data={appState.data} />
				<button onClick={changeData}>Измени состояние</button>
			</section>
		</>
	)
}
