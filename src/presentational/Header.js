import React from 'react';
import './Header.scss';
import logo from '../images/logo.png';
import miniAva from '../images/artyom-timchenko-small.png';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <img src={logo} alt="logo" className="logo" title="Site logo"/>
                <h1>Artyom Timchenko portflio app</h1>
                <div className="user-short-info">
                    <span className="userName">Artyom</span>
                    <img src={miniAva} alt="Artyom Timchenko avatar" className="avatar" title="Artyom Timchenko avatar"/>
                </div>
            </div>
        </div>
    );
};

export default Header;