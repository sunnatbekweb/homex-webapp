import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'

export const MarketCard = () => {
	return (
		<div className="bg-white rounded-xl overflow-hidden font-inter">
			<div>
				<img
					src="/images/market_card.png"
					alt="Card image"
				/>
			</div>
			<div className="p-3">
				<div>
					<h5 className="font-semibold mb-2">Kran to'plami (oltin)</h5>
					<p className="text-sm text-muted-foreground">
						Zamonaviy dizayn, yuqori sifat, uzun ishlash muddati
					</p>
					<div className="flex items-center justify-between mt-3">
						<div className="flex items-center gap-1">
							<Star className="text-yellow-400 fill-current size-4.5" />
							<span className="font-medium">4.5</span>
							<span className="text-sm text-black/50 ml-1">(120)</span>
						</div>
						<div className="font-semibold text-lg text-primary-500">
							850 000 <span className="font-normal text-sm">so’m</span>
						</div>
					</div>
				</div>
				<Button
					size="lg"
					className="w-full bg-primary-500/10 text-primary-500 hover:text-white mt-3"
				>
					Sotib olish
				</Button>
			</div>
		</div>
	)
}
