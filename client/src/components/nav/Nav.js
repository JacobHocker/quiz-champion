import React, { useEffect, useState, useContext } from 'react';
import './Nav.css';
import { NavLink as Link } from 'react-router-dom';
import {AuthContext} from '../../Helpers/AuthContext';
import axios from 'axios';
import LogoSm from '../../assets/images/logos/quiz-champ-sm.png';

export default function Nav() {
    const { userId, setAuthState } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:2000/auth/userInfo/${userId}`)
        .then((response) => {
            setUserInfo(response)
        })
    }, [])

    const logout = () => {
        localStorage.removeItem("accessToken")
        setAuthState({ username: "", id: 0, status: false })
    };
    
    return (
        <div className='nav-bar-container'>
            <div className='nav-logo-section'>
                <Link to='/'>
                    <img src={LogoSm} alt='quiz-champ-sm' className='logo-sm-nav' />
                </Link>
            </div>
            <Link to='/quizzes'>
                <h3>Quizzes</h3>
            </Link>
            <Link to='/admin-post-quiz'>
                <h3>Admin Post Quiz</h3>
            </Link>
            <Link to='/admin-post-question'>
                <h3>Admin Post Question</h3>
            </Link>
            
            <div className='user-nav-container'>
                {userInfo.data && <h3>{userInfo.data.username}</h3>}
                {userInfo.data && <img src={userInfo.data.avatar} className='nav-avatar' alt={userInfo.data.username} />}
                <button onClick={logout}>Logout</button>
            </div>
            
        </div>
    )
}
