import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
	return (
		<section className="auth_container">
			<div className="absolute inset-0 bg-black/30 w-full h-full flex items-center justify-center">
				<Outlet />
			</div>
		</section>
	)
}
