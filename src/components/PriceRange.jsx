import React, { useContext, useState } from 'react'
import PriceInput from './PriceInput'
import Button from './Button'
import { FiltersContext } from '../contexts/filters'
import '../styles/PriceRange.css'

const PriceRange = () => {
  const { setFilter } = useContext(FiltersContext)
  const [price, setPrice] = useState({})

  return ( 
    <div className="PriceRange">
      <h3>Filter by Price</h3>
      <div className="price-range-filters">
        <PriceInput placeholder="Min" setPrice={setPrice} />
        <PriceInput placeholder="Max" setPrice={setPrice} />
        <Button onClick={() => setFilter({price})}>Go</Button>
      </div>
    </div>
  );
}
 
export default PriceRange;