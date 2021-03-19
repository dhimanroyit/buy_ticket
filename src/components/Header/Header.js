import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="d-flex align-items-center justify-content-between py-4">
          <Link to="/" className="logo">BuyTicket</Link>
          <ul className="menu">
            <li className="menu__item">
              <Link to="/"  className="menu__itemLink">Home</Link>
            </li>
            <li className="menu__item">
              <Link to="/destination" className="menu__itemLink">Destination</Link>
            </li>
            <li className="menu__item">
              <Link to="/blog" className="menu__itemLink">Blog</Link>
            </li>
            <li className="menu__item">
              <Link to="/contact" className="menu__itemLink">Contact</Link>
            </li>
            <li className="menu__item">
              <Link to="/login" className="menu__itemLink menu__itemLink-login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
