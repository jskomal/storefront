import { useState } from 'react'
import { CartItem } from '../data/types'

type Props = {
  item: CartItem
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
}

const CartQuantity = ({ item, setCart }: Props) => {
  const [itemQuantity, setitemQuantity] = useState(item.quantity)

  const updateCartQuantity = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCart((prev) => {
      item.quantity = itemQuantity
      if (item.quantity <= 0) {
        const filteredPrev = prev.filter((element) => element.id !== item.id)
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
        placeholder={item.quantity.toString()}
        value={itemQuantity}
        id={item.id.toString()}
        onChange={(e) => setitemQuantity(parseInt(e.target.value))}
      />
      <button onClick={updateCartQuantity}>Edit Quantity</button>
    </div>
  )
}

export default CartQuantity
