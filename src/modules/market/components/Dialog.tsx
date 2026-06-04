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
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Plus, Upload } from 'lucide-react'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

type Condition = 'yangi' | 'ishlatigan'

interface Values {
	name: string
	// status: string
	price: string
	description: string
}

export const SellDialog = () => {
	const { register, handleSubmit } = useForm<Values>({
		mode: 'onChange'
	})
	const [condition, setCondition] = useState<Condition>('yangi')
	const [preview, setPreview] = useState<string | null>(null)
	const fileInputRef = useRef<HTMLInputElement>(null)

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (!file) return
		const url = URL.createObjectURL(file)
		setPreview(url)
	}

	const onSubmit = (data: Values) => {
		console.log(data)
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
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
						E'lon berish
					</DialogTitle>
					<DialogDescription hidden />
				</DialogHeader>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col gap-y-5"
				>
					{/* Mahsulot nomi */}
					<Field>
						<FieldLabel>Mahsulot nomi</FieldLabel>
						<Input
							type="text"
							{...register('name', { required: true })}
							placeholder="e.g. Konditsioner"
						/>
					</Field>

					{/* Mahsulot holati */}
					<Field>
						<FieldLabel>Mahsulot holati</FieldLabel>
						<div className="rounded-2xl overflow-hidden bg-dark-black-50">
							{(['yangi', 'ishlatigan'] as Condition[]).map((value, idx) => (
								<label
									key={value}
									className={[
										'flex items-center justify-between px-4 py-3.5 cursor-pointer select-none transition-colors hover:bg-dark-black-100',
										idx === 0 ? '' : 'border-t border-[#EAEAEA]'
									].join(' ')}
								>
									<span className="text-sm font-medium capitalize">
										{value === 'yangi' ? 'Yangi' : 'Ishlatigan'}
									</span>
									<span
										className={[
											'w-4 h-4 rounded-full border flex items-center justify-center transition-colors',
											condition === value
												? 'border-5 border-orange-500'
												: 'border-muted-foreground/40'
										].join(' ')}
									></span>
									<input
										type="radio"
										name="condition"
										value={value}
										checked={condition === value}
										onChange={() => setCondition(value)}
										className="sr-only"
									/>
								</label>
							))}
						</div>
					</Field>

					{/* Uskuna rasmi */}
					<Field>
						<FieldLabel>Uskuna rasmi</FieldLabel>
						<button
							type="button"
							onClick={() => fileInputRef.current?.click()}
							className={[
								'w-full rounded-2xl border-2 border-dashed border-dark-black-200 bg-white',
								'transition-colors hover:bg-dark-black-50',
								preview ? 'p-0' : 'py-4.5'
							].join(' ')}
						>
							{preview ? (
								<img
									src={preview}
									alt="preview"
									className="w-full h-40 object-cover rounded-xl"
								/>
							) : (
								<span className="flex items-center justify-center gap-2 text-dark-black-300">
									<Upload className="w-5 h-5" />
									<span className="text-sm">Rasm yuklash</span>
								</span>
							)}
						</button>
						<input
							ref={fileInputRef}
							type="file"
							accept="image/*"
							className="hidden"
							onChange={handleFileChange}
						/>
					</Field>

					{/* Narxi */}
					<Field>
						<FieldLabel>Narxi</FieldLabel>
						<Input
							type="number"
							{...register('price', { required: true })}
							placeholder="e.g. 2 000 000"
						/>
					</Field>

					<Field>
						<FieldLabel>Tavsif</FieldLabel>
						<Textarea
							{...register('description', { required: true })}
							placeholder="Mahsulot haqida qisqa ma’lumot"
						/>
					</Field>

					<DialogFooter>
						<Button
							type="submit"
							size="lg"
							className="w-full"
						>
							Qo'shish
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}
