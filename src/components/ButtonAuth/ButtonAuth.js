import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ButtonAuth.css';

const ButtonAuth = ({icon, children, clicked}) => {
  return (
    <button onClick={clicked} className="button__auth">
      <span className="button__authIcon"><FontAwesomeIcon icon={icon} /></span>
      {children}
    </button>
  )
}

export default ButtonAuth
