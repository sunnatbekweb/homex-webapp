import { createBrowserRouter, Navigate } from 'react-router-dom'

// Импортируем лейауты
import { AuthLayout } from '@/components/layout/AuthLayout'
import { DashboardLayout } from '@/components/layout/DashboardLayout'

// Импортируем компоненты страниц напрямую из модулей
import { LoginForm } from '@/modules/auth/components/LoginForm'
import { RegisterForm } from '@/modules/auth/components/RegisterForm'
import { MapContainer } from '@/modules/main/components/MapContainer'
import { MarketContainer } from '@/modules/market/components/MarketContainer'
import { OrdersContainer } from '@/modules/orders/components/OrdersContainer'
import { ProfileContainer } from '@/modules/profile/components/ProfileContainer'
import { ToolsContainer } from '@/modules/tools/components/ToolsContainer'

export const router = createBrowserRouter([
	{
		element: <AuthLayout />,
		children: [
			{ path: '/login', element: <LoginForm /> },
			{ path: '/register', element: <RegisterForm /> }
		]
	},

	{
		path: '/',
		element: <DashboardLayout />,
		children: [
			{
				index: true,
				element: (
					<Navigate
						to="/main"
						replace
					/>
				)
			},
			{ path: 'main', element: <MapContainer /> },
			{ path: 'orders', element: <OrdersContainer /> },
			{ path: 'tools', element: <ToolsContainer /> },
			{ path: 'market', element: <MarketContainer /> },
			{ path: 'profile', element: <ProfileContainer /> }
		]
	},

	// 3. Страница 404
	{ path: '*', element: <div>Страница не найдена</div> }
])
