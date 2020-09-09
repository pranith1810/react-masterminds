import React from 'react';
import {
    Link
} from 'react-router-dom';
import '../styles/HomeComponent.css';

function HomeComponent() {
    return (
        <nav>
            <ul className='links'>
                <li className='link'>
                    <Link to='/play'>Play Game</Link>
                </li>
                <li className='link'>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default HomeComponent;