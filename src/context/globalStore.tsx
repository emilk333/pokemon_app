
import React, { createContext, useReducer } from 'react'
import { ActionTypes_GlobalReducer, IGlobalReducerActions, IGlobalReducerState } from '../models/foundation_types'
import { Namespace_IPokemonOverviewTypes } from '../models/pokemonOverview_types'

type GlobalReducerStore = Namespace_IPokemonOverviewTypes.IPokemonOverviewTypes | null
type StoreDispatch = (action : IGlobalReducerActions) => void

const GlobalStoreContext = createContext<{store : GlobalReducerStore, dispatchStoreValues : StoreDispatch} | undefined>(undefined!)


const globalReducer = (store : GlobalReducerStore, action : IGlobalReducerActions) : GlobalReducerStore => {
    const { type, payload } = action

    switch(type) {
        case ActionTypes_GlobalReducer.SET_POKEMON_DATA: 
     
            return store = payload
        default: 
            return store
    }
}


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