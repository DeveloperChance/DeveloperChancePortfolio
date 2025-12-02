import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Chance Byers
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-4 font-semibold">
          Full-Stack Developer & Game Developer
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 max-w-3xl mx-auto px-4">
          Building exceptional web experiences with React, Next.js, and TypeScript. 
          Expanding into game development with C++ and Unreal Engine 5.
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/DeveloperChance"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            aria-label="GitHub"
          >
            <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/chance-byers-2542ba156/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://x.com/DeveloperChance"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            aria-label="X (Twitter)"
          >
            <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>

        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap px-4">
          <Link
            to="/projects"
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition text-sm sm:text-base"
          >
            View My Projects
          </Link>
          <Link
            to="/about"
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition text-sm sm:text-base"
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-600 hover:border-gray-500 rounded-lg font-medium transition text-sm sm:text-base"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Skills Highlights */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Core Technologies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30">
            <div className="text-blue-400 mb-3">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Full-Stack Web</h3>
            <p className="text-gray-400 text-center text-sm">
              React, Next.js, TypeScript, Node.js, Express, MySQL
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-purple-500/30">
            <div className="text-purple-400 mb-3">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Game Development</h3>
            <p className="text-gray-400 text-center text-sm">
              C++, C#, Unity, Unreal Engine 5, Game Design
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-green-500/30">
            <div className="text-green-400 mb-3">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Cloud & DevOps</h3>
            <p className="text-gray-400 text-center text-sm">
              Azure, Vercel, Cloudflare, Docker, PM2
            </p>
          </div>
        </div>
      </div>

      {/* Project Statistics */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">By The Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center hover:border-blue-500/50 transition-colors">
            <div className="text-4xl font-bold text-blue-400 mb-2">7+</div>
            <div className="text-gray-400 text-sm">Years of Development</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center hover:border-green-500/50 transition-colors">
            <div className="text-4xl font-bold text-green-400 mb-2">10+</div>
            <div className="text-gray-400 text-sm">Repositories</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center hover:border-purple-500/50 transition-colors">
            <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center hover:border-yellow-500/50 transition-colors">
            <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-gray-400 text-sm">Dedicated</div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Project</h2>
          <div className="max-w-4xl mx-auto">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
