import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import loginContext from '../../context/loginContext';
import './Header.css';

const Header = () => {
  const {userLogin, productTitle} = useContext(loginContext)
  console.log(userLogin);
  return (
    <header className="header">
      <div className="container">
        <nav className="d-flex align-items-center justify-content-between nav--border">
          <Link to="/" className="logo">BuyTicket</Link>
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
