import React from 'react';

const NavBar = props => {
    return (
        <header className="main-header">
            <a className="main-header__brand" href="/">RICHARD DURAZO</a>
            <nav className="main-nav">
                <ul className="main-nav__items">
                    <li className="main-nav__item">
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
