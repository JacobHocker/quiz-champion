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
        <div className='quiz-list-container'>
            {quizListDisplay.data && quizListDisplay.data.map((val) => (
                <div className='quiz-list-card' key={val.id}
                onClick={() => {navigate(`/quiz/${val.id}`)}}>
                    <h1 className='quiz-card-name'>{val.quizName}</h1>
                    <img src={val.quizImage} alt={val.quizName} className='quiz-card-thumb'/>
                    <h3 className='quiz-card-cat'>{val.quizCategory}</h3>
                    <p className='quiz-card-desc'>{val.quizDescription}</p>
                </div>
            ))}
        </div>
    )
}
