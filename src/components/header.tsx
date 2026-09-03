import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
	`group px-2 py-1 rounded-t-sm border-b-[1.5px] transition-colors ${
		isActive
			? "text-(--text-h) border-blue-500"
			: "border-transparent hover:text-(--text-h) hover:bg-white/5"
	}`;

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
	`group px-4 py-2 border-l-[1.5px] transition-colors ${
		isActive
			? "text-(--text-h) border-blue-500 bg-white/5"
			: "border-transparent hover:text-(--text-h) hover:bg-white/5"
	}`;

const pathPrefixClass = ({ isActive }: { isActive: boolean }) =>
	`transition-colors ${
		isActive ? "text-blue-400/60" : "text-(--text) group-hover:text-blue-400"
	}`;

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();
	const navRef = useRef<HTMLElement>(null);

	useEffect(() => {
		setIsOpen(false);
	}, [location.pathname]);

	useEffect(() => {
		if (!isOpen) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [isOpen]);

	return (
		<nav ref={navRef} className="nav-border-glow relative flex items-center justify-between py-3 px-8 bg-(--code-bg) border-b-[0.5px] border-b-(--border) [font-variant-ligatures:none]">
			<Link to="/" className="group text-lg font-mono transition-[filter] duration-300 hover:drop-shadow-[0_0_3px_rgba(59,130,246,0.35)]">
				<span className="text-blue-500 transition-colors group-hover:text-blue-400">&lt;</span>
				<span className="relative inline-block font-sans font-bold p-1">
					<span className="text-(--text-h)">Chance Byers</span>
					<span aria-hidden="true" className="absolute inset-0 p-1 bg-linear-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">Chance Byers</span>
				</span>
				<span className="text-blue-500 transition-colors group-hover:text-blue-400">/&gt;</span>
			</Link>

			<div className="hidden md:block space-x-1 text-(--text) text-sm font-mono">
				<NavLink to="/" end className={navLinkClass}>{({ isActive }) => <><span className={pathPrefixClass({ isActive })}>~/</span>home</>}</NavLink>
				<NavLink to="/about" className={navLinkClass}>{({ isActive }) => <><span className={pathPrefixClass({ isActive })}>~/</span>about</>}</NavLink>
				<NavLink to="/projects" className={navLinkClass}>{({ isActive }) => <><span className={pathPrefixClass({ isActive })}>~/</span>projects</>}</NavLink>
				<NavLink to="/contact" className={navLinkClass}>{({ isActive }) => <><span className={pathPrefixClass({ isActive })}>~/</span>contact</>}</NavLink>
			</div>

			<button
				type="button"
				onClick={() => setIsOpen((prev) => !prev)}
				aria-label={isOpen ? "Close menu" : "Open menu"}
				aria-expanded={isOpen}
				aria-controls="mobile-menu"
				className="group md:hidden relative z-10 flex flex-col items-center justify-center gap-1.5 w-8 h-8 cursor-pointer rounded-sm bg-white/3 transition-colors hover:bg-white/5"
			>
				<span className={`h-[1.5px] w-6 bg-(--text) transition-all duration-300 ease-in-out group-hover:bg-blue-400 ${isOpen ? "translate-y-[7.5px] rotate-45" : ""}`} />
				<span className={`h-[1.5px] w-6 bg-(--text) transition-all duration-300 ease-in-out group-hover:bg-blue-400 ${isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"}`} />
				<span className={`h-[1.5px] w-6 bg-(--text) transition-all duration-300 ease-in-out group-hover:bg-blue-400 ${isOpen ? "translate-y-[-7.5px] -rotate-45" : ""}`} />
			</button>

			<div
				id="mobile-menu"
				className={`md:hidden grid absolute inset-x-0 top-full bg-(--code-bg) border-b-[0.5px] border-b-(--border) text-(--text) text-sm font-mono shadow-[0_16px_24px_-12px_rgba(0,0,0,0.5)] transition-[grid-template-rows] duration-300 ease-in-out ${
					isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
				}`}
			>
				<div className="overflow-hidden text-left">
					<p className="px-4 pt-3 pb-1 text-xs text-blue-400/60">// MENU</p>
					<div className="flex flex-col">
						<NavLink to="/" end className={mobileNavLinkClass}>{({ isActive }) => <><span className={pathPrefixClass({ isActive })}>~/</span>home</>}</NavLink>
						<NavLink to="/about" className={mobileNavLinkClass}>{({ isActive }) => <><span className={pathPrefixClass({ isActive })}>~/</span>about</>}</NavLink>
						<NavLink to="/projects" className={mobileNavLinkClass}>{({ isActive }) => <><span className={pathPrefixClass({ isActive })}>~/</span>projects</>}</NavLink>
						<NavLink to="/contact" className={mobileNavLinkClass}>{({ isActive }) => <><span className={pathPrefixClass({ isActive })}>~/</span>contact</>}</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
}
