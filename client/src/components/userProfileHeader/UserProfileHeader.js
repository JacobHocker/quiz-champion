import React from 'react'
import './UserProfileHeader.css';

export default function UserProfileHeader({ user }) {
    return (
        <div className='user-profile-header' style={{
            backgroundImage: `url(${user.avatar})`,
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: "100%",
            boxShadow: "inset 0 0 0 1000px rgba(52.5, 73.5, 115.5,.85)"
        }}>
            <div className='user-profile-title'>
                <h1>{user.username}</h1>
                <h1>Total Crowns: {user.totalCrown}</h1>
                
            </div>
        </div>
    )
}
