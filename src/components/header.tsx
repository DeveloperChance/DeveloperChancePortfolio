import { Link, NavLink } from "react-router";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
	`group px-2 py-1 rounded-t-sm border-b-[1.5px] transition-colors ${
		isActive
			? "text-(--text-h) border-blue-500"
			: "border-transparent hover:text-(--text-h) hover:bg-white/5"
	}`;

const pathPrefixClass = ({ isActive }: { isActive: boolean }) =>
	`transition-colors ${
		isActive ? "text-blue-400/60" : "text-(--text) group-hover:text-blue-400"
	}`;

export default function Header() {
	return (
		<nav className="nav-border-glow flex items-center justify-between py-3 px-8 bg-(--code-bg) border-b-[0.5px] border-b-(--border) [font-variant-ligatures:none]">
			<Link to="/" className="group text-lg font-mono transition-[filter] duration-300 hover:drop-shadow-[0_0_3px_rgba(59,130,246,0.35)]">
				<span className="text-blue-500 transition-colors group-hover:text-blue-400">&lt;</span>
				<span className="relative inline-block font-sans font-bold p-1">
					<span className="text-(--text-h)">Chance Byers</span>
					<span aria-hidden="true" className="absolute inset-0 p-1 bg-linear-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">Chance Byers</span>
				</span>
				<span className="text-blue-500 transition-colors group-hover:text-blue-400">/&gt;</span>
			</Link>
			<div className="space-x-1 text-(--text) text-sm font-mono">
				<NavLink to="/" end className={navLinkClass}>{({ isActive }) => <><span className={pathPrefixClass({ isActive })}>~/</span>home</>}</NavLink>
				<NavLink to="/about" className={navLinkClass}>{({ isActive }) => <><span className={pathPrefixClass({ isActive })}>~/</span>about</>}</NavLink>
				<NavLink to="/projects" className={navLinkClass}>{({ isActive }) => <><span className={pathPrefixClass({ isActive })}>~/</span>projects</>}</NavLink>
				<NavLink to="/contact" className={navLinkClass}>{({ isActive }) => <><span className={pathPrefixClass({ isActive })}>~/</span>contact</>}</NavLink>
			</div>
		</nav>
	);
}
