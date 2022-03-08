
import React from 'react'
import './Results.css'
import WinnerIcon from './img/winner_icon.svg'

function Results(resultISShown, setResultIsShown) {
    
    const backToHome = () => {
        setResultIsShown(false);
        console.warn(`test back to home ${resultISShown}`);
    };
  return (
    <div className='results'>
        <p>COUNTRY QUIZ</p>
        <div className='results_container'>
            <img
                src={WinnerIcon}
                style={{width:'238px',height:'129px', paddingTop:'40px',alignSelf:'center'}}
            />
            <h1>Results</h1>
            <p>You got <span>4</span> correct answers</p>
            <button className='results_button' onClick={backToHome}>Try again</button>
        </div>
    </div>
  )
}

export default Results