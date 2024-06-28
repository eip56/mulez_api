import Image from 'next/image';
import LoginForm from '../../components/LoginForm';
import Mule from '../../../public/logo.svg';

export default function Login() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24 bg-mainbg'>
			<div className='flex min-h-full flex-1 flex-col justify-center px-8 py-6 '>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<Image src={Mule} alt='Mulez' className='mx-auto h-40 w-auto' />
				</div>
				<LoginForm />
			</div>
		</main>
	);
}
