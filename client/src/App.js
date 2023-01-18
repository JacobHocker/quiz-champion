import './App.css';
import {Routes, Route} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import QuizListContainer from './components/quizListContainer/QuizListContainer';
import QuizDisplayContainer from './components/quizDisplayContainer/QuizDisplayContainer';
import UserRegistration from './components/userRegistration/UserRegistration';
import UserLogin from './components/userLogin/UserLogin';
import axios from 'axios';
import { AuthContext } from './Helpers/AuthContext';
import UserAuthContainer from './components/userAuthContainer/UserAuthContainer';
import UserProfileContainer from './components/userProfileContainer/UserProfileContainer';
import AdminContainer from './components/adminContainer/AdminContainer';



export default function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });
  const [userObj, setUserObj] = useState({})
  
  
  

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
    axios.get(`http://localhost:2000/auth/userInfo/${authState.id}`)
            .then ( (response) => {
                setUserObj(response)
        })
  }, [authState.id, userObj])
  
  const userId = authState.id;
  const username = authState.username;
  return (
    <div className='App'>
      <AuthContext.Provider value={{ authState, setAuthState, userId, username, userObj }}>
        
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
              <Route element={<UserProfileContainer />} path='profile' />
              <Route element={<AdminContainer />} path='admin' />
            </Routes>
          </div>
        }
      </AuthContext.Provider>
    </div>
  )
}




