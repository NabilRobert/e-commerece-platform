"use client"
import Image from "next/image"
import { Item } from "@/lib/mockItems"
import Button from "../ui/Button/button"
import Link from "next/link"
import { useCartStore } from "@/lib/store/cartstore"
type Props  = {
  item: Item
} 

export default function ItemCard({ item }: Props){
  const addItem = useCartStore((state) => state.addItem)
  const { name, price, image, slug } = item
    return(
      <Link href={`/products/${slug}`}>
      <div className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition">
        <div className="relative h-40 w-full overflow-hidden rounded-md">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
      </div>

      <h3 className="mt-4 text-lg font-semibold">{name}</h3>

      <p className="mt-1 text-gray-600">${price}</p>

      <div className="mt-4">
        <Button onClick={() =>addItem(item)} size="sm">Add to Cart</Button>
      </div>
    </div>
    </Link>
    )
}