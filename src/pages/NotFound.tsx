import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <div className="mb-8">
          <svg
            className="mx-auto h-48 w-48 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition inline-flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </Link>
          <Link
            to="/projects"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-gray-600 hover:border-gray-500 rounded-lg font-medium transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  )
}
