import React from 'react'
import SearchInput from './SearchInput'
import Cart from './Cart'
import '../styles/Banner.css'

const Banner = () => {
  return (
    <div className="Banner">
      <div className="main-container">
        <h1>Amazing<br />Store</h1>
        <div className="banner-main-content">
          <SearchInput />
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default Banner;