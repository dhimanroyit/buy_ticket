import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SingleProduct.css';
import { Link } from 'react-router-dom';
import loginContext from '../../../context/loginContext';

const SingleProduct = ({icon, title}) => {
  const {setProductTitle} = useContext(loginContext);
  const getTitle = () => {
    setProductTitle(title)
  }
  return (
    <div className="col-md-3">
        <Link onClick={getTitle} to={`/destination/${title}`}>
          <div className="product">
            <div className="product__media">
              <FontAwesomeIcon icon={icon} />
            </div>
            <h2 className="product__title">{title}</h2>
          </div>
        </Link>
    </div>
  )
}

export default SingleProduct
