import React, {useState} from 'react';
import './AdminPostQuestion.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminPostQuestion() {
    let navigate = useNavigate();
    let [questionContent, setQuestionContent] = useState("");
    let [questionImage, setQuestionImage] = useState("");
    let [optionA, setOptionA] = useState("");
    let [optionB, setOptionB] = useState("");
    let [optionC, setOptionC] = useState("");
    let [optionD, setOptionD] = useState("");
    let [answer, setAnswer] = useState("");
    let [quizId, setQuizId] = useState(0);
    
    const addQuestion = () => {
        axios.post("http://localhost:2000/questions", {
            questionContent: questionContent,
            questionImage: questionImage,
            optionA: optionA,
            optionB: optionB,
            optionC: optionC,
            optionD: optionD,
            answer: answer,
            QuizId: quizId
        })
        .then(() => { navigate("/quizzes")})
    }
    return (
        <div className='create-question-container'>
            
                <label>Question Content</label>
                <input 
                autoComplete='off'
                type='text'
                className='post-question-input'
                onChange={(e) => {setQuestionContent(e.target.value)}}
                placeholder='Question...'
                />
                <label>Question Image</label>
                <input 
                autoComplete='off'
                type='text'
                className='post-question-input'
                onChange={(e) => {setQuestionImage(e.target.value)}}
                placeholder='Question Image...'
                />
                <label>optionA</label>
                <input 
                autoComplete='off'
                type='text'
                className='post-question-input'
                onChange={(e) => {setOptionA(e.target.value)}}
                placeholder='Option A...'
                />
                <label>optionB</label>
                <input 
                autoComplete='off'
                type='text'
                className='post-question-input'
                onChange={(e) => {setOptionB(e.target.value)}}
                placeholder='Option B...'
                />
                <label>optionC</label>
                <input 
                autoComplete='off'
                type='text'
                className='post-question-input'
                onChange={(e) => {setOptionC(e.target.value)}}
                placeholder='Option C...'
                />
                <label>optionD</label>
                <input 
                autoComplete='off'
                type='text'
                className='post-question-input'
                onChange={(e) => {setOptionD(e.target.value)}}
                placeholder='Option D...'
                />
                <label>Answer</label>
                <input 
                autoComplete='off'
                type='text'
                className='post-question-input'
                onChange={(e) => {setAnswer(e.target.value)}}
                placeholder='Ex: A,B,C,D'
                />
                <label>QuizID</label>
                <input 
                type='number'
                className='post-question-input'
                onChange={(e) => {setQuizId(e.target.value)}}
                />
                <button onClick={addQuestion}>Create Question</button>
            
        </div>
    )
}
