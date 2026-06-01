import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export const DashboardLayout = () => {
	return (
		<div className="flex flex-col flex-1 overflow-hidden">
			<Header />

			<main className="flex-1 min-h-[calc(100vh-80px)] p-5">
				<Outlet />
			</main>
		</div>
	)
}
