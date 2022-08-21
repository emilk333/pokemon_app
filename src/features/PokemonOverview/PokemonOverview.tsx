



import React, { useContext, useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import InputField from '../../components/Input/InputField'
import genericFetch from '../../util/fetch'
import { GlobalStoreContext } from '../../context/globalStore'
import { Namespace_IPokemonOverviewTypes } from '../../models/pokemonOverview_types'
import { ActionTypes_GlobalReducer } from '../../models/foundation_types'
import { Link } from 'react-router-dom';

const PokemonOverview = () => {

    const context = useContext(GlobalStoreContext)
    const [pokemonTypeInputValue, setPokemonTypeInputValue] = useState("type/3")

    useEffect(() => {
        fetchPokemonByType()
        console.log(context?.store)
    }, [pokemonTypeInputValue])

    const findPokemonsByType = (value:string) => setPokemonTypeInputValue(value)
    
    const fetchPokemonByType = () => {
        /**
         * Hardcoded url - should be replaced with queryParam generator function. 
         */
        const tempUrl = `https://pokeapi.co/api/v2/${pokemonTypeInputValue}`
        genericFetch<Namespace_IPokemonOverviewTypes.IPokemonOverviewTypes>(tempUrl).then((res) => {
            /**
             * Before setting in store - major data mapping/sanitization should happen here. Extract to external functions in e.g. util
             */
             context?.dispatchStoreValues({type : ActionTypes_GlobalReducer.SET_POKEMON_DATA, payload : res})  
        })
    }

    const renderCardGrid = () => {
        return context?.store?.pokemon.map(pokemon => {
            return (
                <li key={pokemon.pokemon.name}>
                    <Link to={`pokemon/${pokemon.pokemon.name}`}>
                        <Card props={pokemon.pokemon.name}/>
                    </Link>
                </li>
            )
        })
    }


    return (
        <section>
            <InputField props={pokemonTypeInputValue} callBack={findPokemonsByType}/>
            <div>
                <ul>
                    {context?.store?.pokemon?.length ? renderCardGrid() : ""}
                </ul>
            </div>
        </section>
    )
}


export default PokemonOverview