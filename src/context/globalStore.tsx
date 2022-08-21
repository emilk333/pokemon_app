
import React, { createContext, useReducer } from 'react'
import { ActionTypes_GlobalReducer, IGlobalReducerActions, IGlobalReducerState } from '../shared/models/foundation_types'
import { Namespace_PokemonOverviewTypes } from '../features/PokemonOverview/pokemonOverview_types'
import deepClone from '../shared/util/deepClone'

type GlobalReducerStore = Namespace_PokemonOverviewTypes.IPokemonOverviewTypes | null
type StoreDispatch = (action : IGlobalReducerActions) => void

const GlobalStoreContext = createContext<{store : GlobalReducerStore, dispatchStoreValues : StoreDispatch} | undefined>(undefined!)


const globalReducer = (store : GlobalReducerStore, action : IGlobalReducerActions) : GlobalReducerStore => {
    const { type, payload } = action

    switch(type) {
        case ActionTypes_GlobalReducer.SET_POKEMON_DATA: 
            return store = payload

        case ActionTypes_GlobalReducer.SET_NEW_POKEMON_FAVORITE: 
            const newStore = deepClone<GlobalReducerStore>(store)

            newStore?.pokemon.map((pokemon : Namespace_PokemonOverviewTypes.Pokemon) => {
                if (pokemon.pokemon.name === payload) {
                    pokemon.pokemon.favorite = !pokemon.pokemon.favorite
                }
                return pokemon
            })

            return {
                ...store,
                ...newStore
            }
        default: 
            return store
    }
}

/**
 * 
 * @param param0 JSX.Element we want to share state to
 * @returns Provider element which wraps selected child componentry
 */

const GlobalStoreProvider = ({children} : any) => { //replace any with correct type

    const [store, dispatchStoreValues] = useReducer(globalReducer, null)
    const providerValue = {store, dispatchStoreValues}

    return (
        <GlobalStoreContext.Provider value={providerValue}>
            {children}
        </GlobalStoreContext.Provider>
    )
}

export { GlobalStoreProvider, GlobalStoreContext } 