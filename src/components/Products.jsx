import React, { useContext } from 'react'
import Product from './Product'
import { FiltersContext } from '../contexts/filters'
import '../styles/Products.css'


const Products = () => {
  const { categories, products, categoryFilter } = useContext(FiltersContext)

  const category = categories.filter(c => c.id === categoryFilter)[0]

  return ( 
    <div className="Products">
      <h1 className="products-header">{category.name}</h1>
      <div className="products-content">
        {products.map(p => <Product key={p.id} {...p} />)}
      </div>
    </div>
  );
}
 
export default Products;