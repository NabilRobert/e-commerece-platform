import Link from "next/link";

interface CategoryCardProps {
    name: string;
    slug: string;
    image?: string;
}
export default function CategoriesCard({name, slug, image}:CategoryCardProps){
    return(
        <Link
      href={`/categories/${slug}`}
      className="flex h-40 items-center justify-center rounded-lg bg-gray-100 text-lg font-medium transition hover:bg-gray-200"
    >
      {name}
    </Link>
    );
}