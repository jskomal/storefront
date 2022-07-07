import React from 'react'
import { Cart } from '../data/types'

type HeaderProps = {
  cart: Cart[]
}

const Header = ({ cart }: HeaderProps) => {
  return (
    <div className='header-view'>
      <h1>Harry Dresden's Wizard Emporium</h1>
      <button>Show Cart</button>
    </div>
  )
}

export default Header
