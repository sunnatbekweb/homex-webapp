import { Button } from '@/components/ui/button'
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput
} from '@/components/ui/input-group'
import { User } from 'lucide-react'
import { useForm } from 'react-hook-form'

interface RegisterForm {
	name: string
	surname: string
}
export const RegisterForm = () => {
	const { register, handleSubmit, formState } = useForm<RegisterForm>({
		mode: 'onChange'
	})

	const onSubmit = (data: RegisterForm) => {
		console.log(data)
	}
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="max-w-105 w-full rounded-3xl p-5 bg-white flex flex-col gap-y-3.75"
		>
			<h2 className="font-semibold text-xl text-center">Hisob ochish</h2>
			<InputGroup className="group">
				<InputGroupInput
					type="text"
					placeholder="Ism"
					{...register('name', { required: true })}
				/>
				<InputGroupAddon>
					<User className="text-dark-black-500 fill-dark-black-500 transition-colors duration-200 group-focus-within:text-primary-500 group-focus-within:fill-primary-500" />
				</InputGroupAddon>
			</InputGroup>
			<InputGroup className="group">
				<InputGroupInput
					type="text"
					placeholder="Familiya"
					{...register('surname', { required: true })}
				/>
				<InputGroupAddon>
					<User className="text-dark-black-500 fill-dark-black-500 transition-colors duration-200 group-focus-within:text-primary-500 group-focus-within:fill-primary-500" />
				</InputGroupAddon>
			</InputGroup>

			<Button
				variant={'default'}
				size={'lg'}
				disabled={!formState.isValid}
			>
				Saqlash
			</Button>
		</form>
	)
}
