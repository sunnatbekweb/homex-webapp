import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export const DashboardLayout = () => {
	return (
		<div className="flex flex-col flex-1 overflow-hidden">
			<Header />

			<main className="flex-1 overflow-y-auto p-6">
				<Outlet />
			</main>
		</div>
	)
}
