import { useState } from 'react'
import Header from './components/Header'
import Storefront from './components/Storefront'
import { ITEMS } from './data/items'
import { Titems } from './data/items'
import { Cart } from './data/types'

const App = () => {
  const [items, setitems] = useState(ITEMS)
  const [cart, setCart] = useState<Cart[]>([])
  return (
    <div className='App'>
      <Header cart={cart} />
      <Storefront items={items} setItems={setitems} setCart={setCart} />
    </div>
  )
}

export default App
