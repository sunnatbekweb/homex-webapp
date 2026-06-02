import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Calendar,
	ChevronDown,
	MapPin,
	Plus,
	Upload,
	X
} from 'lucide-react'
import { type ChangeEvent, type FormEvent, useRef, useState } from 'react'

type ToolItem = {
	id: string
	title: string
	subtitle: string
	date: string
	status: string
	image: string
}

type AddressOption = {
	id: string
	label: string
}

type ToolFormState = {
	name: string
	model: string
	addressId: string
	imageFile: File | null
	imagePreview: string
}

const ADDRESS_OPTIONS: AddressOption[] = [
	{ id: 'home-yunusobod', label: 'Uyim - Yunusobod' },
	{ id: 'office-oasis', label: 'Office - Uchtepa, Oasis' },
	{ id: 'parents-yakkasaroy', label: 'Ota-onam - Yakkasaroy, Amir Te...' }
]

const INITIAL_TOOLS: ToolItem[] = Array.from({ length: 4 }, (_, index) => ({
	id: `tool-${index + 1}`,
	title: 'Samsung AR12',
	subtitle: 'Konditsioner - Invertor',
	date: '12 Mar - 2026',
	status: 'Yaxshi',
	image: '/images/conditsioner.png'
}))

const EMPTY_FORM: ToolFormState = {
	name: '',
	model: '',
	addressId: '',
	imageFile: null,
	imagePreview: ''
}

