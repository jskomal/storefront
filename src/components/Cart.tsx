import { currencyFormatter } from '../data/currencyFormatter'
import { CartItem } from '../data/types'
import CartQuantity from './CartQuantity'

type CartProps = {
  cart: CartItem[]
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
}

const Cart = ({ cart, setCart }: CartProps) => {
  const cartItems = cart.map((item) => (
    <div key={item.id} className='cart-item'>
      <img className='cart-img' src={item.imgURL} alt={item.name} />
      <div>
        <p>{item.name}</p>
        <p>{item.quantity} in cart</p>
      </div>
      <CartQuantity item={item} setCart={setCart} />
    </div>
  ))

  const totalSum = cart.reduce((acc, item) => (acc += item.price * item.quantity), 0)
  return (
    <div className='cart-view'>
      {cartItems}
      <p style={{ fontWeight: '800' }}>
        total cost: {currencyFormatter.format(totalSum / 100)}{' '}
      </p>
    </div>
  )
}

export default Cart
