import React, { useState } from 'react'
import './UserRegistration.css';
import axios from 'axios';
import AvatarModal from './AvatarModal';

export default function UserRegistration({ setShowLogin }) {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [avatar, setAvatar] = useState("");
    let [bio, setBio] = useState("");
    let [country, setCountry] = useState("");
    let [bronzeCrown, setBronzeCrown] = useState(0);
    let [silverCrown, setSilverCrown] = useState(0);
    let [goldCrown, setGoldCrown] = useState(0);
    let [platinumCrown, setPlatinumCrown] = useState(0);
    let [showModal, setShowModal] = useState(false)

    
    const countries = [
    {
        id: 0,
        countryName: "Select Your Country...",
        countryImage: "N/A",
    }, 
    {
        id: 1,
        countryName: "United States",
        countryImage: "https://nosopatches.com/wp-content/uploads/usa-flag.png",
    }, 
    {
        id: 2,
        countryName: "Canada",
        countryImage: "https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/canada-flag-sticker-5804-21543-550x550.png"
    }, 
    {
        id: 3,
        countryName: "Mexico",
        countryImage: "https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/mexico-flag-sticker-5879-21415-550x550.png",
    }
    ]
    const registerUser = () => {
        axios.post("http://localhost:2000/auth", {
            username: username,
            password: password,
            avatar: avatar,
            bio: bio,
            country: country,
            bronzeCrown: bronzeCrown,
            silverCrown: silverCrown,
            goldCrown: goldCrown,
            platinumCrown: platinumCrown
        })
        .then(() => { 
            setBronzeCrown(0)
            setSilverCrown(0)
            setGoldCrown(0)
            setPlatinumCrown(0)
            setShowLogin(true)
        })
    }
    
    return (
            <div className='user-registration-container'>
                { showModal === false ? 
                <div>
                    <div className='user-register-form'>
                        <div className='reg-input-container'>
                            <label>Username:</label>
                            <input 
                            autoComplete='off'
                            type='text'
                            className='auth-input'
                            onChange={(e) => {setUsername(e.target.value)}}
                            placeholder='Ex: {John123..}'
                            />
                        </div>
                        <div className='reg-input-container'>
                            <label>Password:</label>
                            <input 
                            autoComplete='off'
                            type='password'
                            className='auth-input'
                            onChange={(e) => {setPassword(e.target.value)}}
                            placeholder='Ex: {Password123..}'
                            />
                        </div>
                        
                        <div className='reg-input-container'>
                            <label>Bio:</label>
                            <textarea 
                            rows={7}
                            type='text'
                            className='auth-input'
                            onChange={(e) => {setBio(e.target.value)}}
                            placeholder='Ex: {I enjoy reading..}'
                            />
                        </div>
                        <div className='reg-input-container'>
                            <label>Select Country:</label>
                            <select 
                            name='country'
                            className='create-user-select'
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            >
                                {countries.map((country) => (
                                    <option
                                    key={country.id}
                                    className='create-user-option'
                                    value={country.countryImage}>
                                        {country.countryName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='reg-input-container'>
                            <label>Choose Avatar:</label>
                            <button onClick={() => { setShowModal(true)}} className='avatar-auth-btn'>
                                Avatar Select...
                            </button>
                        </div>
                        <div className='register-account-btn-container'>
                            <button onClick={registerUser} className='auth-btn'>
                                Register Your Account
                            </button>
                        </div>
                    </div>
                    <div className='to-login-btn-container'>
                        <h1>Already have an account?</h1>
                        <button onClick={() => setShowLogin(true)} className='auth-btn'>
                            Login Account
                        </button>
                    </div>
                </div>
                :
                <AvatarModal setShowModal={setShowModal} setAvatar={setAvatar} avatar={avatar}/>
                }
                
            </div>
            
        
        
    )
}
