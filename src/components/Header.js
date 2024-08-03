import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import './Headerstyle.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    try {
      const loggedInUser = localStorage.getItem('user');
      console.log("Stored user data:", loggedInUser, );

      if (loggedInUser) {
        const parsedUser = JSON.parse(loggedInUser);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error("Failed to parse user data:", error);
      // Optionally clear corrupted data
      localStorage.removeItem('user');
    }
  }, []);

  const getInitials = (username) => {
    if (!username) return '';
    const names = username.split(' ');
    const initials = names.map((n) => n[0]).join('');
    return initials.toUpperCase();
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="right-menu">
        <ul>
          <li><Link to="/favourites">Favourites</Link></li>
          <li><Link to="/mychart">My Chart</Link></li>
          <li>
            {user ? (
              <div className="user-initials">{getInitials(user.name)}</div>
            ) : (
              <FaUser />
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
