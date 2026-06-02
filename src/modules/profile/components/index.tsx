import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Bell,
	Briefcase,
	Camera,
	CheckCircle2,
	Crown,
	Home,
	MapPin,
	MessageSquareText,
	Pencil,
	Plus,
	Send,
	Shield,
	Trash2
} from 'lucide-react'
import { type ComponentType, type FormEvent, useState } from 'react'

type ProfileTab = 'profile' | 'tariffs' | 'addresses' | 'support' | 'privacy'

type SidebarItem = {
	id: Exclude<ProfileTab, 'profile'>
	label: string
	icon: ComponentType<{ className?: string }>
}

type Plan = {
	id: string
	name: string
	price: string
	period: string
	features: string[]
	active?: boolean
}

type Address = {
	id: string
	title: string
	street: string
	icon: ComponentType<{ className?: string }>
}

type Message = {
	id: string
	text: string
	time: string
	own?: boolean
}

const SIDEBAR_ITEMS: SidebarItem[] = [
	{ id: 'tariffs', label: 'Tariflar', icon: Crown },
	{ id: 'addresses', label: 'Manzillar', icon: MapPin },
	{ id: 'support', label: 'Bildirishnomalar', icon: Bell },
	{ id: 'support', label: 'Qo‘llab-quvvatlash', icon: MessageSquareText },
	{ id: 'privacy', label: 'Maxfiylik', icon: Shield }
]

const PLANS: Plan[] = [
	{
		id: 'free',
		name: 'Oddiy',
		price: '0',
		period: 'so‘m/oy',
		features: ['5% chegirma', 'Standart qo‘llab-quvvatlash']
	},
	{
		id: 'standard',
		name: 'Oddiy',
		price: '99 000',
		period: 'so‘m/oy',
		features: ['15% chegirma', '24/7 qo‘llab-quvvatlash', 'Tezkor SOS', 'Bonus 5%'],
		active: true
	},
	{
		id: 'vip',
		name: 'VIP',
		price: '199 000',
		period: 'so‘m/oy',
		features: ['25% chegirma', 'Shaxsiy menejer', 'Bepul tashrif']
	}
]

const ADDRESSES: Address[] = [
	{ id: 'home', title: 'Uy', street: '112A, Cambridge Street', icon: Home },
	{ id: 'work', title: 'Ish', street: '112A, Cambridge Street', icon: MapPin },
	{ id: 'other', title: 'Boshqa uy', street: '112A, Cambridge Street', icon: Briefcase }
]

const INITIAL_MESSAGES: Message[] = [
	{
		id: 'm1',
		text: 'Hey guys! Just snagged a UI design toolkit. Envato has really upped their game. Who else is loving the variety?',
		time: '10:43'
	},
	{
		id: 'm2',
		text: 'Puke, there are some amazing photography courses! I’ll shoot you some links.',
		time: '10:43',
		own: true
	},
	{
		id: 'm3',
		text: 'Hey all! Just joined the conversation. I’m curious, any recommendations for a photography course? Looking to level up my skills!',
		time: '10:43'
	},
	{
		id: 'm4',
		text: 'Totally agree, Maria! I’m actually working on a project using the audio tracks I found on Envato Elements. It’s a game-changer for content creators.',
		time: '10:43'
	},
	{
		id: 'm5',
		text: 'Puke, there are some amazing photography courses! I’ll shoot you some links.',
		time: '10:43',
		own: true
	}
]

const ProfileSidebar = ({
	activeTab,
	notifications,
	onTabChange,
	onNotificationsChange
}: {
	activeTab: ProfileTab
	notifications: boolean
	onTabChange: (tab: ProfileTab) => void
	onNotificationsChange: (value: boolean) => void
}) => {
	return (
		<aside className="w-full shrink-0 rounded-[14px] bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.03)] lg:w-[260px]">
			<div className="mb-6 flex items-center gap-3">
				<img
					src="/images/avatar.jpg"
					alt="Mahbuba Aripova"
					className="size-12 rounded-full object-cover"
				/>
				<div className="min-w-0 flex-1">
					<p className="truncate text-sm font-bold text-[#141414]">
						Mahbuba Aripova
					</p>
					<p className="truncate text-xs font-medium text-dark-black-400">
						+998 90 123 45 67
					</p>
				</div>
				<button
					type="button"
					className="flex size-7 items-center justify-center rounded-full text-primary-500 hover:bg-primary-50"
					onClick={() => onTabChange('profile')}
				>
					<Pencil className="size-4" />
				</button>
			</div>

			<nav className="space-y-1.5">
				{SIDEBAR_ITEMS.map((item, index) => {
					const Icon = item.icon
					const isNotification = index === 2
					const isActive =
						activeTab === item.id &&
						(!isNotification || item.label !== 'Bildirishnomalar')

					if (isNotification) {
						return (
							<div
								key={`${item.id}-${item.label}`}
								className="flex h-10 items-center justify-between rounded-[8px] px-3 text-sm font-semibold text-[#141414]"
							>
								<span className="flex items-center gap-2.5">
									<Icon className="size-4 text-primary-500" />
									{item.label}
								</span>
								<button
									type="button"
									className={`relative h-5 w-9 rounded-full transition-colors ${
										notifications ? 'bg-primary-500' : 'bg-dark-black-200'
									}`}
									onClick={() => onNotificationsChange(!notifications)}
								>
									<span
										className={`absolute top-1/2 size-4 -translate-y-1/2 rounded-full bg-white transition-transform ${
											notifications ? 'translate-x-[18px]' : 'translate-x-0.5'
										}`}
									/>
								</button>
							</div>
						)
					}

					return (
						<button
							key={`${item.id}-${item.label}`}
							type="button"
							className={`flex h-10 w-full items-center gap-2.5 rounded-[8px] px-3 text-left text-sm font-semibold transition-colors ${
								isActive
									? 'bg-primary-50 text-primary-500'
									: 'text-[#141414] hover:bg-primary-50 hover:text-primary-500'
							}`}
							onClick={() => onTabChange(item.id)}
						>
							<Icon className="size-4 text-primary-500" />
							{item.label}
						</button>
					)
				})}
			</nav>
		</aside>
	)
}

