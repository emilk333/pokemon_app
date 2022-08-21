

import React, { ReactNode } from 'react'
import { selectedFavoriteIcon, favoriteIcon } from '../../assets/favoritesIcons'


interface CardProps<T> {
    props: T
}

const Card = <T extends {}>( {props} : CardProps<T> & { children?: ReactNode }) => {
    return (
        <article>
            {
                //@ts-ignore
                props.displayValue
            }
            {
                //@ts-ignore Find out why this is bugging the linter
                props.selectedValue ? 
                    <div dangerouslySetInnerHTML={{__html: selectedFavoriteIcon}}></div> : 
                    <div dangerouslySetInnerHTML={{__html: favoriteIcon}}></div>
            }
        </article>
    )
}


export default Card