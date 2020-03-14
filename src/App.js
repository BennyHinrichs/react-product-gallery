import React, { Component } from 'react';
import './styles/App.css';
import FiltersContextProvider from './contexts/filters'
import Banner from './components/Banner'
import Filters from './components/Filters'
import Products from './components/Products'
import Modal from './components/Modal'

export default class App extends Component {
  render() {
    return (
      <FiltersContextProvider>
        <div className="App">
          <div className="top-stripe"></div>
          <Banner />
          <div className="main-container">
            <Filters />
            <Products />
          </div>
          <div className="non-flow-content">
            <Modal />
          </div>
        </div>
      </FiltersContextProvider>
    )
  }
};
