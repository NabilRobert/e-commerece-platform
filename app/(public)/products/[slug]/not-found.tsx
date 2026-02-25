export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 animate-pulse">
      
      {/* Image Skeleton */}
      <div className="aspect-square bg-gray-200 rounded-lg" />

      {/* Info Skeleton */}
      <div className="space-y-6">
        <div className="h-8 bg-gray-200 rounded w-2/3" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-10 bg-gray-300 rounded w-40 mt-6" />
      </div>

    </div>
  )
}