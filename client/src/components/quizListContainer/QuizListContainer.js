import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './QuizListContainer.css';
import axios from 'axios';

export default function QuizListContainer() {
    const [quizListDisplay, setQuizListDisplay] = useState([]);
    
    let navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:2000/quizzes").then((response) => {
            setQuizListDisplay(response)
        })
    }, [])
    
    return (
        <div className='quiz-list-page'>
            <div className='quiz-list-header'>
                <h1>Select a quiz to begin testing your knowledge!</h1>
            </div>
            <div className='quiz-list-container'>
                {quizListDisplay.data && quizListDisplay.data.map((val) => (
                    <div className='quiz-list-card' key={val.id}
                    onClick={() => {navigate(`/quiz/${val.id}`)}}>

                        <div className='quiz-card-header'>
                            <h1>{val.quizName}</h1>
                        </div>
                        <div className='quiz-thumbnail-container'>
                            <img src={val.quizImage} alt={val.quizName} className='quiz-card-thumb' />
                        </div>
                        <div className='quiz-card-body'>
                            <h2>Difficulty: {val.quizDifficulty}</h2>
                        </div>
                        
                        <div className='quiz-card-footer'>
                            <p>{val.quizDescription}</p>
                            <p>Quiz ID #: {val.id}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}
