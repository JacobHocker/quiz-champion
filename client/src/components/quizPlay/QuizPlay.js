import React, {useState, useContext} from 'react';
import './QuizPlay.css';
import { QuizContext } from '../../Helpers/Contexts';

export default function QuizPlay({ questionList }) {
    const { score, setScore, setQuizState } = useContext(QuizContext);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const finishQuiz = () => {
        if(questionList[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setQuizState("end");
    }
    const nextQuestion = () => {
        if(questionList[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    }
    return (
        <div className='quiz-play-container'>
            <div className='quiz-play-question'>
                <h1>{questionList[currentQuestion].questionContent}</h1>
                {questionList[currentQuestion].questionImage === "N/A" ?
                <div></div> :
                <img src={questionList[currentQuestion].questionImage} alt='question-image-prompt' />}
            </div>
            <div className='quiz-play-choices'>
                <button onClick={() => setOptionChosen("A")} className='quiz-option-button'>
                    {questionList[currentQuestion].optionA}
                </button>
                <button onClick={() => setOptionChosen("B")} className='quiz-option-button'>
                    {questionList[currentQuestion].optionB}
                </button>
                <button onClick={() => setOptionChosen("C")} className='quiz-option-button'>
                    {questionList[currentQuestion].optionC}
                </button>
                <button onClick={() => setOptionChosen("D")} className='quiz-option-button'>
                    {questionList[currentQuestion].optionD}
                </button>
            </div>
            <div className='quiz-play-next-container'>
                {currentQuestion === questionList.length - 1 ?
                <button onClick={finishQuiz}>Finish Quiz</button>
                :
                <button onClick={nextQuestion}>Next Question</button>}
            </div>
        </div>
    )
}
