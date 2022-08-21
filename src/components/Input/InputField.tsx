











import React, { useState } from 'react'

interface IInputFieldProps {
    props: any,
    callBack: Function
}


const InputField = ({props, callBack} : IInputFieldProps) => {


    return (
        <div>
            <label htmlFor="pokemon_type">Pokemon type</label>
            <input type="text" name="pokemon_type" id="pokemon_type" value={props} onChange={(e) => callBack(e.target.value)}/>
        </div>
    )
}


export default InputField