const ProfileInfo = () => {
	return (
		<div className="flex min-h-[700px] flex-col rounded-[14px] bg-white p-5">
			<h1 className="text-[1.375rem] font-bold leading-7">Profil ma’lumotlari</h1>

			<div className="mt-10 flex justify-center">
				<div className="relative">
					<img
						src="/images/avatar.jpg"
						alt="Profile"
						className="size-20 rounded-full object-cover"
					/>
					<button
						type="button"
						className="absolute -bottom-0.5 -right-0.5 flex size-7 items-center justify-center rounded-full border-2 border-white bg-primary-500 text-white"
					>
						<Camera className="size-3.5" />
					</button>
				</div>
			</div>

			<div className="mt-8 space-y-4">
				<label className="block">
					<span className="mb-2 block text-sm font-semibold">Ism</span>
					<Input
						defaultValue="Sherzod"
						className="h-11 rounded-xl border-transparent bg-dark-black-50 text-sm"
					/>
				</label>
				<label className="block">
					<span className="mb-2 block text-sm font-semibold">Familiya</span>
					<Input
						defaultValue="Qosimov"
						className="h-11 rounded-xl border-transparent bg-dark-black-50 text-sm"
					/>
				</label>
				<label className="block">
					<span className="mb-2 block text-sm font-semibold">Telefon nomer</span>
					<Input
						defaultValue="+998 90 123 45 67"
						className="h-11 rounded-xl border-transparent bg-dark-black-50 text-sm"
					/>
				</label>
			</div>

			<div className="mt-auto grid grid-cols-1 gap-3 sm:grid-cols-2">
				<Button
					variant="secondary"
					className="h-11 rounded-[10px] bg-primary-100 text-sm font-bold text-primary-500 hover:bg-primary-100/80"
				>
					Hisobni o‘chirish
				</Button>
				<Button className="h-11 rounded-[10px] bg-primary-500 text-sm font-bold text-white hover:bg-primary-600">
					O‘zgarishlarni saqlash
				</Button>
			</div>
		</div>
	)
}

const Tariffs = () => {
	return (
		<div className="min-h-[700px] rounded-[14px] bg-white p-5">
			<h1 className="mb-6 text-[1.375rem] font-bold leading-7">Tariflar</h1>
			<div className="grid gap-4 xl:grid-cols-3">
				{PLANS.map(plan => (
					<article
						key={plan.id}
						className={`min-h-[210px] rounded-[14px] p-5 ${
							plan.active ? 'bg-primary-500 text-white' : 'bg-dark-black-50'
						}`}
					>
						<div className="mb-3 flex items-start justify-between gap-3">
							<div>
								<h2 className="text-base font-bold">{plan.name}</h2>
								<div className="mt-1 flex items-end gap-1">
									<span className="text-3xl font-bold leading-none">
										{plan.price}
									</span>
									<span
										className={`text-sm ${
											plan.active ? 'text-white/60' : 'text-dark-black-400'
										}`}
									>
										{plan.period}
									</span>
								</div>
							</div>
							{plan.active && (
								<span className="text-xs font-bold uppercase tracking-[0.12em]">
									Faol tarif
								</span>
							)}
						</div>

						<ul className="mb-8 space-y-2">
							{plan.features.map(feature => (
								<li
									key={feature}
									className="flex items-center gap-2 text-sm font-semibold"
								>
									<CheckCircle2
										className={`size-4 ${
											plan.active ? 'text-white/80' : 'text-primary-300'
										}`}
									/>
									{feature}
								</li>
							))}
						</ul>

						{!plan.active && (
							<Button className="h-10 w-full rounded-[9px] bg-primary-500 text-sm font-bold text-white hover:bg-primary-600">
								Tanlash
							</Button>
						)}
					</article>
				))}
			</div>
		</div>
	)
}

