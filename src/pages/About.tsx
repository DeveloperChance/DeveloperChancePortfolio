export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <div className="space-y-4 text-gray-300">
        <p>
          Hello! I'm Chance Byers, a motivated game and software developer with an associate degree in game development. 
          I have a strong foundation in programming, design, and interactive systems, with experience building hobby and 
          academic projects using modern game engines and languages.
        </p>
        <p>
          As a former firefighter paramedic, I bring a unique perspective to development—proven ability to work under 
          pressure, adapt quickly to changing situations, and collaborate effectively in high-stakes environments. These 
          skills translate directly into my approach to software development: staying calm during critical bugs, adapting 
          to new technologies, and working seamlessly with cross-functional teams.
        </p>
        <p>
          I specialize in full-stack web development with React, Next.js, and TypeScript, creating exceptional user 
          experiences with clean, maintainable code. Currently pursuing further education in game development and 
          software engineering, focusing on C++ and C# to expand my technical capabilities.
        </p>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
          
          {/* Primary Expertise */}
          <div className="mb-8 p-4 bg-gray-800/50 rounded-lg border border-blue-500/30">
            <h3 className="text-lg font-medium mb-3 text-blue-400 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Full-Stack Web Development (Primary Focus)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'REST APIs', 'HTML/CSS', 'Tailwind CSS', 'CSS Modules', 'JWT Auth', 'Flask', 'Jinja2'].map(
                (skill) => (
                  <div
                    key={skill}
                    className="bg-gray-800 px-3 py-2 rounded-lg text-center text-sm hover:bg-gray-700 transition border border-blue-500/20"
                  >
                    {skill}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Game Development */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3 text-purple-400">Game & Software Development (Currently Learning)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {['C++', 'C#', 'Unity', 'Unreal Engine 5', '.NET Framework', 'Visual Studio', 'Game Design', 'Windows Forms', 'Console Applications', 'OOP'].map(
                (skill) => (
                  <div
                    key={skill}
                    className="bg-gray-800 px-3 py-2 rounded-lg text-center text-sm hover:bg-gray-700 transition"
                  >
                    {skill}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Backend & Database */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3 text-green-400">Backend & Database</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {['OAuth2.1', 'Stripe Integration', 'Azure Storage', 'Mailgun', 'bcrypt', 'Session Management', 'API Design', 'Database Design'].map(
                (skill) => (
                  <div
                    key={skill}
                    className="bg-gray-800 px-3 py-2 rounded-lg text-center text-sm hover:bg-gray-700 transition"
                  >
                    {skill}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Cloud & Deployment */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3 text-orange-400">Cloud & Deployment (Working Knowledge)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {['Vercel', 'Azure', 'Cloudflare', 'PM2', 'Docker', 'CDN', 'DNS Management', 'SSL/TLS'].map(
                (skill) => (
                  <div
                    key={skill}
                    className="bg-gray-800 px-3 py-2 rounded-lg text-center text-sm hover:bg-gray-700 transition"
                  >
                    {skill}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Tools & Development */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-cyan-400">Development Tools & Practices</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {['Git', 'GitHub', 'VS Code', 'Jest', 'ESLint', 'Prettier', 'Vite', 'Webpack', 'npm', 'Postman', 'Code Review', 'Agile'].map(
                (skill) => (
                  <div
                    key={skill}
                    className="bg-gray-800 px-3 py-2 rounded-lg text-center text-sm hover:bg-gray-700 transition"
                  >
                    {skill}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
