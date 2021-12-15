import React, { useState } from 'react'
import './header.css';
import Web from './web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <div className='header'>
            <div className='logo'>Portfolio</div>
            <div className='menu'>
                <div className='web-menu'>
                    <Web />
                </div>
            </div>
        </div>
    )
}

export default Header
