import React, { useContext } from 'react'
import logo from '../assets/logo.jpg'
import Cart from './Cart'
import Button from './UI/Button'
import { CartContext } from '../store/CartContext'
impo

function Header() {
  const cartctx = useContext(CartContext)

  const totalcartitem = cartctx.items.reduce((total, item) => {
    return total + item.quantity
  }, 0)
  function handleclick() {
    // dialog.showModal()
    return <Cart />
  }
  return (
    <div id='main-header'>
      <div id='title'>
        <img src={logo} id='image' />
        <h1>Zomato</h1>
      </div>

      <nav>
        <Button onClick={handleclick} textOnly>
          Cart ({totalcartitem})
        </Button>
      </nav>
    </div>
  )
}

export default Header
