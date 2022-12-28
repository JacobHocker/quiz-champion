import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [listOfQuizzes, setListOfQuizzes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2000/quizzes").then((response) => {
      setListOfQuizzes(response.data)
    })
  }, [])


  return (
    <div className='App'>
      {listOfQuizzes.map((val, key) => (
        <div key={val.id}>
          <h1>{val.quizName}</h1>
        </div>
      ))}
    </div>
  )
}