const Addresses = () => {
	return (
		<div className="min-h-[700px] rounded-[14px] bg-white p-5">
			<h1 className="mb-6 text-[1.375rem] font-bold leading-7">Manzillar</h1>
			<div className="grid gap-4 lg:grid-cols-2">
				{ADDRESSES.map(address => {
					const Icon = address.icon

					return (
						<article
							key={address.id}
							className="flex h-16 items-center gap-3 rounded-[10px] bg-dark-black-50 px-4"
						>
							<div className="flex size-9 items-center justify-center rounded-full bg-primary-100 text-primary-500">
								<Icon className="size-4" />
							</div>
							<div>
								<h2 className="text-sm font-bold">{address.title}</h2>
								<p className="text-xs font-medium text-dark-black-400">
									{address.street}
								</p>
							</div>
						</article>
					)
				})}
			</div>
			<Button
				variant="secondary"
				className="mt-4 h-10 w-full rounded-[9px] bg-primary-50 text-sm font-bold text-primary-500 hover:bg-primary-100"
			>
				<Plus className="size-4" />
				Manzil qo‘shish
			</Button>
		</div>
	)
}

const Support = () => {
	const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
	const [message, setMessage] = useState('')

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (!message.trim()) return

		setMessages(prev => [
			...prev,
			{
				id: `message-${Date.now()}`,
				text: message.trim(),
				time: '10:43',
				own: true
			}
		])
		setMessage('')
	}

	return (
		<div className="rounded-[14px] bg-white p-5">
			<h1 className="mb-5 text-[1.375rem] font-bold leading-7">
				Qo‘llab quvvatlash
			</h1>
			<div className="overflow-hidden rounded-[14px] border border-dark-black-100">
				<div className="flex h-16 items-center gap-3 border-b border-dark-black-100 px-4">
					<img
						src="/images/avatar.jpg"
						alt="Munira Bobojonova"
						className="size-10 rounded-full object-cover"
					/>
					<div>
						<h2 className="text-sm font-bold">Munira Bobojonova</h2>
						<p className="text-xs font-semibold text-additional-green-500">
							Online
						</p>
					</div>
				</div>

				<div className="max-h-[525px] min-h-[525px] overflow-y-auto bg-primary-50/45 p-4">
					<div className="space-y-4">
						{messages.map(item => (
							<div
								key={item.id}
								className={`flex ${item.own ? 'justify-end' : 'justify-start'}`}
							>
								<div
									className={`max-w-[72%] ${
										item.own ? 'text-right' : 'text-left'
									}`}
								>
									<div
										className={`rounded-[10px] px-4 py-3 text-sm font-medium leading-5 ${
											item.own
												? 'bg-primary-500 text-white'
												: 'bg-white text-[#141414]'
										}`}
									>
										{item.text}
									</div>
									<div className="mt-1 text-xs font-medium text-dark-black-300">
										{item.time}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<form
					className="flex items-center gap-3 border-t border-dark-black-100 p-3"
					onSubmit={handleSubmit}
				>
					<Input
						value={message}
						placeholder="Xabar yozing..."
						className="h-11 rounded-full border-dark-black-200 bg-white text-sm"
						onChange={event => setMessage(event.target.value)}
					/>
					<Button
						type="submit"
						size="icon"
						className="size-11 rounded-full bg-primary-500 text-white hover:bg-primary-600"
					>
						<Send className="size-5" />
					</Button>
				</form>
			</div>
		</div>
	)
}

const Privacy = () => {
	return (
		<div className="min-h-[700px] rounded-[14px] bg-white p-5">
			<h1 className="mb-4 text-[1.375rem] font-bold leading-7">Maxfiylik</h1>
			<div className="rounded-[12px] bg-dark-black-50 p-4">
				<div className="flex items-center gap-3">
					<div className="flex size-10 items-center justify-center rounded-full bg-primary-100 text-primary-500">
						<Shield className="size-5" />
					</div>
					<div>
						<h2 className="text-sm font-bold">Shaxsiy ma’lumotlar himoyasi</h2>
						<p className="text-xs font-medium text-dark-black-400">
							Profil sozlamalari va xavfsizlik parametrlari.
						</p>
					</div>
				</div>
				<Button
					variant="secondary"
					className="mt-5 h-10 rounded-[9px] bg-primary-50 text-sm font-bold text-primary-500 hover:bg-primary-100"
				>
					<Trash2 className="size-4" />
					Ma’lumotlarni o‘chirish
				</Button>
			</div>
		</div>
	)
}

export const ProfilePage = () => {
	const [activeTab, setActiveTab] = useState<ProfileTab>('profile')
	const [notifications, setNotifications] = useState(true)

	return (
		<section className="font-inter text-[#141414]">
			<div className="container">
				<div className="grid gap-5 lg:grid-cols-[260px_minmax(0,1fr)]">
					<ProfileSidebar
						activeTab={activeTab}
						notifications={notifications}
						onTabChange={setActiveTab}
						onNotificationsChange={setNotifications}
					/>
					<div className="min-w-0">
						{activeTab === 'profile' && <ProfileInfo />}
						{activeTab === 'tariffs' && <Tariffs />}
						{activeTab === 'addresses' && <Addresses />}
						{activeTab === 'support' && <Support />}
						{activeTab === 'privacy' && <Privacy />}
					</div>
				</div>
			</div>
		</section>
	)
}
