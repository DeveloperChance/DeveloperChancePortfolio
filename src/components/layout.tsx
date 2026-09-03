import { Outlet } from 'react-router'
import Background from './background'
import Header from './header'
import Footer from './footer'

export default function Layout() {
	return (
      <div className="min-h-screen flex flex-col">
			<Background />

			{/* Navigation */}
			<Header />

			{/* Main Content */}
			<main className="flex-1 p-4">
				<Outlet />
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}
