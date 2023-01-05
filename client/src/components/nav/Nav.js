import React, { useContext } from 'react';
import './Nav.css';
import { NavLink as Link } from 'react-router-dom';
import {AuthContext} from '../../Helpers/AuthContext'


export default function Nav() {
    const { userInfo } = useContext(AuthContext);

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
            <h3>{userInfo.username}</h3>
        </div>
    )
}
