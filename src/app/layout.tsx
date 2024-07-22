import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import dbConnect from '@/lib/db'
import Navigation from '@/components/Navigation'
import clsx from 'clsx'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mulez Administration',
  description: 'Mulez Administration',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  dbConnect()

  return (
    <html lang="en" className="h-full bg-mainbg">
      <body className={clsx(inter.className, 'h-full')}>
        <Navigation />
        <main className="h-full lg:pl-60">{children}</main>
      </body>
    </html>
  )
}
