import React,{ useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Helpers/AuthContext';
import axios from 'axios';
import './UserProfileContainer.css';
import UserProfileHeader from '../userProfileHeader/UserProfileHeader';


export default function UserProfileContainer() {
    const { userId } = useContext(AuthContext);
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:2000/auth/userInfo/${userId}`)
        .then((response) => {
            setUser(response)
        })
    }, [userId])
    
    return (
        <div className='user-profile-container'>
            {user.data && <UserProfileHeader user={user.data} />}
        </div>
    )
}
