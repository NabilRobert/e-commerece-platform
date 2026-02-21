import Link from "next/link"
import Button from "../ui/Button/button"
import CategoriesCard from "../ui/CategoryCard/CategoryCard"

const categories = [
    {name: "cat1", slug:"cat-1", image:"/assets/cat.svg"},
    {name: "cat2", slug:"cat-2", image:"/assets/cat.svg"},
    {name: "cat3", slug:"cat-3", image:"/assets/cat.svg"},
    {name: "cat4", slug:"cat-4", image:"/assets/cat.svg"},
    {name: "cat5", slug:"cat-5", image:"/assets/cat.svg"},
    {name: "cat6", slug:"cat-6", image:"/assets/cat.svg"},
]
export default function Categories(){
    return(
        <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">

        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Shop by Category
          </h2>
          <p className="mt-4 text-gray-600">
            Browse our curated collections.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <CategoriesCard 
            key={category.slug} 
            name={category.name} 
            slug={category.slug}
            image={category.image}
            />
          ))}
        </div>

        <Link href="/">
        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg">
            Load More
          </Button>
        </div>
        </Link>

      </div>
    </section>
    )
}