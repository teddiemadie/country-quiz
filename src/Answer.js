import React, {useState} from 'react'
import './Answer.css'
import { createSetQA } from './util';

function Answer({data,setQa,answer_selection,answers, correct_answer, answerIsChosen, setAnswerIsChosen, userResult, setUserResult, score, setScore}) {
    
    const [answerClass, setAnswerClass] = useState('');
    let user_correct_answer_count = score;
    let user_click_count = answerIsChosen;
    const handleAnswer = () => {
        console.warn('answer clicked');
        user_click_count++;
        setAnswerIsChosen(user_click_count);
        console.warn('user_click_count',user_click_count);

        if (user_click_count === 1 && answers === correct_answer) {
            setUserResult(true);
            setAnswerClass('answerIsTrue');
            user_correct_answer_count++;            
            setScore(user_correct_answer_count);

            //set state that whether user clicked back to 'not choose yet'
            setAnswerIsChosen(0);

            //after 1000ms, start the code inside setTimeout
            setTimeout(()=>{
                setQa(createSetQA(data));
                setAnswerClass('');
            },1000);
        }else {
            setUserResult(false);
            setAnswerClass('answerIsFalse');
        }

        if(answerIsChosen >= 1) {
            setAnswerClass('cursor-not-allowed pointer-events-none');
        }
    }
    return (
        <div className={`answer ${answerClass} ${(userResult===false&&answers===correct_answer)?'answerIsTrue':''}`} onClick={handleAnswer}>
            <p className='answer_selection'>{answer_selection}</p>
            <p className='answers'>{answers}</p>
        </div>
    )
}
export default Answer
