import { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    description,
    technologies,
    githubUrl,
    liveUrl,
    isPrivate,
    status,
    year,
    featured,
  } = project

  const statusColors = {
    'in-development': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    completed: 'bg-green-500/20 text-green-400 border-green-500/30',
    maintained: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  }

  return (
    <div
      className={`bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition relative flex flex-col ${
        featured ? 'border-2 border-blue-500/50' : ''
      }`}
    >
      {featured && !isPrivate && (
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
            Featured
          </span>
        </div>
      )}

      <div className="mb-4">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-xl font-semibold flex-1">{title}</h3>
          <div className="flex items-center gap-2">
            {isPrivate && (
              <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-semibold rounded flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Private
              </span>
            )}
            {year && (
              <span className="text-gray-500 text-sm whitespace-nowrap">{year}</span>
            )}
          </div>
        </div>

        {status && (
          <span
            className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${
              statusColors[status] || ''
            }`}
          >
            {status === 'in-development'
              ? 'In Development'
              : status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        )}
      </div>

      <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      {(githubUrl || liveUrl) && (
        <div className="flex gap-3 mt-auto pt-4 border-t border-gray-700">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:text-blue-300 transition flex items-center gap-1"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:text-blue-300 transition flex items-center gap-1"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  )
}
