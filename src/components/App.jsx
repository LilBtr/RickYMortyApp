import { Routes, Route } from 'react-router-dom'
import GalleryPage from './gallery/GalleryPage'
import RandomCharacterPage from "./RandomCharacterPage.jsx";

export default function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<GalleryPage />} />
				<Route path='/random_character' element={<RandomCharacterPage />} />
			</Routes>
		</>
	)
}
