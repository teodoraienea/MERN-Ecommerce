import React, { useState } from 'react';
import './Headerstyle.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="menu-btn" onClick={toggleMenu}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <div className="shop-name">
        <h1>My E-Commerce Shop</h1>
      </div>
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
