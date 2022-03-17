import React, { useEffect, useState } from 'react'
import './Home.css'
import QnA from './QnA'
import Results from './Results'
import {createSetQA} from './util';
import axios from 'axios';
import AdventureIcon from './img/adventure_icon.svg'


function Home() {
    const [data,setData] = useState();
    const [qa, setQa] = useState({});

    const [answerIsChosen, setAnswerIsChosen] = useState(false);
    const [userResult, setUserResult] = useState();
    const [score, setScore] = useState(0);

    const [resultISShown, setResultIsShown] = useState(false);
    console.warn(`test: ${!resultISShown}`);
    const displayResults = () => {
        console.warn('button clicked!');
        setResultIsShown(true);
    };
    // console.warn('fourth');

    useEffect(() => {
        const getCountryName = async () => {
            const res = await axios.get(
                "https://restcountries.com/v3.1/all"
            );
            console.warn(res.data);
            setData(res.data);

            setQa(createSetQA(res.data));
        };
        getCountryName();
        // console.warn('first');
    },[]);
    
    // console.warn('third');
    return (        
        <div className='home'> 
            {!resultISShown && 
                <div>
                    <div className='upper'>
                        <p>COUNTRY QUIZ</p>
                        <img
                            alt='icon'
                            style={{position:'absolute', top:'35px',left:'280px'}}
                            src={AdventureIcon}
                        />
                    </div>
                    {Object.keys(qa).length !== 0 && 
                        <QnA
                            data={data}
                            qa={qa}
                            setQa={setQa}
                            answerIsChosen={answerIsChosen}
                            setAnswerIsChosen={setAnswerIsChosen}
                            displayResults={displayResults}
                            userResult={userResult}
                            setUserResult={setUserResult}
                            score={score}
                            setScore={setScore}
                        />
                    }
                </div>
            }

            {resultISShown &&
                <Results
                    data={data}
                    setQa={setQa}
                    resultISShown={resultISShown}
                    setResultIsShown={setResultIsShown}
                    score={score}
                    setScore={setScore}
                />
            }

        </div>
    )
}

export default Home
