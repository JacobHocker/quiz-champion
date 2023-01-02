import React, { useEffect, useState } from 'react';
import './QuizDisplayContainer.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import QuizPlayContainer from '../quizPlayContainer/QuizPlayContainer';




export default function QuizDisplayContainer() {
    let { id } = useParams();
    let [quizObject, setQuizObject] = useState({});
    let [questionList, setQuestionList] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:2000/quizzes/${id}`).then((response) => {
            setQuizObject(response.data)
        })
        axios.get(`http://localhost:2000/questions/${id}`).then((response) => {
            setQuestionList(response)
        })
    },[])
    return (
        <div className='quiz-display-container'>
            <h1>{quizObject.quizName}</h1>
            <img src={quizObject.quizImage} alt={quizObject.quizName} className='quiz-display-image'/>
            <h3>Category: {quizObject.quizCategory}</h3>
            <p>Description: {quizObject.quizDescription}</p>
            <QuizPlayContainer questionList={questionList} />
        </div>
    )
}
