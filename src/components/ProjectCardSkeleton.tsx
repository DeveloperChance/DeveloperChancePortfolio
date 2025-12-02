export default function ProjectCardSkeleton() {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 animate-pulse">
      {/* Title and badges area */}
      <div className="mb-4">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="h-7 bg-gray-700 rounded w-2/3"></div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-16 bg-gray-700 rounded"></div>
            <div className="h-4 w-20 bg-gray-700 rounded"></div>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-6 w-24 bg-gray-700 rounded-full"></div>
          <div className="h-6 w-28 bg-gray-700 rounded-full"></div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-4 space-y-2">
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-700 rounded w-4/6"></div>
      </div>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="h-7 w-20 bg-gray-700 rounded-full"></div>
        <div className="h-7 w-24 bg-gray-700 rounded-full"></div>
        <div className="h-7 w-16 bg-gray-700 rounded-full"></div>
        <div className="h-7 w-28 bg-gray-700 rounded-full"></div>
        <div className="h-7 w-20 bg-gray-700 rounded-full"></div>
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-gray-700">
        <div className="h-5 w-20 bg-gray-700 rounded"></div>
        <div className="h-5 w-24 bg-gray-700 rounded"></div>
      </div>
    </div>
  )
}
