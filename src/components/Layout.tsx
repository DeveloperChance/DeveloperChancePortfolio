import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-blue-400 hover:text-blue-300">
                Chance Byers
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Chance Byers. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
