import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { SellDialog } from './Dialog'
import { MarketCard } from './MarketCard'

const categories = [
	{ name: 'Hammasi', value: 'all' },
	{ name: 'Qismlar', value: 'parts' },
	{ name: 'Uskunalar', value: 'equipment' },
	{ name: 'Elektrika', value: 'electricity' },
	{ name: 'Santexnika', value: 'plumbing' },
	{ name: 'Yangi', value: 'new' },
	{ name: 'Foydalanilgan', value: 'used' }
]

export const MarketContainer = () => {
	const [category, setCategory] = useState('all')

	return (
		<section>
			<div className="container">
				<div className="font-inter flex items-center justify-between mb-5">
					<div>
						<h1 className="font-semibold text-[1.375rem]">Market</h1>
						<p className="text-sm text-black/50">
							Uy ta'mirlash materiallari va jihozlari
						</p>
					</div>
					<SellDialog />
				</div>
				<div className="flex gap-2.5 mb-5 font-spline-sans">
					{categories.map(item => (
						<Button
							variant={category === item.value ? 'default' : 'secondary'}
							className={`rounded-[50px] ${item.value === 'all' ? 'bg-primary-500' : 'bg-white text-[#727272]'}`}
							onClick={() => setCategory(item.value)}
						>
							{item.name}
						</Button>
					))}
				</div>
				<div className="grid grid-cols-4 gap-x-3.75 gap-y-5">
					{[...Array(16)].map((_, index) => (
						<MarketCard key={index} />
					))}
				</div>
			</div>
		</section>
	)
}
