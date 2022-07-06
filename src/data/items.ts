type Titems = {
  imgURL: string
  name: string
  description: string
  type: string
  quantity: number
  price: number
  enchantments?: string[]
}

export const items: Titems[] = [
  {
    name: 'Fire Extinguister',
    description: 'If you know, you know',
    type: 'Kitchen',
    quantity: 100,
    price: 4999,
    imgURL:
      'https://images.unsplash.com/photo-1569436078135-61753b84e3e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
  },
  {
    name: 'Wand',
    description: 'A staple for all practicioners',
    type: 'Lab',
    quantity: 20,
    price: 19999,
    imgURL:
      'https://images.unsplash.com/photo-1610466025839-ec6040c347b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
  },
  {
    name: 'Magic Ring',
    description: 'Enchanted with a variety of spells',
    type: 'Lab',
    quantity: 3,
    price: 50000,
    enchantments: ['Kinetic', 'Charm Person', 'Locate Object'],
    imgURL:
      'https://images.unsplash.com/photo-1496989981497-27d69cdad83e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1231&q=80'
  },
  {
    name: 'Leather Duster',
    description: 'Protection from the elements, both natural and supernatural',
    type: 'Bedroom',
    quantity: 50,
    price: 5000,
    imgURL:
      'https://images.unsplash.com/photo-1621343342508-97a99cbdec5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80'
  },
  {
    name: 'Hat',
    description: 'Never leave home without it',
    type: 'Bedroom',
    quantity: 10,
    price: 10000,
    imgURL:
      'https://images.unsplash.com/photo-1601830976337-e32f60eba315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'
  },
  {
    name: 'Mouse',
    description: 'The Best Boy',
    type: 'Living Room',
    quantity: 1,
    price: 99999999,
    imgURL:
      'https://natureworks.com.au/products/garden-statues-decor/themed-entry-statements/foo-dog-roman-stone-female/'
  }
]
