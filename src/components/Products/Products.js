import React, { useEffect, useState } from 'react'
import './Products.css';
import SingleProduct from './SingleProduct/SingleProduct';
import { productData } from '../../fakeData/fakeData';

const Products = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    setProducts(productData)
  }, [])

  return (
    <div className="products">
      <div className="container">
      <div className="row">
      {products && products.map(product => {
        return (
          <SingleProduct 
            key={product.id}
            icon={product.icon}
            title={product.title} />
        )
      })}
    </div>
    </div>
    </div>
  )
}

export default Products
