"use client"

import { useState } from "react"
import Link from "next/link";
import Button from "../ui/Button/button";
import Image from "next/image";

const slides = [{
  id: 1,
  image: "/assets/cat.svg",
  title: "Elevate Your Everyday",
  description: "Discover carefully selected selections to fit your everyday needs",
},
{
  id: 2,
  image: "/assets/cat.svg",
  title: "New Season Arrivals",
  description: "Discover this seasons hottest items",
},
]
export default function Hero() {

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    )
  }

  const currentSlide = slides[currentIndex]

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="relative min-w-full h-full">
              <Image
                src={slide.image}
                alt="Hero"
                fill
                priority={slide.id === 1}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-black/40" />

      <button
        onClick={prevSlide}
        className="absolute left-6 z-20 text-white text-3xl"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 z-20 text-white text-3xl"
      >
        →
      </button>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          {currentSlide.title}
        </h1>

        <p className="mt-6 text-lg text-gray-200">
          {currentSlide.description}
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