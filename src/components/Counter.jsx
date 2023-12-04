import { useState } from 'react'

export default function Counter() {
	const [count, setCount] = useState(0)

	const increment = () => {
		setCount(count + 1)
	}
	const decrement = () => {
		setCount(count - 1)
	}
	return (
		<>
			<h1>{count}</h1>
			<button onClick={increment}>decrement</button>
			<button onClick={decrement}>increment</button>
		</>
	)
}
