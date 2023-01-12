import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Helpers/AuthContext';
import axios from 'axios';
import { QuizContext } from '../../Helpers/Contexts';
import { useNavigate } from 'react-router-dom';

export default function QuizEnd({ questionList }) {
    const { userId, userObj } = useContext(AuthContext);
    let navigate = useNavigate();
    const { score, setScore, correctAnswers } = useContext(QuizContext);

    useEffect(() => {
        setScore(Math.round((correctAnswers / questionList.length) * 100))
    }, [])
    
    

    const crownDistribution =  () => {
        if (score >= 70 && score <= 79) {
            let bronzeCrown =  userObj.data.bronzeCrown + 1
            axios.put("http://localhost:2000/auth/bronzeCrown", 
            { 
                bronzeCrown: bronzeCrown, 
                id: userId, 
            })
            .then(console.log(bronzeCrown))
        } else if (score >= 80 && score <= 89) {
            let silverCrown = userObj.data.silverCrown + 1
            axios.put("http://localhost:2000/auth/silverCrown", 
            { 
                silverCrown: silverCrown, 
                id: userId, 
            })
            .then(console.log(silverCrown))
        } else if (score >= 90 && score <= 99) {
            let goldCrown = userObj.data.goldCrown + 1
            axios.put("http://localhost:2000/auth/goldCrown", 
            { 
                goldCrown: goldCrown, 
                id: userId, 
            })
            .then(console.log(goldCrown))
        } else if ( score === 100 ) {
            let platinumCrown = userObj.data.platinumCrown + 1
            axios.put("http://localhost:2000/auth/platinumCrown", 
            { 
                platinumCrown: platinumCrown, 
                id: userId,
            })
            .then(console.log(platinumCrown))
        } else {
            return 'Sorry! No crowns for you!'
        }
    }
    console.log(userObj)
    const returnToQuizList = () => {
        navigate('/quizzes')
    }
    return (
        <div className='quiz-end-container'>
            <h1>Quiz Completed</h1>
            <h1>{score}%</h1>
            {userObj.data === undefined ? <h1>Loading...</h1> : crownDistribution()}
            <div className='return-to-quiz'>
                <button className='return-btn' onClick={returnToQuizList}>
                    Return to Quizzes
                </button>
            </div>
        </div>
    )
}
