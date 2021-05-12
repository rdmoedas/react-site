import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <nav>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/sobre'>Sobre</a></li>
                <li><a href='/portifolio'>Portifolio</a></li>
            </ul>
        </nav>
    )
}

export default Nav;