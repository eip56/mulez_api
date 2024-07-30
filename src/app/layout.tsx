import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import dbConnect from '@/lib/db'
import Navigation from '@/components/shared/Navigation/Navigation'
import { GlobalContextProvider } from '@/context/Global/global-context'
import clsx from 'clsx'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mulez Administration',
  description: 'Mulez Administration',
}

// @TODO add suspense for the dbconnect
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  await dbConnect()

  return (
    <html lang="en" className="h-screen">
      <body className={clsx('bg-light h-screen', inter.className)}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  )
}
