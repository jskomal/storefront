export type TItem = {
  imgURL: string
  name: string
  description: string
  type: string
  quantity: number
  price: number
  enchantments?: string[]
  id: number
}

export interface CartItem extends TItem {
  cartID: number
  cartQuantity: number
}
