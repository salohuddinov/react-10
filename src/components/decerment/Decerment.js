import React from 'react'
import { decrement } from '../../context/counter'
import { useDispatch } from 'react-redux'
import merc from '../../images/mers.jpg'

function Decerment() {
    const dispatch = useDispatch()
    return (
        <div className='decerment'>
            <img src={merc} alt="" />
            <input type="number" />
            <button onClick={() => dispatch(decrement())}>Decerment</button>
        </div>

    )
}

export default Decerment