import React from 'react'
import './Answer.css'

function Answer({order, country}) {
    return (
        <div className='answer'>
            <p className='orderOfAnswer'>{order}</p>
            <p className='country'>{country}</p>
        </div>
    )
}
export default Answer
