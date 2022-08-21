import { Namespace_PokemonOverviewTypes } from '../../features/PokemonOverview/pokemonOverview_types'


// Defines each possible action for given reducer
export enum ActionTypes_GlobalReducer {
    SET_POKEMON_DATA = "SET_POKEMON_DATA",
    SET_NEW_POKEMON_FAVORITE = "SET_NEW_POKEMON_FAVORITE"
}

// Defines types for given actions
export interface IGlobalReducerActions {
    type: ActionTypes_GlobalReducer;
    payload?: any
}

export interface IGlobalReducerState {
    store : Namespace_PokemonOverviewTypes.IPokemonOverviewTypes | null
}
