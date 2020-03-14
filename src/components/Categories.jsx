import React, { useContext } from 'react'
import Category from './Category'
import { FiltersContext } from '../contexts/filters'
import '../styles/Categories.css'

const Categories = () => {
  const { categoryFilter, categories } = useContext(FiltersContext)

  return ( 
    <div className="Categories">
      {categories.map(c => <Category name={c.name} id={c.id} key={c.id} selected={c.id === categoryFilter} />)}
    </div>
  );
}
 
export default Categories;