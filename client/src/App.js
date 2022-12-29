import './App.css';
import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import AdminPostQuizzes from './components/adminPostQuizzes/AdminPostQuizzes';


export default function App() {
  


  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<AdminPostQuizzes />} path='admin-post-quiz' />
      </Routes>
    </div>
  )
}




