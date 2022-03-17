
import React from 'react'
import './Results.css'
import { createSetQA } from './util';
import WinnerIcon from './img/winner_icon.svg'

function Results({data,setQa,resultISShown, setResultIsShown, score, setScore,setAnswerIsChosen}) {
    
    const backToHome = () => {
        setResultIsShown(false);
        setQa(createSetQA(data));
        setScore(0);
        setAnswerIsChosen(0);
    };
  return (
    <div className='results'>
        <p>COUNTRY QUIZ</p>
        <div className='results_container'>
            <img
                src={WinnerIcon}
                alt='winner'
                style={{width:'238px',height:'129px', paddingTop:'40px',alignSelf:'center'}}
            />
            <h1>Results</h1>
            <p>You got <span>{score}</span> correct answers</p>
            <button className='results_button' onClick={backToHome}>Try again</button>
        </div>
    </div>
  )
}

export default Results