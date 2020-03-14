import React, { useContext } from 'react'
import { FiltersContext } from '../contexts/filters'
import SortFilter from './SortFilter'
import '../styles/SortFilters.css'

const SortFilters = () => {
  const { sortType, setFilter } = useContext(FiltersContext)

  const filters = {
    'numeric-asc': 'Price Low to High',
    'numeric-desc': 'Price High to Low',
    'alpha-asc': 'Name A to Z',
    'alpha-desc': 'Name Z to A',
  }

  return ( 
    <div className="SortFilters">
      <h3>Sort</h3>
      <div className="price-range-filters">
        {Object.entries(filters).map(([key, text]) => <SortFilter key={key} icon={key} selected={key === sortType} text={text} setFilter={setFilter} />)}
      </div>
    </div>
  );
}
 
export default SortFilters;