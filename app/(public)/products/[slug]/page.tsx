import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/mockItems";
import Image from "next/image";

interface ProductPageProps {
    params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params
  const product = await getProductBySlug(slug);
  if(!product) {
    notFound()
  }

  return (
     <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
        <Image
        src={product.image}
        alt={product.title}
        width={500}
        height={500}
        className="rounded-lg"
        />
    </div>

    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-2xl font-semibold">${product.price}</p>

      <button className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90">
        Add to Cart
      </button>
    </div>
  </div>
  )
}