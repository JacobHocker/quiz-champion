import React,{ useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Helpers/AuthContext';
import axios from 'axios';
import './UserProfileContainer.css';
import UserProfileHeader from '../userProfileHeader/UserProfileHeader';


export default function UserProfileContainer() {
    const { userObj } = useContext(AuthContext);
    
    
    return (
        <div className='user-profile-container'>
            {userObj.data && <UserProfileHeader user={userObj.data} />}
        </div>
    )
}
