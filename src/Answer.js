import React, {useState} from 'react'
import './Answer.css'

function Answer({order, selection, correctAnswer, answerIsChosen, func, userResult, func1}) {
    
    const [answerClass, setAnswerClass] = useState('');

    const handleAnswer = () => {
        console.warn('clicked');
        func(true);

        if (correctAnswer === selection) {
            func1(true);
            setAnswerClass('answerIsTrue');
        }else {
            func1(false);
            setAnswerClass('answerIsFalse');
        }

        if(answerIsChosen === true) {
            setAnswerClass('');
        }

    }

    return (
        <div className={`answer ${answerClass}`} onClick={handleAnswer}>
            <p className='orderOfAnswer'>{order}</p>
            <p  className='country'>{selection}</p>
        </div>
    )
}
export default Answer
