import React from 'react';
import logo from '../../../../src/images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header" >

            <img src={logo} alt="" />

            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">OrderRevew</a>
                <a href="/inventory"> ManegInventory</a>
            </nav>

        </div>
    );
};

export default Header;