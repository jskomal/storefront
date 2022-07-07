import React from 'react'
import { Titems } from '../data/items'
import { currencyFormatter } from '../data/currencyFormatter'
import { Cart } from '../data/types'

type TProps = {
  items: Titems[]
  setItems: React.Dispatch<React.SetStateAction<Titems[]>>
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>
}

const Storefront = (props: TProps) => {
  const { items, setItems } = props
  console.log(items)
  const itemGrid = items.map((item) => (
    <div className='item-entry' key={item.id}>
      <img className='grid-image row-item' src={item.imgURL} alt={item.description} />
      <p className='row-item'>{item.name}</p>
      <p className='row-item'>{item.description}</p>
      <p className='row-item'>quantity: {item.quantity}</p>
      <p className='row-item'> price: {currencyFormatter.format(item.price / 100)}</p>
      <div className='row-item add-cart-view'>
        <button>Add to Cart</button>
        <p>0 in cart</p>
      </div>
    </div>
  ))
  return <div className='store-view'>{itemGrid}</div>
}

export default Storefront
