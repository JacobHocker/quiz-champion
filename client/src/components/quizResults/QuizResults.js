import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../../Helpers/Contexts';
import { AuthContext } from '../../Helpers/AuthContext';
import axios from 'axios';

export default function QuizResults({ quizId, crownAmount }) {
    const [scoreSaved, setScoreSaved] = useState(false);
    const [retakeShow, setRetakeShow] = useState(true);
    let navigate = useNavigate();
    const { quizScore, scoreArr, setQuizState, setQuizScore, setCorrectAnswers, setQuestionCounter } = useContext(QuizContext);
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
            })
    }

    useEffect(() => {
        if( crownAmount === 5) {
            setRetakeShow(false)
            saveCrowns()
        }
        
    }, [crownAmount])
    
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
                { retakeShow === true ?
                <button onClick={retakeQuiz} className='auth-btn'>
                    Retake Quiz
                </button>
                :
                <h1>You have gotten the highest score! Cannot retake quiz!</h1>
                }
            </div>
            <div className='return-to-quiz-container'>
                <button className='auth-btn' onClick={returnToQuizzes}>
                    Return to Quizzes
                </button>
            </div>
        </div>
    )
}
