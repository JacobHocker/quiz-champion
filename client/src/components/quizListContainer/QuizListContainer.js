import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
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
    
    const toQuizRules = () => {
        navigate('/rules-rewards-info')
    }

    
    return (
        <div className='quiz-list-page'>
            <div className='quiz-list-header'>
                <h1>Select a quiz to begin!</h1>
                <button onClick={toQuizRules} className='blue-btn'>For More Info See Rules & Rewards</button>
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
                            <div className='difficulty-display'>
                                <h2>Difficulty:</h2>
                            </div>
                            {
                                val.quizDifficulty === "Easy" ?
                                <div className='star-container'>
                                    <BsStarFill className='easy-star'/>
                                    <BsStar className='easy-star'/>
                                    <BsStar className='easy-star'/>
                                    <BsStar className='easy-star'/>
                                    <BsStar className='easy-star'/>
                                </div>
                                :
                                val.quizDifficulty === "Medium" ?
                                <div className='star-container'>
                                    <BsStarFill className='medium-star'/>
                                    <BsStarFill className='medium-star'/>
                                    <BsStarHalf className='medium-star'/>
                                    <BsStar className='medium-star'/>
                                    <BsStar className='medium-star'/>
                                </div>
                                :
                                val.quizDifficulty === "Hard" ?
                                <div className='star-container'>
                                    <BsStarFill className='hard-star'/>
                                    <BsStarFill className='hard-star'/>
                                    <BsStarFill className='hard-star'/>
                                    <BsStarFill className='hard-star'/>
                                    <BsStarFill className='hard-star'/>
                                </div>
                                :
                                <div></div>
                            }
                        </div>
                        
                        <div className='quiz-card-footer'>
                            <p>Quiz ID #: {val.id}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}
