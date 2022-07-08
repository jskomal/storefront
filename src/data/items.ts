import { TItem } from './types'

export const ITEMS: TItem[] = [
  {
    id: 0,
    name: 'Fire Extinguister',
    description: 'If you know, you know',
    type: 'Kitchen',
    quantity: 100,
    price: 4999,
    imgURL:
      'https://images.unsplash.com/photo-1569436078135-61753b84e3e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
  },
  {
    id: 1,
    name: 'Wand',
    description: 'A staple for all practicioners',
    type: 'Lab',
    quantity: 20,
    price: 19999,
    imgURL:
      'https://images.unsplash.com/photo-1610466025839-ec6040c347b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: 2,
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
    id: 3,
    name: 'Leather Duster',
    description: 'Protection from the elements, both natural and supernatural',
    type: 'Bedroom',
    quantity: 50,
    price: 5000,
    imgURL:
      'https://images.unsplash.com/photo-1621343342508-97a99cbdec5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80'
  },
  {
    id: 4,
    name: 'Hat',
    description: 'Never leave home without it',
    type: 'Bedroom',
    quantity: 10,
    price: 10000,
    imgURL:
      'https://images.unsplash.com/photo-1601830976337-e32f60eba315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'
  },
  {
    id: 5,
    name: 'Mouse',
    description: 'The Best Boy',
    type: 'Living Room',
    quantity: 1,
    price: 99999999,
    imgURL:
      'https://target.scene7.com/is/image/Target/GUEST_49092929-1a3d-49bd-a40c-7c19192e2882?wid=488&hei=488&fmt=pjpeg'
  }
]
