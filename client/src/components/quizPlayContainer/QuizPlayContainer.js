import React, { useState } from 'react'
import QuizStart from '../quizStart/QuizStart';
import QuizPlay from '../quizPlay/QuizPlay';
import QuizEnd from '../quizEnd/QuizEnd';
import { QuizContext } from '../../Helpers/Contexts';

export default function QuizPlayContainer({ questionList }) {
    let [quizState, setQuizState] = useState("menu");
    let [score, setScore] = useState(0);

    return (
        <div className='quiz-play-container'>
            <QuizContext.Provider value={{ quizState, setQuizState, score, setScore}}>
                {quizState === "menu" && <QuizStart />}
                {quizState === "play" && <QuizPlay questionList={questionList.data} />}
                {quizState === "end" && <QuizEnd questionList={questionList.data} />}
            </QuizContext.Provider>
        </div>
    )
}
