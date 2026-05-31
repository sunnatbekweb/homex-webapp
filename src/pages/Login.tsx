import { Phone } from 'lucide-react'
import { Button } from '../components/ui/button'
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput
} from '../components/ui/input-group'

export const Login = () => {
	return (
		<section className="auth_container">
			<div className="absolute inset-0 bg-black/30 w-full h-full flex items-center justify-center">
				<div className="max-w-105 w-full rounded-3xl p-5 bg-white flex flex-col gap-y-3.75">
					<h2 className="font-semibold text-xl text-center">Hisobga kirish</h2>
					<InputGroup>
						<InputGroupInput
							type="tel"
							placeholder="Sizning telefon raqam"
						/>
						<InputGroupAddon>
							<Phone
								fill="#9AA0A6"
								stroke="#9AA0A6"
							/>
						</InputGroupAddon>
					</InputGroup>
					<p className="leading-none text-[#9AA0A6] text-center">
						Hisobdan o’tkan telefon raqamingizni kiriting. Biz tasdiqlov kodi
						yuboramiz.
					</p>
					<Button
						variant={'default'}
						size={'lg'}
						disabled
						className=''
					>
						Davom etish
					</Button>
				</div>
			</div>
		</section>
	)
}
