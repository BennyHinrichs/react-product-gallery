import React, { createContext, useState } from 'react'
import { categories, products } from '../data'

export const FiltersContext = createContext({})

const cats = [{ name: 'All Categories', id: -1 }, ...categories]

const sortFns = {
  'numeric-asc': (a, b) => a.price - b.price,
  'numeric-desc': (a, b) => b.price - a.price,
  'alpha-asc': (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
  'alpha-desc': (a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()),
}

const FiltersContextProvider = (props) => {
  const [categoryFilter, setCategoryFilter] = useState(cats[0].id)
  const [textFilter, setTextFilter] = useState('')
  const [priceFilter, setPriceFilter] = useState({})
  const [curProducts, setCurProducts] = useState(products)
  const [showProduct, setShowProduct] = useState(null)
  const [sortType, setSortType] = useState(null)
  const [cartItems, setCartItems] = useState({})

  // can this be done with useMemo? it's almost like I'd only want to memoize the category filters
  const filterProduct = ({ text, category, price, }) => {
    return products.filter(p => {
      const curCategory = category ? category : categoryFilter ? categoryFilter : null
      const isCategory = curCategory && curCategory > 0 ? curCategory === p.categoryId : true
      if (!isCategory) return false

      const curPrice = price ? price : priceFilter ? priceFilter : null
      const min = (curPrice && curPrice.min) || 0
      const max = (curPrice && curPrice.max > 0) ? curPrice.max : Number.MAX_SAFE_INTEGER
      const isPrice = p.price >= min && p.price <= max
      if (!isPrice) return false

      const curText = (text || text === '') ? text : (textFilter || textFilter === '') ? textFilter : null
      const isText = curText ? p.name.toLowerCase().includes(curText.toLowerCase()) : true
      if (!isText) return false

      return true
    })
  }

  const setFilter = ({ text, category, price, sort }) => {
    const curSort = sort ? sort : sortType ? sortType : null
    const productsFiltered = (text || text === '' || category || price || price === 0)
      ? filterProduct({ text, category, price })
      : curProducts
        ? curProducts
        : products

    if (curSort) productsFiltered.sort(sortFns[curSort])

    if (category) setCategoryFilter(category)
    if (text || text === '') setTextFilter(text)
    if (price) setPriceFilter(price)
    if (sort) setSortType(sort)
    setCurProducts(productsFiltered)
  }

  return (
    <FiltersContext.Provider value={{
      categories: cats,
      products: curProducts,
      textFilter,
      categoryFilter,
      priceFilter,
      setFilter,
      sortType,
      showProduct,
      setShowProduct,
      cartItems,
      setCartItems,
    }}>
      {props.children}
    </FiltersContext.Provider>
  )
}

export default FiltersContextProvider;