import React, { useEffect, useState } from 'react'
import './Home.css'
import Answer from './Answer'
import axios from 'axios';
import AdventureIcon from './img/adventure_icon.svg'
import WinnerIcon from './img/winner_icon.svg'


function Home() {
    const arr = [];
    const [arrCountries, setArrCountries] = useState([]);

    useEffect(() => {
        const getCountryName = async () => {
            const res = await axios.get(
                "https://restcountries.com/v3.1/all"
            );
            console.warn("★★★★★");
            console.warn(res.data);
            for (let i=0; i<4; i++){
                let ci;
                ci = Math.round(Math.random()* (250 + 1));
                console.warn(ci);
                arr.push(res.data[ci].name.common);
            }
            setArrCountries(arr);
            arr.map((country,ci) => console.warn(`Country ${ci}: ${country}`));
        };
        getCountryName();
    },[]);
    console.warn(arrCountries.length);
    return (
        <div className='home'>
            <div className='upper'>
                <p>COUNTRY QUIZ</p>
                <img
                    style={{position:'absolute', top:'35px',left:'280px'}}
                    src={AdventureIcon}
                />
            </div>

            <div className='container'>
                <div className='question'>
                    <p>Kuala Lumpur is the capital of</p>
                </div>

                <div className='answers'>
                    {arrCountries.map((c,ci) =>(
                        <Answer
                            order = {ci}
                            country = {c}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
