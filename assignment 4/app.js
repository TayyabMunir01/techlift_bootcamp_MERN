import React from 'react'

export default function Dropdown(props){
    return (
        <>
            <select onChange={props.onchange}>
                <option selected="selected">select</option>
                <option value={props.countries.pak}  > {props.countries.pak} </option>
                <option value={props.countries.usa} > {props.countries.usa} </option>
            </select>
        </>
    )
}