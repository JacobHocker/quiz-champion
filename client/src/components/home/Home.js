import React from 'react'
import './Home.css';
import LogoLg from '../../assets/images/logos/quiz-champ-lg.png';

export default function Home() {
    return (
        <div className='home-container'>
            <div className='home-container-header'>
                <img src={LogoLg} alt='quiz-logo' className='logo-lg-home' />
            </div>
            <div className='home-container-body'>
                <h1>Filler Area</h1>
            </div>
        </div>
    )
}
