import { useState } from 'react'
import { TItem, CartItem } from '../data/types'
import { ITEMS } from '../data/items'

type CartQuantityProps = {
  item: CartItem
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setItems: React.Dispatch<React.SetStateAction<TItem[]>>
  setCartErrorMsg: React.Dispatch<React.SetStateAction<string>>
}

const CartQuantity = ({
  item,
  setCart,
  setCartIsOpen,
  setItems,
  setCartErrorMsg
}: CartQuantityProps) => {
  const [itemQuantity, setitemQuantity] = useState(item.cartQuantity)
  const immutableItemQuantity = ITEMS.find((element) => element.id === item.id)?.quantity

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) < 0) {
      setCartErrorMsg('Please input a number greater or equal than 0.')
      return
    } else if (
      typeof immutableItemQuantity === 'number' &&
      parseInt(e.target.value) > immutableItemQuantity
    ) {
      setCartErrorMsg(`Cannot add more ${item.name} than is in stock.`)
      return
    } else {
      setCartErrorMsg('')
    }
    setitemQuantity(parseInt(e.target.value))
  }

  const updateCartQuantity = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const prevCartItemQuantity = item.cartQuantity
    setCart((prev) => {
      item.cartQuantity = itemQuantity
      if (item.cartQuantity === 0) {
        setItems((previous) => {
          const itemToRevert = previous.find((element) => element.id === item.id)
          if (itemToRevert) {
            itemToRevert.quantity += prevCartItemQuantity
          }
          return [...previous]
        })
        const filteredPrev = prev.filter((element) => element.id !== item.id)
        if (!filteredPrev.length) setCartIsOpen(false)
        return [...filteredPrev]
      }
      return [...prev]
    })
  }

  return (
    <div className='quantity-editor'>
      <input
        type='number'
        name='cartQuantity'
        placeholder={item.cartQuantity.toString()}
        value={itemQuantity}
        onChange={handleInputChange}
      />
      <button onClick={updateCartQuantity}>
        {itemQuantity === 0 ? 'Remove from cart' : 'Edit Quantity'}
      </button>
    </div>
  )
}

export default CartQuantity
