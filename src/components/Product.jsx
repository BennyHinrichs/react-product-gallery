import React, { useContext } from 'react'
import { FiltersContext } from '../contexts/filters';

const Product = (props) => {
  const { name, price, id, images: { medium } } = props
  const { setShowProduct, cartItems } = useContext(FiltersContext)
  
  const isSelected = !!cartItems[id]

  return (
    <div className={`Product ${isSelected ? 'selected' : ''}`} onClick={() => setShowProduct(props)}>
      <img className="product-img" src={medium} alt={name} />
      <div className="product-name">{name}</div>
      <div className="product-price">${price}{isSelected ? <i className="fa fa-shopping-cart"></i> : ''}</div>
    </div>
  );
}

export default React.memo(Product);