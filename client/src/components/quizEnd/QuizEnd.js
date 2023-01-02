import React, { useContext } from 'react';
import { QuizContext } from '../../Helpers/Contexts';


export default function QuizEnd({ questionList }) {

    const { score } = useContext(QuizContext);

    return (
        <div className='quiz-end-container'>
            <h1>Quiz Completed</h1>
            <h1>{score} / {questionList.length}</h1>
        </div>
    )
}
