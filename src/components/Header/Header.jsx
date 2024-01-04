// src/components/Header/Header.jsx
import React from 'react';
import './Header.scss';
import backgroundImage from '../../assets/header-background.png';

const Header = () => {
    return (
        <header className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className="header__title">
                El secreto<br />
                de tu cocina
            </h1>
        </header>
    );
};

export default Header;
