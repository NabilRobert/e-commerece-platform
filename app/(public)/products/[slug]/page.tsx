import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/mockItems";
import Image from "next/image";
import Button from "@/components/ui/Button/button";
import ItemSection from "@/components/Item/ItemSection";
import Link from "next/link";

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
<div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
  <div className="grid md:grid-cols-2 gap-12">
    
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
      <Link href={`/store/${product.storepage}`}>
        <p className="text-gray-500">{product.storepage}</p>
      </Link>
      <p className="text-black">{product.category}</p>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-2xl font-semibold">${product.price}</p>

      <Button
        size="md"
        variant="primary"
        className="px-6 py-3 rounded-lg"
      >
        Add to Cart
      </Button>
    </div>

  </div>
  <div className="space-y-6">
    <h2 className="text-xl font-bold">
      Other products you might be interested in:
    </h2>

    <ItemSection />
  </div>
</div>
  )
}