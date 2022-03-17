import React, {useState} from 'react'
import './Answer.css'
import { createSetQA } from './util';

function Answer({data,setQa,answer_selection,answers, correct_answer, answerIsChosen, setAnswerIsChosen, setUserResult, score, setScore}) {
    
    const [answerClass, setAnswerClass] = useState('');
    let user_correct_answer_count = score;
    const handleAnswer = () => {
        console.warn('answer clicked');
        setAnswerIsChosen(true);
        if (answers === correct_answer) {
            setUserResult(true);
            user_correct_answer_count++;            
            setScore(user_correct_answer_count);
            console.warn('score',score);
            setQa(createSetQA(data));
            setAnswerClass('answerIsTrue');
        }else {
            setUserResult(false);
            setAnswerClass('answerIsFalse');
        }

        if(answerIsChosen === true) {
            setAnswerClass('');
        }
    }
    return (
        <div className={`answer ${answerClass}`} onClick={handleAnswer}>
            <p className='orderOfAnswer'>{answer_selection}</p>
            <p className='country'>{answers}</p>
        </div>
    )
}
export default Answer
