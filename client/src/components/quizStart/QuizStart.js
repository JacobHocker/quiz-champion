import React, { useContext } from 'react';
import './QuizStart.css';
import { QuizContext } from '../../Helpers/Contexts';

export default function QuizStart({ quizObject }) {
    const { setQuizState, questionCounter, setQuestionCounter } = useContext(QuizContext);

    const startQuiz = () => {
        setQuizState("play")
        setQuestionCounter(questionCounter + 1)
    }
    return (
        <div className='quiz-start-menu'>
            <div className='quiz-display-header'>
                <h1>{quizObject.quizName}</h1>
                <img src={quizObject.quizImage} alt={quizObject.quizName} className='quiz-display-image'/>
                <h3>Difficulty: {quizObject.quizDifficulty}</h3>
                <p>Description: {quizObject.quizDescription}</p>
            </div>
            <h1>Click below to begin the quiz!</h1>
            <button onClick={startQuiz} className='quiz-start-button'>
                Start Quiz
            </button>
            
        </div>
    )
}
