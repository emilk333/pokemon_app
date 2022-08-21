



import React, { useContext, useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import InputField from '../../components/Input/InputField'
import genericFetch from '../../shared/util/fetch'
import { GlobalStoreContext } from '../../context/globalStore'
import { Namespace_PokemonOverviewTypes } from './pokemonOverview_types'
import { ActionTypes_GlobalReducer } from '../../shared/models/foundation_types'
import { Link } from 'react-router-dom';

const PokemonOverview = () => {

    const context = useContext(GlobalStoreContext)
    const [pokemonTypeInputValue, setPokemonTypeInputValue] = useState("type/3")
    const [loading, setLoading] = useState(false)

    const findPokemonsByType = (value:string) => setPokemonTypeInputValue(value)
    
    const fetchPokemonsByType = () => {
        /**
         * Hardcoded url - should be replaced with queryParam generator function. Set in env vars
         */
        setLoading(true)
        const tempUrl = `https://pokeapi.co/api/v2/${pokemonTypeInputValue}`
        genericFetch<Namespace_PokemonOverviewTypes.IPokemonOverviewTypes>(tempUrl).then((res) => {
            /**
             * Before setting in store - major data mapping/sanitization should happen here. Inject flags as properties
             * in order to e.g. maintain favorites state. Extract to external functions in e.g. util
             */
             context?.dispatchStoreValues({type : ActionTypes_GlobalReducer.SET_POKEMON_DATA, payload : res})  
             setLoading(false)
        })
    }

    const renderCardGrid = () => {
        return context?.store?.pokemon.map(pokemon => {
            return (
                <li className="pat-overview__pokemon-list-item" key={pokemon.pokemon.name}>
                    <Link to={`pokemon/${pokemon.pokemon.name}`}>
                        <Card props={{
                            displayValue : pokemon.pokemon.name,
                            selectedValue : pokemon.pokemon.favorite
                        }}/>
                    </Link>
                </li>
            )
        })
    }

    if (loading) {
        return <div>LOADING...</div>
    } else {
        return (
            <section>
                <InputField props={pokemonTypeInputValue} callBack={findPokemonsByType}/>
                <button onClick={() => fetchPokemonsByType()}>Fetch pokemons!</button>
                <div>
                    <ul className="pat-overview__pokemon-list">
                        {context?.store?.pokemon?.length ? renderCardGrid() : ""}
                    </ul>
                </div>
            </section>
        )
    }
}


export default PokemonOverview