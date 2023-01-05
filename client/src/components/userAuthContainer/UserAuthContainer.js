import React,{ useState } from 'react'
import UserLogin from '../userLogin/UserLogin';
import UserRegistration from '../userRegistration/UserRegistration';

export default function UserAuthContainer() {
    const [showLogin, setShowLogin] = useState(true);


    return (
        <div className='user-auth-container'>
            <div className='user-auth-header'>
                <h1>Quiz Champ</h1>
            </div>
            <div>
                {showLogin ? 
                <UserLogin setShowLogin={setShowLogin}/> 
                :
                <UserRegistration setShowLogin={setShowLogin}/>
                }
            </div>
        </div>
    )
}
