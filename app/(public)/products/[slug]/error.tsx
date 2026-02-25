"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error("Product page error:", error)
  }, [error])

  return (
    <div className="max-w-4xl mx-auto py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Something went wrong.
      </h2>

      <p className="text-gray-600 mb-8">
        We ran into a problem loading this product.
      </p>

      <button
        onClick={() => reset()}
        className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90"
      >
        Try Again
      </button>
    </div>
  )
}