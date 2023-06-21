import React from 'react';
import "./styles/header.css"
import { NavLink } from "react-router-dom";
import "../Components/styles/header.css"


const Header = () => {
    return (
        <header className='header'>
            <div className="logo">
                <img src="../images/kasa.png" alt="logo kasa" />
            </div>

            <nav>
            <ul>
                <NavLink to ="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>Acceuil</li>
                </NavLink>
                <NavLink to="/about"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li className='propos'>A propos</li>
                </NavLink>
            </ul>
        </nav>
        </header>
    );
};

export default Header;