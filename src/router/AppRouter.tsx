

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoritePage from '../pages/FavoritesPage';
import PokemonPage from '../pages/PokemonPage';
import TheHeader from '../components/TheHeader/TheHeader'
import SinglePokemon from '../pages/SinglePokemonPage'

function AppRouter() {

	return (
		<BrowserRouter>
            <TheHeader />
            <Routes>
                <Route path="/" element={<PokemonPage/>}/>
                <Route path="favorites" element={<FavoritePage/>}/>
                <Route path="pokemon/:name" element={<SinglePokemon/>} />
            </Routes>
        </BrowserRouter>
	)
}

export default AppRouter
