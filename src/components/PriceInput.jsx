import React from 'react'
import '../styles/PriceInput.css'

const PriceInput = ({ placeholder, setPrice }) => {
  const name = placeholder.toLowerCase()

  const onInput = e => {
    const value = Number(e.target.value)
    setPrice(prevState => ({...prevState, [name]: value}))
  }

  return (
    <input className="PriceInput" placeholder={`${placeholder}`} onInput={onInput} type="number" />
  );
}
 
export default PriceInput;