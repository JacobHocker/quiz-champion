import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
        <div>
            <h1>{quizObject.quizName}</h1>
            <div className='question-list-container'>
            {questionList.data && questionList.data.map((val) => (
                <h3 key={val.id}>{val.questionContent}</h3>
            ))}
            </div>
        </div>
    )
}
