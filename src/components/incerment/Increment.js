import React, { useState } from 'react';
import { increment } from '../../context/counter';
import { useDispatch } from 'react-redux';
import bmw from '../../images/bmw.webp'

function Increment() {
    const dispatch = useDispatch()

    return (
        <div className='increment'>
            <img src={bmw} alt="" />
            <input type="number" />
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    )
}
export default Increment