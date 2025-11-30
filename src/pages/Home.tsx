export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          I'm Chance Byers, a passionate developer building amazing web experiences
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  )
}
