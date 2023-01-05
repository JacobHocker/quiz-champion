import './App.css';
import {Routes, Route} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import AdminPostQuizzes from './components/adminPostQuizzes/AdminPostQuizzes';
import QuizListContainer from './components/quizListContainer/QuizListContainer';
import QuizDisplayContainer from './components/quizDisplayContainer/QuizDisplayContainer';
import AdminPostQuestion from './components/adminPostQuestion/AdminPostQuestion';
import UserRegistration from './components/userRegistration/UserRegistration';
import UserLogin from './components/userLogin/UserLogin';
import axios from 'axios';
import { AuthContext } from './Helpers/AuthContext';
import UserAuthContainer from './components/userAuthContainer/UserAuthContainer';


export default function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });
  
  
  

  useEffect(() => {
    axios.get("http://localhost:2000/auth/user", { headers: {
      accessToken: localStorage.getItem("accessToken")
    },
  })
  .then((response) => {
      if (response.data.error) {
        setAuthState({ ...authState, status: false })
      } else {
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        })
        
      }
    })
  }, [])
  
  const userId = authState.id;
  
  return (
    <div className='App'>
      <AuthContext.Provider value={{ authState, setAuthState, userId }}>
        
        { authState.status === false ? 
            <UserAuthContainer />
          :
          <div>
            <Nav />
            <Routes>
              <Route element={<Home />} path='/' />
              <Route element={<QuizListContainer />} path='quizzes' />
              <Route element={<QuizDisplayContainer />} path='quiz/:id' />
              <Route element={<UserRegistration />} path='registration' />
              <Route element={<UserLogin  />} path='login' />
              <Route element={<AdminPostQuizzes />} path='admin-post-quiz' />
              <Route element={<AdminPostQuestion />} path='admin-post-question' />
            </Routes>
          </div>
        }
      </AuthContext.Provider>
    </div>
  )
}




