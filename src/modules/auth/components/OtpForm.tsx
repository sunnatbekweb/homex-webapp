import { Button } from '@/components/ui/button'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot
} from '@/components/ui/input-otp'
import { Controller, useForm } from 'react-hook-form'

interface OTPForm {
	otp: string
}

export const OtpForm = () => {
	const {
		control,
		handleSubmit,
		formState: { isValid }
	} = useForm<OTPForm>({
		mode: 'onChange',
		defaultValues: {
			otp: ''
		}
	})

	const onSubmit = (data: OTPForm) => {
		console.log('Введенный OTP:', data.otp)
	}

	return (
		<section className="auth_container">
			<div className="absolute inset-0 bg-black/30 w-full h-full flex items-center justify-center">
				<div className="w-full">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="max-w-105 w-full mx-auto rounded-3xl p-5 bg-white flex flex-col gap-y-3.75"
					>
						<h2 className="font-semibold text-xl text-center">
							Tasdiqlovchi kod
						</h2>

						<Controller
							name="otp"
							control={control}
							rules={{ required: true, minLength: 6 }}
							render={({ field }) => (
								<InputOTP
									maxLength={6}
									value={field.value}
									onChange={field.onChange}
								>
									<InputOTPGroup className="mx-auto gap-2.5">
										<InputOTPSlot index={0} />
										<InputOTPSlot index={1} />
										<InputOTPSlot index={2} />
										<InputOTPSlot index={3} />
										<InputOTPSlot index={4} />
										<InputOTPSlot index={5} />
									</InputOTPGroup>
								</InputOTP>
							)}
						/>
						<p className="leading-none text-[#9AA0A6] text-center">
							Hisobdan o’tkan telefon raqamingizni kiriting. Biz tasdiqlov kodi
							yuboramiz.
						</p>
						<Button
							variant={'default'}
							size={'lg'}
							disabled={!isValid}
						>
							Davom etish
						</Button>
					</form>
				</div>
			</div>
		</section>
	)
}
