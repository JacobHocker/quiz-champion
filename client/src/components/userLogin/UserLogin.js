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
                localStorage.setItem("accessToken", response.data.token);
                setAuthState({ 
                    username: response.data.username, 
                    id: response.data.id, 
                    status: true
                });
                navigate("/");
            }
        })
        
    }
    return (
        <div className='user-login-container'>
            <div className='user-login-form'>
                <input 
                className='auth-input'
                type='text' 
                placeholder='Username' 
                onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                className='auth-input'
                type='password' 
                placeholder='Password' 
                onChange={(e) => setPassword(e.target.value)}
                />
                <button className='auth-btn' onClick={loginUser}>Login Account</button>
            </div>
            
            <div className='to-register-btn-container'>
                <h1>Don't have an account?</h1>
                <button onClick={() => setShowLogin(false)} className='auth-btn'>Register An Account</button>
            </div>
        </div>
    )
}
