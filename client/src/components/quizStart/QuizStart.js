import React, { useContext } from 'react';
import { QuizContext } from '../../Helpers/Contexts';

export default function QuizStart() {
    const { setQuizState } = useContext(QuizContext);

    return (
        <div className='quiz-start-menu'>
            <button onClick={() => {setQuizState("play")}}>Start Quiz</button>
        </div>
    )
}
