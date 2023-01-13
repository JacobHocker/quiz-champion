import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function QuizResults() {
    let navigate = useNavigate();
    
    const returnToQuizzes = () => {
        navigate('/quizzes')
    }
    return (
        <div className='quiz-results-container'>

            <div className='return-to-quiz-container'>
                <button className='auth-btn' onClick={returnToQuizzes}>
                    Return to Quizzes
                </button>
            </div>
        </div>
    )
}
