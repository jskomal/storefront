import { useState, useRef } from 'react'

// Components
import Header from './components/Header'
import Storefront from './components/Storefront'
import Cart from './components/Cart'

// Data
import { ITEMS } from './data/items'

// Types
import { CartItem } from './data/types'

const App = () => {
  const [items, setItems] = useState(ITEMS)
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [errorMsg, setErrorMsg] = useState('You should never see this')
  const errorMsgRef = useRef<HTMLParagraphElement>(null)

  const addToCart = (e: any) => {
    setItems((prev) => {
      const indexToChange = prev.findIndex((item) => item.id === parseInt(e.target.value))
      prev[indexToChange].quantity--
      return [...prev]
    })
    setCart((prev) => {
      const newCartItem = items.find((item) => item.id === parseInt(e.target.value))
      if (newCartItem) {
        const indexOfFound = prev.findIndex((item) => item.name === newCartItem.name)
        if (indexOfFound === -1) {
          const ItemToAdd: CartItem = { ...newCartItem, cartID: cart.length, quantity: 1 }
          prev.push(ItemToAdd)
        } else {
          prev[indexOfFound].quantity++
        }
      }
      return [...prev]
    })
  }

  const toggleCartOpen = () => {
    if (!cart[0]) {
      errorMsgRef.current?.classList.remove('error-msg-init')
      errorMsgRef.current?.classList.remove('fade-out')
      errorMsgRef.current?.classList.add('fade-in')
      setErrorMsg('Add an item to the cart first!')
      setTimeout(() => {
        errorMsgRef.current?.classList.remove('fade-in')
        errorMsgRef.current?.classList.add('fade-out')
      }, 4000)
    } else {
      setCartIsOpen((prev) => !prev)
    }
  }

  return (
    <div className='app' style={cartIsOpen ? { backgroundColor: 'grey' } : {}}>
      <Header cart={cart} toggleCartOpen={toggleCartOpen} cartIsOpen={cartIsOpen} />
      <p className='error-msg-init' ref={errorMsgRef}>
        {errorMsg}
      </p>
      <Storefront items={items} addToCart={addToCart} cart={cart} />
      {cartIsOpen && cart[0] && <Cart cart={cart} setCart={setCart} />}
    </div>
  )
}

export default App
