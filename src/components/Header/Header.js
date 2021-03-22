import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import loginContext from '../../context/loginContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Header.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const {userLogin, productTitle, rootRoute} = useContext(loginContext)
  let navBottomBorder = "";
  if(rootRoute === false) {
    navBottomBorder ="nav--border"
  }
  return (
    <header className="header">
      <div className="container">
        <nav className={`d-flex align-items-center justify-content-between nav ${navBottomBorder}`}>
          <Link to="/" className="logo">BuyTicket</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="collapse navbar-collapse mobile-menu" id="navbarSupportedContent">
          <ul className="mobileMenu">
            <li className="mobileMenu__item">
              <Link to="/"  className="mobileMenu__itemLink">Home</Link>
            </li>
            <li className="mobileMenu__item">
              <Link to={`/destination/${productTitle}`} className="mobileMenu__itemLink">Destination</Link>
            </li>
            <li className="mobileMenu__item">
              <Link to="/blog" className="mobileMenu__itemLink">Blog</Link>
            </li>
            <li className="mobileMenu__item">
              <Link to="/contact" className="mobileMenu__itemLink">Contact</Link>
            </li>
            <li className="mobileMenu__item">
              {userLogin.login ? <button className="mobileMenu__itemLink mobileMenu__itemLink-login">{userLogin.name || userLogin.email}</button> : <Link to="/login" className="mobileMenu__itemLink mobileMenu__itemLink-login">Login</Link>}
            </li>
          </ul>
          </div>
          <ul className="menu">
            <li className="menu__item">
              <Link to="/"  className="menu__itemLink">Home</Link>
            </li>
            <li className="menu__item">
              <Link to={`/destination/${productTitle}`} className="menu__itemLink">Destination</Link>
            </li>
            <li className="menu__item">
              <Link to="/blog" className="menu__itemLink">Blog</Link>
            </li>
            <li className="menu__item">
              <Link to="/contact" className="menu__itemLink">Contact</Link>
            </li>
            <li className="menu__item">
              {userLogin.login ? <button className="menu__itemLink menu__itemLink-login">{userLogin.name || userLogin.email}</button> : <Link to="/login" className="menu__itemLink menu__itemLink-login">Login</Link>}
            </li>
          </ul>
          
        </nav>
      </div>
    </header>
  )
}

export default Header
