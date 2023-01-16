import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../../Helpers/Contexts';
import { AuthContext } from '../../Helpers/AuthContext';
import axios from 'axios';

export default function QuizResults({ quizId, crownAmount }) {
    const [scoreSaved, setScoreSaved] = useState(false);
    let navigate = useNavigate();
    const { quizScore, scoreObj, setQuizState, setQuizScore, setCorrectAnswers, setQuestionCounter } = useContext(QuizContext);
    const { userId, userObj, setUserObj } = useContext(AuthContext);

    const returnToQuizzes = () => {
        navigate('/quizzes')
    }
    const retakeQuiz = () => {
        setQuizState("menu");
        setQuizScore(0);
        setQuestionCounter(0);
        setCorrectAnswers(0);
    }
    
    
    const saveCrowns = () => {
        let totalCrown = userObj.data.totalCrown + crownAmount
        axios.put("http://localhost:2000/auth/crowns", {totalCrown: totalCrown, id: userId})
            .then(() => {
                setScoreSaved(true)
                setUserObj({...userObj.data, totalCrown: totalCrown})
        })
    }
    return (
        <div className='quiz-results-container'>
            <div className='quiz-results'>
                <h1>Score: {quizScore}</h1>
                <h1>Crowns Recieved: {crownAmount}</h1>
            </div>
            <div className='save-scores'>
                { scoreSaved === true ? 
                <h1>Your crowns have been saved!</h1>
                :
                <button className='auth-btn' onClick={saveCrowns}>
                    Save Your Crowns 
                </button>
                }
            </div>
            <div className='retake-quiz'>
                <button onClick={retakeQuiz} className='auth-btn'>
                    Retake Quiz
                </button>
            </div>
            <div className='return-to-quiz-container'>
                <button className='auth-btn' onClick={returnToQuizzes}>
                    Return to Quizzes
                </button>
            </div>
        </div>
    )
}
