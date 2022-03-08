import React, { useEffect, useState } from 'react'
import './Home.css'
import Answer from './Answer'
import Results from './Results'
import randomNumber from './util';
import axios from 'axios';
import AdventureIcon from './img/adventure_icon.svg'


function Home() {
    const [arrCountries, setArrCountries] = useState([]);
    const [capital, setCapital] = useState(''); ///rename
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [answerIsChosen, setAnswerIsChosen] = useState(false);
    const [userResult, setUserResult] = useState();

    const [resultISShown, setResultIsShown] = useState(false);
    console.warn(`test: ${!resultISShown}`);
    const displayResults = () => {
        console.warn('button clicked!');
        setResultIsShown(true);
    };

    useEffect(() => {
        const getCountryName = async () => {
            const res = await axios.get(
                "https://restcountries.com/v3.1/all"
            );
            console.warn("★★★★★");
            console.warn(res.data);
            const chosen = randomNumber(res.data,4);

            let ci = Math.round(Math.random()* (3 + 1));
            // console.warn(`THE CHOSEN COUNTRY IS NO ${ci} NAMED ${chosen[ci].name.common}. ITS CAPITAL IS ${chosen[ci].capital[0]}`);
            setCapital(chosen[ci].capital[0]);

            //correctAnswer
            setCorrectAnswer(chosen[ci].name.common);

            setArrCountries(chosen);
        };
        getCountryName();
    },[]);
    // console.warn(arrCountries[0].capital[0]);

    return (        
        <div className='home'>         
            {!resultISShown && 
                <div>
                    <div className='upper'>
                        <p>COUNTRY QUIZ</p>
                        <img
                            style={{position:'absolute', top:'35px',left:'280px'}}
                            src={AdventureIcon}
                        />
                    </div>

                    <div className='container'>
                        <div className='question'>
                            <p>{capital} is the capital of</p>
                        </div>

                        <div className='answers'>
                            {arrCountries.map((c,ci) =>(
                                <Answer
                                    order = {ci}
                                    selection = {c.name.common}
                                    correctAnswer = {correctAnswer}
                                    answerIsChosen = {answerIsChosen}
                                    func = {setAnswerIsChosen}
                                    userResult = {userResult}
                                    func1 = {setUserResult}
                                />
                            ))}
                        </div>
                        
                        {userResult === false && <button className = 'nextButton' onClick={displayResults}>Next</button>}
                    </div>
                </div>
            }

            {resultISShown &&
                <Results
                    resultISShown={resultISShown}
                    setResultIsShown={setResultIsShown}
                />
            }

        </div>
    )
}

export default Home
