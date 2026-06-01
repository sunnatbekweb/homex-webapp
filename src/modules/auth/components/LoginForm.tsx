import { Button } from '@/components/ui/button'
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput
} from '@/components/ui/input-group'
import { Phone } from 'lucide-react'
import { useForm } from 'react-hook-form'

interface LoginForm {
	phone: string
}

export const LoginForm = () => {
	const { register, handleSubmit, formState } = useForm<LoginForm>({
		mode: 'onChange'
	})

	const onSubmit = (data: LoginForm) => {
		console.log(data)
	}
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="max-w-105 w-full rounded-3xl p-5 bg-white flex flex-col gap-y-3.75"
		>
			<h2 className="font-semibold text-xl text-center">Hisobga kirish</h2>
			<InputGroup className="group">
				<InputGroupInput
					type="tel"
					placeholder="Sizning telefon raqam"
					{...register('phone', { required: true })}
				/>
				<InputGroupAddon>
					<Phone className="text-dark-black-500 fill-dark-black-500 transition-colors duration-200 group-focus-within:text-primary-500 group-focus-within:fill-primary-500" />
				</InputGroupAddon>
			</InputGroup>
			<p className="leading-none text-[#9AA0A6] text-center">
				Hisobdan o’tkan telefon raqamingizni kiriting. Biz tasdiqlov kodi
				yuboramiz.
			</p>
			<Button
				variant={'default'}
				size={'lg'}
				disabled={!formState.isValid}
			>
				Davom etish
			</Button>
		</form>
	)
}
