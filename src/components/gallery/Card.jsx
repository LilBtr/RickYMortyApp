import React from 'react'

export default function Card({ card_data }) {
	return (
		<>
			{card_data
				? card_data.map(character => (
						<div className='p-2 bg-purple-700 flex items-center flex-wrap text-white text-2xl rounded-lg'>
							<img className='w-full' src={character.image} />
							<div className='w-full flex flex-wrap gap-4 mt-4 justify-cente'>
								<h3 className='text-center'>
									{character.id}. {character.name}
								</h3>
							</div>
						</div>
				  ))
				: null}
		</>
	)
}
