import { Button } from '@/components/ui/button'

export const OrderCard = () => {
	return (
		<div className="p-4 rounded-[20px] bg-white font-spline-sans">
			<div className="flex items-center justify-between mb-5">
				<div>
					<h5 className="font-semibold">Konditsioner tamirlash</h5>
					<span className="text-sm text-dark-black-400">#403400</span>
				</div>
				<Button
					variant={'secondary'}
					className="rounded-full bg-additional-green-500 text-white hover:bg-additional-green-500"
				>
					Yakunlangan
				</Button>
			</div>
			<div className="font-semibold text-lg text-primary-500">
				285 000{' '}
				<span className="font-normal text-sm text-dark-black-400">so'm</span>
			</div>
			<hr className="border-dark-black-50 my-3.75" />
			<div className="flex items-end justify-between">
				<div>
					<span className="text-xs">Usta:</span>
					<p className="font-semibold">
						Shuhrat Rahimov{' '}
						<span className="text-sm text-additional-yellow-400">(yuqori)</span>
					</p>
				</div>
				<div className="flex flex-col">
					<span className="text-xs text-end">Sana:</span>
					<p className="font-semibold text-end">14 Aug 2024</p>
				</div>
			</div>
		</div>
	)
}
