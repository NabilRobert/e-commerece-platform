import { mockItems } from "@/lib/mockItems";
import ItemGrid from "./ItemGrid";

export default function ItemSection() {
    const featuredItems = mockItems.filter((item) => item.featured)

    return (
        <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">

        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Featured Items
          </h2>
          <p className="mt-4 text-gray-600">
            Hand-picked just for you.
          </p>
        </div>

        <div className="mt-12">
          <ItemGrid items={featuredItems} />
        </div>

      </div>
    </section>
    )
}