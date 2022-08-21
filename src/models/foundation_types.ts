import { Namespace_IPokemonOverviewTypes } from './pokemonOverview_types'


// Defines each possible action for given reducer
export enum ActionTypes_GlobalReducer {
    SET_POKEMON_DATA = "SET_POKEMON_DATA"
}

// Defines types for given actions
export interface IGlobalReducerActions {
    type: ActionTypes_GlobalReducer;
    payload?: any
}

export interface IGlobalReducerState {
    store : Namespace_IPokemonOverviewTypes.IPokemonOverviewTypes | null
}
