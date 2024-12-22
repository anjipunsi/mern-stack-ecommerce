// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom'; // For routing between pages (like Home, Shop, etc.)
import './Header.css'; // You can create a separate CSS file to style this header

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">My E-Commerce</Link> {/* Replace with your brand name */}
      </div>

      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link> {/* Replace with actual shop page route */}
          </li>
          <li>
            <Link to="/cart">Cart</Link> {/* Replace with actual cart page route */}
          </li>
          <li>
            <Link to="/about">About</Link> {/* Replace with actual about page route */}
          </li>
        </ul>
      </nav>

      <div className="auth-links">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
