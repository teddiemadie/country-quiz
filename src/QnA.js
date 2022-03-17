import React from 'react'
import './QnA.css'
import Answer from './Answer'

function QnA({data,qa,setQa,displayResults,answerIsChosen,setAnswerIsChosen,userResult,setUserResult,score,setScore}) {
  return (
    <div className='QnA'>
        {qa.question_type === 'flag' && 
            <div className='flag_question'> 
                <img
                    alt='flag'
                    src={qa.question_value}
                    style={{width: '100px', height: '60px', paddingTop: '30px', alignSelf: 'flex-start'}}
                />
                <p className='question'>{qa.question}</p>
            </div>
            
        }
        {qa.question_type !== 'flag' &&
            <p className='question'>{qa.question_value + qa.question}</p>
        }

        {qa.answers.map((a,i) => (
            <Answer
                key={i}
                data={data}
                setQa={setQa}
                answer_selection = {qa.answer_selection[i]}
                answers = {a}
                correct_answer = {qa.correct_answer}
                answerIsChosen = {answerIsChosen}
                setAnswerIsChosen = {setAnswerIsChosen}
                userResult = {userResult}
                setUserResult = {setUserResult}
                score={score}
                setScore={setScore}
            />
        ))}

        {userResult === false && <button className = 'nextButton' onClick={displayResults}>Next</button>}
    </div>
  )
}

export default QnA