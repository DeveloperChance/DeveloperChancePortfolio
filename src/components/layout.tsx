import { Outlet } from 'react-router'
import Header from './header'
import Footer from './footer'

export default function Layout() {
	return (
      <div className="min-h-screen flex flex-col">
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
