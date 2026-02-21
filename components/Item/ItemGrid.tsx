import { Item } from "@/lib/mockItems";
import ItemCard from "./ItemCard";

type Props = {
    items: Item[]
}

export default function ItemGrid({items}:Props) {
    if (items.length === 0) {
        return <p className="text-center text-gray-500">No items found</p>
    }
    return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {items.map((item) => (
            <ItemCard key={item.id} {...item} />
      ))}
    </div>
    )
}