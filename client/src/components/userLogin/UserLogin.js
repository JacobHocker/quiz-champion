import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function UserLogin({ setUser }) {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const goToRegister = () => {
        navigate('/registration')
    }

    const loginUser = () => {
        const data = { username: username, password: password }
        axios.post("http://localhost:2000/auth/login", data).then((response) => {
            console.log(response.data)
        })
    }
    return (
        <div className='user-login-container'>
            <div className='user-login-form'>
                <input 
                type='text' 
                placeholder='Username' 
                onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                type='password' 
                placeholder='Password' 
                onChange={(e) => setPassword(e.target.value)}
                />

                <button className='login-submit-btn' onClick={loginUser}>Login Account</button>
            </div>

            <div className='to-register-btn-container'>
                <h3>Don't have an account?</h3>
                <button onClick={goToRegister} className='to-register-btn'>Register An Account</button>
            </div>
        </div>
    )
}
