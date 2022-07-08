import { CartItem } from '../data/types'

type HeaderProps = {
  cart: CartItem[]
  toggleCartOpen: () => void
  cartIsOpen: boolean
}

const Header = ({ cart, toggleCartOpen, cartIsOpen }: HeaderProps) => {
  return (
    <div className='header-view'>
      <h1>Harry Dresden's Wizard Emporium</h1>
      <button onClick={toggleCartOpen}>{cartIsOpen ? 'Hide Cart' : 'Show Cart'}</button>
    </div>
  )
}

export default Header
