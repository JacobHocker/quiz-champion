import React, { useContext, useState, useEffect } from 'react';
import './QuizMenu.css'
import { QuizContext } from '../../Helpers/Contexts';
import { AuthContext } from '../../Helpers/AuthContext';



export default function QuizMenu({ quizObject, scoreArr }) {
    const [highScore, setHighScore] = useState(0);
    const [highCrown, setHighCrowns] = useState(0);
    const { username } = useContext(AuthContext);
    const {  setQuizState, questionCounter, setQuestionCounter } = useContext(QuizContext);

    const startQuiz = () => {
        setQuizState("play")
        setQuestionCounter(questionCounter + 1)
    }
    
    useEffect(() => {
        if (scoreArr.data) {
            if(scoreArr.data.length === 1) {
                setHighScore(scoreArr.data[0].quizScore)
                setHighCrowns(scoreArr.data[0].crownAmount)
            } else if (scoreArr.data.length === 2) {
                setHighScore(Math.max(...scoreArr.data.map((val) => val.quizScore)))
                setHighCrowns(Math.max(...scoreArr.data.map((val) => val.crownAmount)))
            }
            
        }
        
    }, [ scoreArr.data ])
    

    
    return (
        <div className='quiz-start-menu'>
            <div className='quiz-display-header'>
                <h1>{quizObject.quizName}</h1>
                <img src={quizObject.quizImage} alt={quizObject.quizName} className='quiz-display-image'/>
                {scoreArr.data && <h1>Quiz Attempts Remaining: {scoreArr.data.length} / 2</h1>}
                <h3>Difficulty: {quizObject.quizDifficulty}</h3>
                <p>Description: {quizObject.quizDescription}</p>
            </div>
            <div>
                
                {scoreArr.data && 
                scoreArr.data.length === 0 ?
                <div></div>
                : 
                <div>
                    <h1>{username}'s High Scores:</h1>
                    <h1>Highest Score: {highScore}</h1>
                    <h1>Total Crowns Earned: {highCrown}</h1>
                </div>
                }
            </div> 
            
            { scoreArr.data && 
                scoreArr.data.length === 2 ?
                <div>
                    <h1>Max Amount of quiz attemps have been reached!</h1>
                </div>
                :
                <div>
                    <h1>Click below to begin the quiz!</h1>
                    <button onClick={startQuiz} className='quiz-start-button'>
                        Start Quiz
                    </button>
                </div>
            }
            
        </div>
    )
}
