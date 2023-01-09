import React from 'react';
import './AvatarModal.css';


export default function AvatarModal({ avatar, setShowModal, setAvatar }) {
    

    const avatarList = [
        {
            id: 0,
            avatarName: "Basic",
            avatarAddress: "https://i.etsystatic.com/17163755/r/il/725138/2206699948/il_570xN.2206699948_kwnk.jpg",
        }
    ]
    
    
    return (
        <div className='avatar-modal'>
            <div className='avatar-modal-content'>
                <div className='avatar-modal-header'>
                    <h1 className='avatar-modal-title'>Choose Avatar</h1>
                </div>
                <div className='avatar-modal-body'>
                    {avatarList.map((avi) => (
                        <img 
                        key={avi.id} 
                        src={avi.avatarAddress} 
                        alt={avi.avatarName} 
                        className={avatar === avi.avatarAddress ? 'selected-reg-avatar' : 'reg-avatar'}
                        onClick={() => {setAvatar(avi.avatarAddress)}}
                        />
                    ))}
                </div>
                <div className='avatar-modal-footer'>
                    <button className='avatar-modal-close' onClick={() => {setShowModal(false)}}>Close</button>
                </div>
            </div>
        </div>
    )
}
