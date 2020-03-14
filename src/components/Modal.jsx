import React, { useContext, useState } from 'react'
import Button from './Button'
import { FiltersContext } from '../contexts/filters'
import '../styles/Modal.css'


const Modal = () => {
  // I know the data is coupled tightly to the modal, but I didn't really want to write a 'whole' modal library for this single exercise

  const { showProduct, setShowProduct, cartItems, setCartItems } = useContext(FiltersContext)
  const [shouldShow, setShouldShow] = useState(true)

  const cartHasItem = showProduct && !!cartItems[showProduct.id]

  const close = () => setShouldShow(false)

  const onWrapperClick = e => !e.target.closest('.modal-box') && close()

  const onAnimationEnd = () => {
    if (showProduct && !shouldShow) {
      setShowProduct(null)
      setShouldShow(true)
    }
  }

  const toggleCartItem = e => {
    setCartItems(prevState => {
      const { [showProduct.id]: curProductFromCart, ...rest } = cartHasItem && prevState
      return curProductFromCart ? rest : {...prevState, [showProduct.id]: showProduct}
    })
  }

  return (
    <div
      className={`Modal fade-${shouldShow ? 'in' : 'out'} ${showProduct ? '' : 'hidden'}`}
      onClick={onWrapperClick}
    >
      <div 
        className={`modal-box modal-fade-${shouldShow ? 'in' : 'out'}`}
        onAnimationEnd={onAnimationEnd}
      >
        <div className="modal-exit fa fa-times" onClick={close}></div>
        {showProduct && (
          <div className="modal-content">
            <img src={showProduct.images.large} alt={showProduct.name} />
            <div className="modal-description">
              <h1 className="modal-description--name">{showProduct.name}</h1>
              <div className="modal-description--price">
                <span>${showProduct.price}</span>
                <Button onClick={toggleCartItem}>{cartHasItem ? 'Remove' : 'Add'} <i className="fa fa-shopping-cart"></i></Button>
              </div>
              <div className="modal-description--description">{showProduct.description}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;