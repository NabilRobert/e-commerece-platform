import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
    name: string;
    slug: string;
    image: string;
}

// later add image back as a param
export default function CategoriesCard({
  name, 
  slug, 
  image,
}:CategoryCardProps){
    return(
      <Link
      href={`/categories/${slug}`}
      className="flex h-40 items-center justify-center rounded-lg bg-gray-100 text-lg font-medium transition hover:bg-gray-200"
    >
      <div className="relative overflow-hidden rounded-lg group cursor-pointer  h-40 w-full">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover relative h-40 w-full"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full items-center justify-center">
          <h3 className="text-white text-lg font-semibold tracking-wide">
            {name}
          </h3>
        </div>

      </div>
    </Link>
    );
}