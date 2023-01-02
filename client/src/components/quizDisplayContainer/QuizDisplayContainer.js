import React, { useEffect, useState } from 'react';
import './QuizDisplayContainer.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProgressBar from './ProgressBar';
import QuizStart from '../quizStart/QuizStart';
import QuizPlay from '../quizPlay/QuizPlay';
import QuizEnd from '../quizEnd/QuizEnd';
import { QuizContext } from '../../Helpers/Contexts';




export default function QuizDisplayContainer() {
    let { id } = useParams();
    let [quizObject, setQuizObject] = useState({});
    let [questionList, setQuestionList] = useState([]);
    let [quizState, setQuizState] = useState("menu");
    let [score, setScore] = useState(0);
    let [questionCounter, setQuestionCounter] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:2000/quizzes/${id}`).then((response) => {
            setQuizObject(response.data)
        })
        axios.get(`http://localhost:2000/questions/${id}`).then((response) => {
            setQuestionList(response)
        })
    },[id])
    return (
        <div className='quiz-display-container'>
            {questionList.data && <ProgressBar progress={questionCounter} max={questionList.data.length} />}
            <div className='quiz-play-container'>
                <QuizContext.Provider value={{ quizState, setQuizState, score, setScore, questionCounter, setQuestionCounter}}>
                    {quizState === "menu" && <QuizStart quizObject={quizObject} />}
                    {quizState === "play" && <QuizPlay questionList={questionList.data} />}
                    {quizState === "end" && <QuizEnd questionList={questionList.data} />}
                </QuizContext.Provider>
            </div>
        </div>
    )
}
