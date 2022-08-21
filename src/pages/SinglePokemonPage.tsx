



import React from 'react'
import SinglePokemon from '../features/SinglePokemon/SinglePokemon'

const SinglePokemonPage = () => {
    return (
        <section style={{marginTop: '20px'}}>
            {
                /**
                 * Reason for this abstraction is the ability to inject more functionality pr. component. E.g. Higher order components. 
                 */
            }
            <SinglePokemon />
        </section>
    )
}


export default SinglePokemonPage