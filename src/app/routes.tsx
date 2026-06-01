// src/app/routes.tsx
import { createBrowserRouter, Navigate } from 'react-router-dom'

// Импортируем лейауты
import { AuthLayout } from '@/components/layout/AuthLayout'
import { DashboardLayout } from '@/components/layout/DashboardLayout'

// Импортируем компоненты страниц напрямую из модулей
import { LoginForm } from '@/modules/auth/components/LoginForm'
import { RegisterForm } from '@/modules/auth/components/RegisterForm'
import { MainPage } from '@/modules/main/components'
import { MarketPage } from '@/modules/market/components'
import { OrdersPage } from '@/modules/orders/components'
import { ProfilePage } from '@/modules/profile/components'
import { ToolsPage } from '@/modules/tools/components'

export const router = createBrowserRouter([
	{
		element: <AuthLayout />,
		children: [
			{ path: '/login', element: <LoginForm /> },
			{ path: '/register', element: <RegisterForm /> }
		]
	},

	// 2. Приватные роуты панели управления (Твои колонки из Figma)
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
			}, // Перенаправление с / на /main
			{ path: 'main', element: <MainPage /> }, // Главный экран с картой
			{ path: 'orders', element: <OrdersPage /> }, // Список заказов
			{ path: 'tools', element: <ToolsPage /> }, // Инструменты/Автопарк
			{ path: 'market', element: <MarketPage /> }, // Маркетплейс
			{ path: 'profile', element: <ProfilePage /> } // Профиль пользователя
		]
	},

	// 3. Страница 404
	{ path: '*', element: <div>Страница не найдена</div> }
])
