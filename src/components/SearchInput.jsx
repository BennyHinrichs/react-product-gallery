import React, { useContext, useRef } from 'react'
import { FiltersContext } from '../contexts/filters';
import '../styles/SearchInput.css'

const SearchInput = () => {
  const { setFilter } = useContext(FiltersContext)
  const input = useRef()

  const onInput = e => {
    const value = e.target.value
    setFilter({text: value})
  }

  const focus = () => input.current.focus()

  return ( 
    <div className="SearchInput" onClick={focus}>
      <i className="fa fa-search"></i>
      <input ref={input} placeholder="Search products by name" onInput={onInput} />
    </div>
  );
}
 
export default SearchInput;