const ToolCard = ({ tool }: { tool: ToolItem }) => {
	return (
		<article className="rounded-[14px] bg-white p-2.5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
			<div className="flex items-start justify-between gap-2">
				<div className="flex min-w-0 gap-2.5">
					<div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-[#2f251b]">
						<img
							src={tool.image}
							alt={tool.title}
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="min-w-0 pt-0.5">
						<h3 className="truncate text-sm font-bold leading-5 text-[#141414]">
							{tool.title}
						</h3>
						<p className="truncate text-xs leading-4 text-dark-black-500">
							{tool.subtitle}
						</p>
						<div className="mt-0.5 flex items-center gap-1 text-xs text-dark-black-400">
							<Calendar className="size-3.5" />
							<span>{tool.date}</span>
						</div>
					</div>
				</div>
				<span className="shrink-0 rounded-full bg-additional-green-500 px-2.5 py-1 text-[11px] font-semibold leading-none text-white">
					{tool.status}
				</span>
			</div>
			<Button className="mt-3 h-10 w-full rounded-[10px] bg-primary-500 text-sm font-semibold text-white hover:bg-primary-600">
				Xizmat chaqirish
			</Button>
		</article>
	)
}

export const ToolsPage = () => {
	const fileInputRef = useRef<HTMLInputElement>(null)
	const [tools, setTools] = useState<ToolItem[]>(INITIAL_TOOLS)
	const [selectedAddressId, setSelectedAddressId] = useState(
		ADDRESS_OPTIONS[0].id
	)
	const [isAddressOpen, setIsAddressOpen] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [form, setForm] = useState<ToolFormState>(EMPTY_FORM)

	const selectedAddress =
		ADDRESS_OPTIONS.find(address => address.id === selectedAddressId) ??
		ADDRESS_OPTIONS[0]

	const canAddTool = Boolean(
		form.name.trim() && form.model.trim() && form.addressId && form.imagePreview
	)

	const closeModal = () => {
		setIsModalOpen(false)
		setForm(EMPTY_FORM)
	}

	const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]

		if (!file) return

		const reader = new FileReader()

		reader.onload = () => {
			setForm(prev => ({
				...prev,
				imageFile: file,
				imagePreview: typeof reader.result === 'string' ? reader.result : ''
			}))
		}

		reader.readAsDataURL(file)
		event.target.value = ''
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (!canAddTool) return

		setTools(prev => [
			{
				id: `tool-${Date.now()}`,
				title: form.model.trim(),
				subtitle: form.name.trim(),
				date: '12 Mar - 2026',
				status: 'Yaxshi',
				image: form.imagePreview
			},
			...prev
		])
		closeModal()
	}

	return (
		<section className="font-inter text-[#141414]">
			<div className="container">
				<div className="mb-5 flex items-start justify-between gap-4">
					<div>
						<h1 className="text-[1.375rem] font-semibold leading-7">Uskunalar</h1>
						<p className="mt-1 text-sm text-black/50">
							Kerakli uskunalar bo’yicha ustalar chaqiring
						</p>
					</div>
					<Button
						className="h-10 rounded-[10px] bg-primary-500 px-4 text-sm font-semibold text-white hover:bg-primary-600"
						onClick={() => setIsModalOpen(true)}
					>
						<Plus className="size-4" />
						Qo‘shish
					</Button>
				</div>

				<div className="relative z-20 mb-5 w-full max-w-[390px]">
					<button
						type="button"
						className="flex h-10 w-full items-center justify-between gap-3 rounded-full bg-white px-3 text-sm shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
						onClick={() => setIsAddressOpen(prev => !prev)}
					>
						<span className="flex min-w-0 items-center gap-2">
							<MapPin className="size-4 shrink-0 text-primary-500" />
							<span className="truncate font-semibold">{selectedAddress.label}</span>
						</span>
						<span className="flex shrink-0 items-center gap-2 text-xs text-dark-black-400">
							<span>Jan 6 15</span>
							<ChevronDown
								className={`size-4 transition-transform ${
									isAddressOpen ? 'rotate-180' : ''
								}`}
							/>
						</span>
					</button>

					{isAddressOpen && (
						<div className="absolute left-0 top-[calc(100%+8px)] w-full overflow-hidden rounded-[14px] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
							{ADDRESS_OPTIONS.map(address => (
								<button
									key={address.id}
									type="button"
									className="flex h-10 w-full items-center justify-between gap-3 px-4 text-left text-sm font-medium text-[#141414] hover:bg-dark-black-50"
									onClick={() => {
										setSelectedAddressId(address.id)
										setIsAddressOpen(false)
									}}
								>
									<span className="truncate">{address.label}</span>
									<span
										className={`size-3 rounded-full border ${
											address.id === selectedAddressId
												? 'border-primary-500 bg-primary-500'
												: 'border-dark-black-300'
										}`}
									/>
								</button>
							))}
						</div>
					)}
				</div>

				<div className="grid max-w-[1010px] grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
					{tools.map(tool => (
						<ToolCard
							key={tool.id}
							tool={tool}
						/>
					))}
				</div>
			</div>

			{isModalOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 py-8 backdrop-blur-[2px]"
					onMouseDown={closeModal}
				>
					<form
						className="w-full max-w-[420px] rounded-[18px] bg-white p-5 shadow-[0_24px_80px_rgba(15,23,42,0.18)]"
						onMouseDown={event => event.stopPropagation()}
						onSubmit={handleSubmit}
					>
						<div className="mb-4 flex items-start justify-between gap-4">
							<h2 className="text-lg font-bold leading-6">Yangi uskuna</h2>
							<button
								type="button"
								className="flex size-8 items-center justify-center rounded-full bg-dark-black-50 text-dark-black-500 hover:text-[#141414]"
								onClick={closeModal}
							>
								<X className="size-4" />
							</button>
						</div>

						<div className="space-y-3.5">
							<label className="block">
								<span className="mb-1.5 block text-sm font-semibold">
									Uskuna nomi
								</span>
								<Input
									value={form.name}
									placeholder="e.g. Konditsioner"
									className="h-11 rounded-xl border-transparent bg-dark-black-50 text-sm"
									onChange={event =>
										setForm(prev => ({ ...prev, name: event.target.value }))
									}
								/>
							</label>

							<label className="block">
								<span className="mb-1.5 block text-sm font-semibold">Model</span>
								<Input
									value={form.model}
									placeholder="e.g. Samsung"
									className="h-11 rounded-xl border-transparent bg-dark-black-50 text-sm"
									onChange={event =>
										setForm(prev => ({ ...prev, model: event.target.value }))
									}
								/>
							</label>

							<div>
								<span className="mb-1.5 block text-sm font-semibold">
									Uskuna rasmi
								</span>
								<input
									ref={fileInputRef}
									type="file"
									accept="image/*"
									className="hidden"
									onChange={handleImageChange}
								/>
								{form.imagePreview && (
									<div className="relative mb-2 h-24 overflow-hidden rounded-xl bg-dark-black-100">
										<img
											src={form.imagePreview}
											alt={form.imageFile?.name || 'Uskuna rasmi'}
											className="h-full w-full object-cover"
										/>
										<button
											type="button"
											className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-full bg-white text-[#141414] shadow-sm"
											onClick={() =>
												setForm(prev => ({
													...prev,
													imageFile: null,
													imagePreview: ''
												}))
											}
										>
											<X className="size-4" />
										</button>
									</div>
								)}
								<button
									type="button"
									className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-dashed border-dark-black-200 bg-white text-sm font-medium text-dark-black-400 hover:border-primary-300 hover:text-primary-500"
									onClick={() => fileInputRef.current?.click()}
								>
									<Upload className="size-4" />
									Rasm yuklash
								</button>
							</div>

							<label className="block">
								<span className="mb-1.5 block text-sm font-semibold">Manzil</span>
								<div className="relative">
									<select
										value={form.addressId}
										className="h-11 w-full appearance-none rounded-xl border border-transparent bg-dark-black-50 px-3.75 pr-10 text-sm text-[#141414] outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
										onChange={event =>
											setForm(prev => ({
												...prev,
												addressId: event.target.value
											}))
										}
									>
										<option value="">Manzil tanlang</option>
										{ADDRESS_OPTIONS.map(address => (
											<option
												key={address.id}
												value={address.id}
											>
												{address.label}
											</option>
										))}
									</select>
									<ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-dark-black-400" />
								</div>
							</label>
						</div>

						<Button
							type="submit"
							disabled={!canAddTool}
							className="mt-6 h-11 w-full rounded-xl bg-primary-500 text-sm font-semibold text-white hover:bg-primary-600 disabled:bg-dark-black-100 disabled:text-dark-black-400"
						>
							Qo‘shish
						</Button>
					</form>
				</div>
			)}
		</section>
	)
}
