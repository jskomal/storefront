import React from 'react'
import { CartItem, TItem } from '../data/types'
import { currencyFormatter } from '../data/currencyFormatter'

type TProps = {
  items: TItem[]
  addToCart: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  cart: CartItem[]
}

const Storefront = (props: TProps) => {
  const { items, addToCart, cart } = props
  const itemGrid = items.map((item) => {
    const cartQuantity = cart.find((element) => element.name === item.name)?.quantity
    return (
      <div className='item-entry' key={item.id}>
        <img className='grid-image row-item' src={item.imgURL} alt={item.description} />
        <p className='row-item'>{item.name}</p>
        <p className='row-item'>{item.description}</p>
        <p className='row-item'>quantity: {item.quantity}</p>
        <p className='row-item'> price: {currencyFormatter.format(item.price / 100)}</p>
        <div className='row-item add-cart-view'>
          <button value={item.id} onClick={(e) => addToCart(e)}>
            Add to Cart
          </button>
          <p>{cartQuantity || '0'} in cart</p>
        </div>
      </div>
    )
  })
  return <div className='store-view'>{itemGrid}</div>
}

export default Storefront
