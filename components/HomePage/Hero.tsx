import Link from "next/link";
import Button from "../ui/Button/button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">

      <div className="absolute inset-0 bg-gray-300">
        <div className="flex h-full items-center justify-center">
          <span className="text-gray-500 text-xl">
            Hero Image Placeholder
          </span>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          Elevate Your Everyday
        </h1>

        <p className="mt-6 text-lg text-gray-200">
          Discover curated collections and exclusive deals crafted
          to match your style.
        </p>

        <div className="mt-8 flex justify-center gap-4">
        <Link href="/categories">
          <Button 
          className="rounded-md border border-white px-6 py-3 hover:bg-white/20"
          variant="primary"
          size="md"
          >
            Shop Now
          </Button>
        </Link>

        <Link href="/categories">
          <Button 
          className="rounded-md border border-white px-6 py-3 hover:bg-white/20"
          variant="primary"
          size="md"
          >
            Learn More
          </Button>
        </Link>
        </div>
      </div>
    </section>
    )
}