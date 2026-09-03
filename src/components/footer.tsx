import { Link } from "react-router";

const linkClass = "text-(--text) hover:text-(--text-h) transition-colors";
const prefixClass = "text-blue-400/60";

export default function Footer() {
	return (
		<footer className="footer-border-glow flex flex-col gap-3 border-t-[0.5px] border-t-(--border) bg-(--code-bg) p-4 text-xs font-mono text-(--text) [font-variant-ligatures:none]">
			{/* Footer Branding */}
			<div className="mx-auto flex max-w-2xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-16">
				<div className="flex flex-col gap-0.5">
					<Link to="/" className="group text-(--text-h)"><span className={`${prefixClass} transition-colors group-hover:text-blue-400`}>&lt;</span>Chance Byers<span className={`${prefixClass} transition-colors group-hover:text-blue-400`}>/&gt;</span></Link>
					<p>Full Stack Developer &amp; Game Developer</p>
				</div>

				<div className="flex flex-col gap-6 sm:flex-row">
					{/* Footer Navigation */}
					<div className="flex flex-col gap-0.5">
						<p className={prefixClass}>// NAVIGATION</p>
						<Link to="/" className={linkClass}><span className={prefixClass}>~/</span>home</Link>
						<Link to="/about" className={linkClass}><span className={prefixClass}>~/</span>about</Link>
						<Link to="/projects" className={linkClass}><span className={prefixClass}>~/</span>projects</Link>
						<Link to="/contact" className={linkClass}><span className={prefixClass}>~/</span>contact</Link>
						<a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className={linkClass}><span className={prefixClass}>~/</span>sitemap</a>
					</div>

					{/* Footer Social Links */}
					<div className="flex flex-col gap-0.5">
						<p className={prefixClass}>// SOCIAL</p>
						<a href="https://github.com/DeveloperChance" target="_blank" rel="noopener noreferrer" className={linkClass}>
							<span className={prefixClass}>~/</span>github</a>
						<a href="https://www.linkedin.com/in/chance-byers-2542ba156" target="_blank" rel="noopener noreferrer" className={linkClass}>
							<span className={prefixClass}>~/</span>linkedin</a>
						<a href="https://x.com/DeveloperChance" target="_blank" rel="noopener noreferrer" className={linkClass}>
							<span className={prefixClass}>~/</span>x</a>
					</div>
				</div>
			</div>

			<div className="mx-8 flex flex-col gap-3 border-t-[0.5px] border-t-(--border) pt-3 pb-2 sm:flex-row sm:justify-between sm:pb-0">
				<p><span className={prefixClass}>//</span> &copy; {new Date().getFullYear()} Chance Byers. All rights reserved.</p>
				<p><span className={prefixClass}>$</span> built with React, TypeScript &amp; Tailwind CSS</p>
			</div>
		</footer>
	);
}
