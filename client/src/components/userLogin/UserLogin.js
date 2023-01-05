import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserLogin.css';
import { AuthContext } from '../../Helpers/AuthContext';


export default function UserLogin({ setShowLogin }) {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthState } = useContext(AuthContext);

    

    const loginUser = () => {
        const data = { username: username, password: password }
        axios.post("http://localhost:2000/auth/login", data).then((response) => {
            if (response.data.error) {
                alert(response.data.error)
            } else {
                localStorage.setItem("accessToken", response.data);
                setAuthState(true);
                navigate("/");
            }
        })
        
    }
    return (
        <div className='user-login-container'>
            <div className='user-login-form'>
                <input 
                className='user-login-input'
                type='text' 
                placeholder='Username' 
                onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                className='user-login-input'
                type='password' 
                placeholder='Password' 
                onChange={(e) => setPassword(e.target.value)}
                />

                <button className='login-submit-btn' onClick={loginUser}>Login Account</button>
            </div>

            <div className='to-register-btn-container'>
                <h3>Don't have an account?</h3>
                <button onClick={() => setShowLogin(false)} className='to-register-btn'>Register An Account</button>
            </div>
        </div>
    )
}
