import { Item } from "../mockItems"

export type CartItem = Item & {
    quantity:number
}

export type CartState = {
    items: CartItem[]
}