import { useState } from 'react'

import { currencyFormatter } from '../data/currencyFormatter'
import { TItem, CartItem } from '../data/types'
import CartQuantity from './CartQuantity'

type CartProps = {
  cart: CartItem[]
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setItems: React.Dispatch<React.SetStateAction<TItem[]>>
}

const Cart = ({ cart, setCart, setCartIsOpen, setItems }: CartProps) => {
  const [cartErrorMsg, setCartErrorMsg] = useState('')
  const cartItems = cart.map((item) => (
    <div key={item.id} className='cart-item'>
      <img className='cart-img' src={item.imgURL} alt={item.name} />
      <div>
        <p>{item.name}</p>
        <p>{item.cartQuantity} in cart</p>
      </div>
      <CartQuantity
        item={item}
        setCart={setCart}
        setCartIsOpen={setCartIsOpen}
        setItems={setItems}
        setCartErrorMsg={setCartErrorMsg}
      />
    </div>
  ))

  const totalSum = cart.reduce((acc, item) => (acc += item.price * item.cartQuantity), 0)
  return (
    <div className='cart-view'>
      <p style={{ color: 'red' }}>{cartErrorMsg}</p>
      {cartItems}
      <p style={{ fontWeight: '800' }}>
        total cost: {currencyFormatter.format(totalSum / 100)}{' '}
      </p>
    </div>
  )
}

export default Cart
