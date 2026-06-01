import { PATHS } from '@/core/constants/paths'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '../ui/button'

const NAV_ITEMS = [
	{ path: PATHS.MAIN, label: 'Asosiy', icon: 'home' },
	{ path: PATHS.ORDERS, label: 'Buyurtmalarim', icon: 'box' },
	{ path: PATHS.TOOLS, label: 'Uskunalar', icon: 'brush' },
	{ path: PATHS.MARKET, label: 'Market', icon: 'market' }
]

export const Header = () => {
	return (
		<header className="h-20 flex">
			<div className="container flex items-center justify-between">
				<Link to="/">
					<img
						src="/icons/logo-main.svg"
						alt="Homex"
					/>
				</Link>
				<nav className="flex items-center gap-2">
					{NAV_ITEMS.map(item => (
						<NavLink
							key={item.path}
							to={item.path}
						>
							{({ isActive }) => (
								<Button
									variant={isActive ? 'default' : 'secondary'}
									className={`gap-2 rounded-full px-6 py-5 font-medium transition-colors ${
										isActive
											? 'bg-[#f94f1a] text-white hover:bg-[#e04314]'
											: 'bg-[#f5f5f5] text-[#2d2d2d] hover:bg-[#eaeaea]'
									}`}
								>
									<svg
										className="w-5 h-5"
										role="presentation"
										aria-hidden="true"
									>
										<use href={`/icons/icons.svg#${item.icon}`}></use>
									</svg>
									{item.label}
								</Button>
							)}
						</NavLink>
					))}
				</nav>
				<div className="flex items-center gap-3">
					<Button
						variant={'secondary'}
						className="font-semibold text-primary-500"
					>
						UZ
					</Button>
					<div className="size-10.5 rounded-full overflow-hidden">
						<img
							src="/images/avatar.jpg"
							alt="Avatar"
						/>
					</div>
				</div>
			</div>
		</header>
	)
}
