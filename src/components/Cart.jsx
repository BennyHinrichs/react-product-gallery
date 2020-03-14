import React, { useContext } from 'react'
import { FiltersContext } from '../contexts/filters';
import '../styles/Cart.css'

const Cart = () => {
  const { cartItems } = useContext(FiltersContext)

  const cartItemValues = Object.values(cartItems)
  const itemCount = cartItemValues.length
  const total = cartItemValues.reduce((acc, cur) => acc + cur.price, 0).toFixed(2)

  return (
    <div className="Cart">
      <i className="fa fa-shopping-cart">
        <span className={`shopping-cart-badge ${itemCount ? 'shopping-cart-badge--has-items' : ''}`}>{cartItemValues.length}</span>
      </i>
      <span>${total}</span>
    </div>
  );
}

export default Cart;