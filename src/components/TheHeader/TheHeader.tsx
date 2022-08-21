
import React from 'react'
import { Link } from "react-router-dom";

const TheHeader = () => {
    return (
        <header>
            <Link to="/">Pokemons</Link>
            <Link to="/favorites">Favorites</Link>
        </header>
    )
}


export default TheHeader

