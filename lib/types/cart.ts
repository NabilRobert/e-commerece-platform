import { Item } from "../mockItems"

export type CartItem = Item & {
    quantity:number
}