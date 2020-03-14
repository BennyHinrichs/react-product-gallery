import React from 'react'
import Categories from './Categories'
import PriceRange from './PriceRange'
import SortFilters from './SortFilters'
import DarkModeToggle from './DarkModeToggle'
import '../styles/Filters.css'

const Filters = () => {
  return (
    <div className="Filters">
      <Categories />
      <PriceRange />
      <SortFilters />
      <DarkModeToggle />
    </div>
  );
}

export default Filters;