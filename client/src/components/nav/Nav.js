import React from 'react';
import './Nav.css';
import { NavLink as Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className='nav-bar-container'>
            <Link to='/'>
                <h3>Home</h3>
            </Link>
            <Link to='/quizzes'>
                <h3>Quizzes</h3>
            </Link>
            <Link to='/admin-post-quiz'>
                <h3>Admin Post Quiz</h3>
            </Link>
            <Link to='/admin-post-question'>
                <h3>Admin Post Question</h3>
            </Link>
        </div>
    )
}
