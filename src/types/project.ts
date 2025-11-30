export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  category: 'professional' | 'educational' | 'hobby'
  featured?: boolean
  image?: string
  githubUrl?: string
  liveUrl?: string
  isPrivate?: boolean
  year?: string | number
  status?: 'in-development' | 'completed' | 'maintained'
}
