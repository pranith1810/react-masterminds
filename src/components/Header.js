import React from 'react';
import '../styles/Header.css'
import gamepad from '../images/gamepad.png'

function Header() {
    return (
        <div className="header-container">
            <img className='gamepad' src = {gamepad} alt = 'not visible'/>
            <h1 className ='header'>React Masterminds</h1>
        </div>
    )
}

export default Header;