import './App.css';
import {Routes, Route} from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import AdminPostQuizzes from './components/adminPostQuizzes/AdminPostQuizzes';
import QuizListContainer from './components/quizListContainer/QuizListContainer';
import QuizDisplayContainer from './components/quizDisplayContainer/QuizDisplayContainer';
import AdminPostQuestion from './components/adminPostQuestion/AdminPostQuestion';
import UserRegistration from './components/userRegistration/UserRegistration';
import UserLogin from './components/userLogin/UserLogin';


export default function App() {
  const [user, setUser] = useState(null);


  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<QuizListContainer />} path='quizzes' />
        <Route element={<QuizDisplayContainer />} path='quiz/:id' />
        <Route element={<UserRegistration />} path='registration' />
        <Route element={<UserLogin setUser={setUser} />} path='login' />
        <Route element={<AdminPostQuizzes />} path='admin-post-quiz' />
        <Route element={<AdminPostQuestion />} path='admin-post-question' />
      </Routes>
    </div>
  )
}




