import { createContext, useReducer } from 'react'

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
})

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    )

    const updatedItems = [...state.items]

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex]
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      }

      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      updatedItems.push({
        ...action.item,
        quantity: 1,
      })
    }

    return {
      ...state,
      items: updatedItems,
    }
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    )

    const existingItem = state.items[existingCartItemIndex]

    if (existingItem.quantity === 1) {
      const updatedItems = state.items.filter(
        (item) => item.id !== existingItem.id
      )

      return {
        ...state,
        items: updatedItems,
      }
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      }

      const updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem

      return {
        ...state,
        items: updatedItems,
      }
    }
  }

  return state
}

function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] })

  const cartContext = {
    items: cart.items,
    addItem: additem,
    removeItem: removeitem,
  }

  function additem(item) {
    dispatch({ type: 'ADD_ITEM', item })
    console.log('additem')
    console.log(item)
  }

  function removeitem(id) {
    dispatch({ type: 'REMOVE_ITEM', id })
    console.log('removeitem')
    console.log(id)
  }

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
