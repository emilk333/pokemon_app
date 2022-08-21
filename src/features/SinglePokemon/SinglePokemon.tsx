




import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import genericFetch from '../../shared/util/fetch'
import { Namespace_SinglePokemonTypes } from './singlePokemon_types'
import { GlobalStoreContext } from '../../context/globalStore'
import { ActionTypes_GlobalReducer } from '../../shared/models/foundation_types'
import { selectedFavoriteIcon, favoriteIcon } from '../../assets/favoritesIcons'

const SinglePokemon = () => {
    let routeParam = useParams()
    const context = useContext(GlobalStoreContext)
    const [pokemonData, setPokemonData] = useState<Namespace_SinglePokemonTypes.ISingePokemonTypes>()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchSinglePokemonData()
    }, [])

    const fetchSinglePokemonData = () => {
        /**
         * Hardcoded url - should be replaced with queryParam generator function. Set in env vars.
         * 
         * More so, dont fetch data and simply display it - 100% chance we will need to manipulate it later.
         */
        setLoading(true)
        const tempUrl = `https://pokeapi.co/api/v2/pokemon/${routeParam.name}`
        genericFetch<Namespace_SinglePokemonTypes.ISingePokemonTypes>(tempUrl).then(res => {
            setPokemonData(res)
            setLoading(false)
        })
    }

    const selectedPokemon_FromListView = () => {
        return context?.store?.pokemon.find(pokemon => pokemon.pokemon.name === routeParam.name)
    }

    const addToFavorites = (pokemonName : string) => {
        context?.dispatchStoreValues({type: ActionTypes_GlobalReducer.SET_NEW_POKEMON_FAVORITE, payload: pokemonName})
    }


    if (loading || !pokemonData) {
        return <div>LOADING...</div>
    } else {
        return (
            <section className="pat-single-pokemon">
                <img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
                <h1>{pokemonData.name}</h1>
                <button className="pat-single-pokemon__favorite-button" onClick={() => addToFavorites(pokemonData.name)}>
                    {
                        /**
                         * This is why you merged data into a single source of truth - you get rid of random select functions from other places in the application
                         */
                    }
                    {
                    selectedPokemon_FromListView()?.pokemon.favorite ? 
                        <div dangerouslySetInnerHTML={{__html: selectedFavoriteIcon}}></div> : 
                        <div dangerouslySetInnerHTML={{__html: favoriteIcon}}></div>
                    }
                </button>
                
            </section>
        )
    }

}


export default SinglePokemon