'use client'
import Image from 'next/image'
import Mule from '../../../../public/logo.svg'
import { signIn } from '@/auth'
import { handleGoogleSignIn } from '@/lib/handleGoogleSignIn'

export default function Login() {
  return (
    <main className="bg-mainbg flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex min-h-full flex-1 flex-col justify-center px-8 py-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image src={Mule} alt="Mulez" className="mx-auto h-40 w-auto" />
        </div>
        <div className="">
          <form action={handleGoogleSignIn}>
            <button type="submit">Signin with Google</button>
          </form>
        </div>
      </div>
    </main>
  )
}

//<button type="submit">Signin with Google</button>
// action={async () => {
//   'use server'
//   await signIn('google')
// }}
