import { Link } from "react-router";

export default function Header() {
	return (
    <nav className="flex items-center justify-between p-3 bg-gray-800 text-white">
      <div className="text-lg font-bold">&lt;Chance Byers /&gt;</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">~/home</Link>
        <Link to="/about" className="hover:underline">~/about</Link>
        <Link to="/projects" className="hover:underline">~/projects</Link>
        <Link to="/contact" className="hover:underline">~/contact</Link>
      </div>
    </nav>
	);
}
