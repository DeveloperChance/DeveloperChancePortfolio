import { Link } from "react-router";

export default function Footer() {
	return (
		<footer className="flex flex-col p-3 bg-gray-800 text-white">
			{/* Footer Branding */}
			<div className="flex flex-row justify-around mb-3">
				<div className="flex flex-col">
					<p>&lt;Chance Byers /&gt;</p>
					<p>Full Stack Developer & Game Developer</p>
				</div>

				{/* Footer Navigation */}
				<div className="flex flex-col">
					<p>// Navigation</p>
					<Link to="/" className="hover:underline">~/home</Link>
					<Link to="/about" className="hover:underline">~/about</Link>
					<Link to="/projects" className="hover:underline">~/projects</Link>
					<Link to="/contact" className="hover:underline">~/contact</Link>
					<a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:underline">~/sitemap</a>
				</div>

				{/* Footer Social Links */}
				<div className="flex flex-col">
					<p>// Social</p>
					<a href="https://github.com/DeveloperChance" target="_blank" rel="noopener noreferrer" className="hover:underline">~/github</a>
					<a href="https://www.linkedin.com/in/chance-byers-2542ba156" target="_blank" rel="noopener noreferrer" className="hover:underline">~/linkedin</a>
					<a href="https://x.com/DeveloperChance" target="_blank" rel="noopener noreferrer" className="hover:underline">~/x</a>
				</div>

			</div>

			<div className="flex flex-row justify-around">
				<div>
					<p>// &copy; {new Date().getFullYear()} Chance Byers. All rights reserved.</p>
				</div>
				<div>
					<p>$ built with React, TypeScript & Tailwind CSS</p>
				</div>
			</div>
		</footer>
	);
}
