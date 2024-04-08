import React, { useEffect, useState, useContext } from 'react'
import { currencyformatter } from '../util/formatting'
import Button from './UI/Button'
import { CartContext } from '../store/CartContext'

export default function Meals() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch('http://localhost:3000/meals')
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.error('Error fetching meals:', error)
      }
    }
    fetchMeals()
  }, [])

  const cartCtx = useContext(CartContext)

  function handleaddMeal(item) {
    cartCtx.addItem(item)
  }

  return (
    <ul id='meals'>
      {data.map((item) => (
        <li key={item.id} className='meal-item'>
          <img src={`http://localhost:3000/${item.image}`} alt={item.name} />
          <h3>{item.name}</h3>
          <p className='meal-item-price'>
            {currencyformatter.format(item.price)}
          </p>
          <p className='meal-item-description'>{item.description}</p>
          <Button
            className='meal-item-actions'
            onClick={() => handleaddMeal(item)}
          >
            Add to Cart
          </Button>
        </li>
      ))}
    </ul>
  )
}
