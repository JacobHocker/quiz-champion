import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../Helpers/AuthContext';
import './QuizDisplayContainer.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProgressBar from './ProgressBar';
import QuizStart from '../quizStart/QuizStart';
import QuizPlay from '../quizPlay/QuizPlay';
import QuizEnd from '../quizEnd/QuizEnd';
import { QuizContext } from '../../Helpers/Contexts';




export default function QuizDisplayContainer() {
    let { userId } = useContext(AuthContext);
    let { id } = useParams();
    let [quizObject, setQuizObject] = useState({});
    let [questionList, setQuestionList] = useState([]);
    let [quizState, setQuizState] = useState("menu");
    let [correctAnswers, setCorrectAnswers] = useState(0);
    let [questionCounter, setQuestionCounter] = useState(0);
    let [quizScore, setQuizScore] = useState(0);
    let [scoreObj, setScoreObj] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:2000/quizzes/${id}`).then((response) => {
            setQuizObject(response.data)
        })
        axios.get(`http://localhost:2000/questions/${id}`).then((response) => {
            setQuestionList(response)
        })
        axios.get(`http://localhost:2000/scores/${id}/${userId}`).then((response) => {
            if(response.data === undefined) {
                setScoreObj([])
            } else {
                setScoreObj(response.data)
            }
            
        })
    },[id, userId])

    
    console.log(scoreObj)
    return (
        <div className='quiz-display-container'>
            {questionList.data && <ProgressBar progress={questionCounter} max={questionList.data.length} />}
            <div className='quiz-play-container'>
                <QuizContext.Provider value={{ 
                    quizState, 
                    setQuizState, 
                    quizScore, 
                    setQuizScore, 
                    questionCounter, 
                    setQuestionCounter,
                    correctAnswers,
                    setCorrectAnswers,
                    scoreObj,
                    setScoreObj
                }}>
                    {quizState === "menu" && <QuizStart quizObject={quizObject} />}
                    {quizState === "play" && <QuizPlay questionList={questionList.data} />}
                    {quizState === "end" && <QuizEnd quizId={id} questionList={questionList.data} />}
                </QuizContext.Provider>
            </div>
        </div>
    )
}
