import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserFriends} from '@fortawesome/free-solid-svg-icons'
import './ResultItem.css';

const ResultItem = ({title, icon, people, price}) => {
  return (
    <>
      <div className="resultItem">
        <div className="resultItemIcon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h3 className="resultItemLabel">{title}</h3>
        <div className="resultItemPeople">
          <FontAwesomeIcon className="mr-1" icon={faUserFriends} />
          {people}
        </div>
        <div className="resultItemPrice">${price}</div>
      </div>
    </>
  )
}

export default ResultItem
