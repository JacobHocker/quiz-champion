import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function QuizDisplayContainer() {
    let { id } = useParams();
    let [quizObject, setQuizObject] = useState({});


    useEffect(() => {
        axios.get(`http://localhost:2000/quizzes/${id}`).then((response) => {
            setQuizObject(response.data)
        })
    },[])
    return (
        <div>
            <h1>{quizObject.quizName}</h1>
        </div>
    )
}
