'use client'
import { useGlobalContext } from '@/context/Global/global-context'
import { navigation, bottomNav, adminNav } from '@/lib/constants'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/Icons/Logo'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import clsx from 'clsx'
import NavItem from './NavItem'

export default function VerticalMenu() {
  const { sidebar } = useGlobalContext()
  const pathname = usePathname()

  return (
    <div className="w-[75px] border-r border-gray-200">
      <nav className="flex h-screen flex-1 flex-col py-4">
        <div className="flex h-16 max-h-16 flex-initial items-center justify-center">
          <span className="h-11 w-11">
            <Logo />
          </span>
          <Link href="/dashboard" className={clsx('text-white', { hidden: !sidebar })}>
            Mulez
          </Link>
        </div>
        <ul className="w-full flex-initial flex-col items-center justify-center">
          <li className="flex items-center justify-center">
            <div className="mb-1 flex h-11 w-12 items-center justify-center p-2.5">
              <span className="h-0.5 w-full bg-gray-200" />
            </div>
          </li>

          {navigation.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </ul>

        <ul className="w-full grow flex-col items-center justify-center">
          <li className="flex items-center justify-center">
            <div className="mb-1 flex h-11 w-12 items-center justify-center p-2.5">
              <span className="h-0.5 w-full bg-gray-200" />
            </div>
          </li>

          {adminNav.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </ul>

        <ul className="w-full flex-initial flex-col items-center justify-center">
          {/* <li className="flex items-center justify-center">
            <div className="bg-navbg flex w-8 flex-col items-center justify-center gap-4 rounded-full py-3">
              <button className="flex items-center justify-center rounded-full p-1 text-gray-400 transition-all hover:bg-[#121212] hover:text-white">
                <SunIcon className="h-4 w-4" />
              </button>
              <button className="flex items-center justify-center rounded-full bg-[#121212] p-1">
                <MoonIcon className="h-4 w-4 text-white" />
              </button>
            </div>
          </li> */}

          <li className="flex items-center justify-center">
            <div className="mb-1 flex h-11 w-12 items-center justify-center p-2.5">
              <span className="h-0.5 w-full bg-gray-200" />
            </div>
          </li>

          {bottomNav.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </ul>
      </nav>
    </div>
  )
}
