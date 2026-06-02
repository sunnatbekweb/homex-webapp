import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { Plus } from 'lucide-react'

export const SellDialog = () => {
	return (
		<Dialog>
			<DialogTrigger>
				<Button
					size="lg"
					className="rounded-xl font-medium"
				>
					<Plus /> Sotish
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-sm font-spline-sans">
				<DialogHeader>
					<DialogTitle className="font-semibold text-xl">
						E’lon berish
					</DialogTitle>
					<DialogDescription hidden />
				</DialogHeader>

				<DialogFooter>
					<Button
						type="submit"
						size="lg"
						className="w-full"
					>
						Qo'shish
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
