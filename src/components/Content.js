import React from 'react'
import { useState,useEffect } from 'react'

export default function Content() {
    const [display, setDisplay] = useState(null)
    const [count, setCount] = useState(0);

    changeHandler = (e) =>{
        setDisplay(e.target.value)
        console.log(e.target.value.length)
    }

    return (
        <div>
            <textarea value={display} onChange={changeHandler} />
            <p>Total no. of words written {count}</p> 
        </div>
    )
}
