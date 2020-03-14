import React, { useContext } from 'react'
import { FiltersContext } from '../contexts/filters';

const Category = ({ name, id, selected }) => {
  const { setFilter } = useContext(FiltersContext)

  return ( 
    <div 
      className={`Category ${selected ? 'selected' : ''}`}
      onClick={() => setFilter({category: id})}
    >
      {name}
    </div>
  );
}
 
export default React.memo(Category);