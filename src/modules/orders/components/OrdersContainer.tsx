import { Button } from '@/components/ui/button'
import { OrderCard } from './OrderCard'

export const OrdersContainer = () => {
	return (
		<section>
			<div className="container">
				<div className="font-inter mb-5">
					<h1 className="font-semibold text-[1.375rem]">Buyurtmalarim</h1>
					<p className="text-sm text-black/50">
						Barcha buyurtmalaringizni bu yerda ko’ring
					</p>
				</div>
				<div className="flex gap-2.5 mb-8 font-spline-sans">
					<Button className="rounded-[50px]">Hammasi</Button>
					<Button
						variant={'secondary'}
						className="rounded-[50px] bg-white text-[#727272]"
					>
						Faol
					</Button>
					<Button
						variant={'secondary'}
						className="rounded-[50px] bg-white text-[#727272]"
					>
						Bajarilgan
					</Button>
					<Button
						variant={'secondary'}
						className="rounded-[50px] bg-white text-[#727272]"
					>
						Bekor
					</Button>
				</div>
				<div className="grid grid-cols-3 gap-3.75">
					{[...Array(4)].map((_, index) => (
						<OrderCard key={index} />
					))}
				</div>
			</div>
		</section>
	)
}
