import { useState, useMemo, useEffect } from 'react'
import { projects, projectsByCategory } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import ProjectCardSkeleton from '../components/ProjectCardSkeleton'

type FilterType = 'all' | 'professional' | 'educational' | 'hobby'

export default function Projects() {
  const [categoryFilter, setCategoryFilter] = useState<FilterType>('all')
  const [techFilter, setTechFilter] = useState<string>('all')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Simulate loading projects
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute('data-card-id')
            if (cardId) {
              setVisibleCards((prev) => new Set(prev).add(cardId))
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const cards = document.querySelectorAll('[data-card-id]')
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [isLoading, categoryFilter, techFilter])

  // Get all unique technologies
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>()
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techs.add(tech))
    })
    return Array.from(techs).sort()
  }, [])

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    let filtered = projects

    // Filter by category
    if (categoryFilter !== 'all') {
      filtered = filtered.filter((p) => p.category === categoryFilter)
    }

    // Filter by technology
    if (techFilter !== 'all') {
      filtered = filtered.filter((p) => p.technologies.includes(techFilter))
    }

    return filtered
  }, [categoryFilter, techFilter])

  // Group filtered projects by category
  const filteredByCategory = useMemo(() => {
    return {
      professional: filteredProjects.filter((p) => p.category === 'professional'),
      educational: filteredProjects.filter((p) => p.category === 'educational'),
      hobby: filteredProjects.filter((p) => p.category === 'hobby'),
    }
  }, [filteredProjects])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">My Projects</h1>
        <p className="text-gray-400">
          A collection of professional, educational, and hobby projects showcasing my development journey
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        {/* Filter Toggle Button */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors mb-4"
        >
          <svg
            className={`w-5 h-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <span className="font-medium">
            {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
          </span>
          {(categoryFilter !== 'all' || techFilter !== 'all') && (
            <span className="px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full">
              {[categoryFilter !== 'all' ? 1 : 0, techFilter !== 'all' ? 1 : 0].reduce((a, b) => a + b)}
            </span>
          )}
        </button>

        {/* Collapsible Filter Content */}
        {isFilterOpen && (
          <div className="space-y-4 animate-fadeIn">
            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-2">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setCategoryFilter('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    categoryFilter === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  All Projects ({projects.length})
                </button>
                <button
                  onClick={() => setCategoryFilter('professional')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    categoryFilter === 'professional'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Professional ({projectsByCategory.professional.length})
                </button>
                <button
                  onClick={() => setCategoryFilter('educational')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    categoryFilter === 'educational'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Educational ({projectsByCategory.educational.length})
                </button>
                <button
                  onClick={() => setCategoryFilter('hobby')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    categoryFilter === 'hobby'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Hobby ({projectsByCategory.hobby.length})
                </button>
              </div>
            </div>

            {/* Technology Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-2">Filter by Technology</h3>
              <select
                value={techFilter}
                onChange={(e) => setTechFilter(e.target.value)}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="all">All Technologies</option>
                {allTechnologies.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
            </div>

            {/* Active Filters Display */}
            {(categoryFilter !== 'all' || techFilter !== 'all') && (
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-400">Active filters:</span>
                {categoryFilter !== 'all' && (
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full flex items-center gap-2">
                    {categoryFilter}
                    <button
                      onClick={() => setCategoryFilter('all')}
                      className="hover:text-blue-300"
                      aria-label="Remove category filter"
                    >
                      ×
                    </button>
                  </span>
                )}
                {techFilter !== 'all' && (
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full flex items-center gap-2">
                    {techFilter}
                    <button
                      onClick={() => setTechFilter('all')}
                      className="hover:text-blue-300"
                      aria-label="Remove technology filter"
                    >
                      ×
                    </button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setCategoryFilter('all')
                    setTechFilter('all')
                  }}
                  className="text-gray-400 hover:text-gray-300 underline ml-2"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Results Count */}
            <div className="text-sm text-gray-400">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </div>
          </div>
        )}
      </div>

      {isLoading ? (
        <div className="grid md:grid-cols-2 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProjectCardSkeleton key={index} />
          ))}
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-gray-400 text-lg mb-4">
            <svg
              className="mx-auto h-16 w-16 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <p className="text-xl">No projects found</p>
            <p className="text-gray-500 mt-2">Try adjusting your filters to see more results</p>
          </div>
        </div>
      ) : (
        <div className="space-y-12">
          {/* Professional Projects */}
          {filteredByCategory.professional.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Professional Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredByCategory.professional.map((project) => (
                  <div
                    key={project.id}
                    data-card-id={project.id}
                    className={`transition-opacity duration-500 ${visibleCards.has(project.id) ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Educational Projects */}
          {filteredByCategory.educational.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                Educational Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredByCategory.educational.map((project) => (
                  <div
                    key={project.id}
                    data-card-id={project.id}
                    className={`transition-opacity duration-500 ${visibleCards.has(project.id) ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Hobby Projects */}
          {filteredByCategory.hobby.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Hobby Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredByCategory.hobby.map((project) => (
                  <div
                    key={project.id}
                    data-card-id={project.id}
                    className={`transition-opacity duration-500 ${visibleCards.has(project.id) ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  )
}
