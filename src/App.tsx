import { useState, useRef } from 'react'

// Components
import Header from './components/Header'
import Storefront from './components/Storefront'
import Cart from './components/Cart'

// Data
import { mutableItems } from './data/items'

// Types
import { CartItem, TItem } from './data/types'

const App = () => {
  const [items, setItems] = useState(mutableItems)
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [errorMsg, setErrorMsg] = useState('You should never see this')
  const errorMsgRef = useRef<HTMLParagraphElement>(null)

  const addToCart = (target: TItem) => {
    if (target.quantity > 0) {
      setItems((prev) => {
        const foundItem = prev.find((item) => item.id === target.id)
        if (foundItem) {
          foundItem.quantity--
        }
        return [...prev]
      })
      setCart((prev) => {
        const indexOfFound = prev.findIndex((item) => item.name === target.name)
        if (indexOfFound === -1) {
          const ItemToAdd: CartItem = {
            ...target,
            cartID: cart.length,
            cartQuantity: 1
          }
          prev.push(ItemToAdd)
        } else {
          prev[indexOfFound].cartQuantity++
        }

        return [...prev]
      })
    } else {
      errorMsgRef.current?.classList.remove('error-msg-init')
      errorMsgRef.current?.classList.remove('fade-out')
      errorMsgRef.current?.classList.add('fade-in')
      setErrorMsg(`Cannot add ${target.name} to cart, as there is not enough in stock.`)
      setTimeout(() => {
        errorMsgRef.current?.classList.remove('fade-in')
        errorMsgRef.current?.classList.add('fade-out')
      }, 4000)
    }
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
      {cartIsOpen && (
        <Cart
          cart={cart}
          setCart={setCart}
          setCartIsOpen={setCartIsOpen}
          setItems={setItems}
        />
      )}
    </div>
  )
}

export default App
