import React, { useState } from 'react';
import './headerNav.css';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png";

const HeaderNav = () => {
    const [lang, setLang] = useState('🇺🇸 English');
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isCatOpen, setIsCatOpen] = useState(false);

    // toggle dropdowns
    const toggleLangMenu = () => setIsLangOpen(prev => !prev);
    const toggleCatMenu = () => setIsCatOpen(prev => !prev);

    // select a language
    const handleLangClick = (selectedLang) => {
        setLang(selectedLang);
        setIsLangOpen(false);
    };

    return (
        <div id='top-header'>

            {/* --- Top Container --- */}
            <div className='main-container'>
                <button onClick={toggleLangMenu} className='dropp-btn'>
                    <span>{lang}</span> Lang
                </button>

                <ul className={`drop-menu-lang ${isLangOpen ? 'active' : ''}`}>
                    <li onClick={() => handleLangClick('🇺🇸 English')}>🇺🇸 English</li>
                    <li onClick={() => handleLangClick('🇸🇦 Arabic')}>🇸🇦 Arabic</li>
                    <li onClick={() => handleLangClick('🇫🇷 French')}>🇫🇷 French</li>
                    <li onClick={() => handleLangClick('🇿🇦 Afrikaans')}>🇿🇦 Afrikaans</li>
                </ul>

                <div className="title">
                    <h5>Shop Now and get 10% Discount!</h5>
                </div>
            </div>

            {/* --- Main Header --- */}
            <div className="main-header">
                <div className="logo-img">
                    {/* <img src={logo} alt="Logo" /> */}
                    <span>Rüya</span>
                </div>

                <ul className='nav-links'>
                    <NavLink to='/'><li>Home</li></NavLink>

                    <li>
                        <button onClick={toggleCatMenu} className='dropp-btn-cat'>
                            Categories <span>▼</span>
                        </button>
                        <ul className={`nav-drop-menu-cat ${isCatOpen ? 'active' : ''}`}>
                            <li><NavLink to="/shop#jewelery">Jewelery</NavLink></li>
                            <li><NavLink to="/shop#silver">Silver</NavLink></li>
                            <li><NavLink to="/shop#dress">Dress</NavLink></li>
                            <li><NavLink to="/shop#access">Accessories</NavLink></li>

                        </ul>
                    </li>

                    <NavLink to='/contact'><li>Contact</li></NavLink>
                    <NavLink to='/about'><li>About</li></NavLink>
                </ul>

                <button className='shop-now-btn'>Shop Now!</button>
            </div>

        </div>
    );
};

export default HeaderNav;
