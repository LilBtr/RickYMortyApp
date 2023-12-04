import React from 'react'

export default function RandomCard({ card_info, getInfo }) {
	return (
		<div className='w-full text-center mt-12 md:w-96'>
			<img src={card_info.image} className='m-auto' />
			<div className='text-2xl mt-3'>
				<span>{card_info.id}</span>
				<span>{card_info.name}</span>
			</div>
			<div className='w-full flex justify-center'>
				<button onClick={getInfo} className='text-green-400 py-4 px-5 border-2 border-green-400 rounded-lg'>
					Get Randowm Character
				</button>
			</div>
		</div>
	)
}
