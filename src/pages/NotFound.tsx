import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function NotFound() {
  const [glitchText, setGlitchText] = useState('404')
  
  useEffect(() => {
    const glitchChars = ['4', '0', '?', '!', '#', '@', '*']
    let glitchInterval: NodeJS.Timeout
    
    const startGlitch = () => {
      let iterations = 0
      glitchInterval = setInterval(() => {
        setGlitchText(
          Array(3)
            .fill(0)
            .map(() => glitchChars[Math.floor(Math.random() * glitchChars.length)])
            .join('')
        )
        iterations++
        if (iterations >= 8) {
          setGlitchText('404')
          clearInterval(glitchInterval)
        }
      }, 100)
    }

    const timeout = setTimeout(startGlitch, 500)
    const repeatInterval = setInterval(startGlitch, 5000)

    return () => {
      clearTimeout(timeout)
      clearInterval(glitchInterval)
      clearInterval(repeatInterval)
    }
  }, [])

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated 404 */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <h1 className="relative text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fadeIn">
            {glitchText}
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Houston, we have a problem...
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            The page you're looking for seems to have wandered off into the void. 
            Don't worry, even the best developers get lost sometimes!
          </p>
        </div>

        {/* Helpful Links */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-300 mb-4">Try one of these instead:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <Link
              to="/"
              className="p-4 bg-gray-800 hover:bg-gray-750 rounded-lg transition-all hover:scale-105 border border-gray-700 hover:border-blue-500/50"
            >
              <svg className="w-8 h-8 mx-auto mb-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <div className="font-medium">Home</div>
              <div className="text-sm text-gray-400">Start fresh</div>
            </Link>

            <Link
              to="/projects"
              className="p-4 bg-gray-800 hover:bg-gray-750 rounded-lg transition-all hover:scale-105 border border-gray-700 hover:border-blue-500/50"
            >
              <svg className="w-8 h-8 mx-auto mb-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <div className="font-medium">Projects</div>
              <div className="text-sm text-gray-400">See my work</div>
            </Link>

            <Link
              to="/about"
              className="p-4 bg-gray-800 hover:bg-gray-750 rounded-lg transition-all hover:scale-105 border border-gray-700 hover:border-blue-500/50"
            >
              <svg className="w-8 h-8 mx-auto mb-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div className="font-medium">About</div>
              <div className="text-sm text-gray-400">Learn more</div>
            </Link>

            <Link
              to="/contact"
              className="p-4 bg-gray-800 hover:bg-gray-750 rounded-lg transition-all hover:scale-105 border border-gray-700 hover:border-blue-500/50"
            >
              <svg className="w-8 h-8 mx-auto mb-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="font-medium">Contact</div>
              <div className="text-sm text-gray-400">Get in touch</div>
            </Link>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 max-w-2xl mx-auto">
          <div className="flex items-start gap-3 text-left">
            <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className="font-semibold text-white mb-1">Did you know?</h4>
              <p className="text-gray-400 text-sm">
                The first documented 404 error was at CERN in 1992. The server room where Tim Berners-Lee kept the first web server 
                was in room 404. Visitors looking for files would often get lost trying to find room 404!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
