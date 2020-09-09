import React from 'react';
import pranithPic from '../images/pranith.jpg';
import '../styles/About.css';

function About() {
    return (
        <div className='about'>
            <img className='pranith-pic' src={pranithPic} alt='pranith' />
            <h1 className='name'>Pranith Rao</h1>
            <p className='description'>I am a Software Engineer Trainee in MountBlue technologies.</p>
            <p className='description'>I want to become a professional in software engineering.</p>
        </div>
    );
}

export default About;