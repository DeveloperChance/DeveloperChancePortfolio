import { Outlet } from 'react-router'

export default function Layout() {
	return (
		<div>
			{/* Navigation */}
			{/* Navigation content goes here */}

			{/* Main Content */}
			<main>
				<Outlet />
			</main>

			{/* Footer */}
			{/* Footer content goes here */}
		</div>
	);
}
