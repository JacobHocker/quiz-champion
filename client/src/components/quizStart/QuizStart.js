import React, { useContext } from 'react';
import './QuizStart.css';
import { QuizContext } from '../../Helpers/Contexts';

export default function QuizStart() {
    const { setQuizState } = useContext(QuizContext);

    return (
        <div className='quiz-start-menu'>
            <h1>Click below to begin the quiz!</h1>
            <button onClick={() => {setQuizState("play")}} className='quiz-start-button'>
                Start Quiz
            </button>
        </div>
    )
}
