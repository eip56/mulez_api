'use client'
import { useGlobalContext } from '@/context/Global/global-context'
import { navigation } from '@/lib/constants'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/Icons/Logo'
import Link from 'next/link'
import clsx from 'clsx'

export default function Navigation() {
  const { sidebar } = useGlobalContext()
  const pathname = usePathname()

  return (
    <aside
      className={clsx(
        'border-edge bg-smoke-900 w-56 max-w-56 flex-none border-r transition-all',
        !sidebar && 'w-17 max-w-17'
      )}>
      <nav className="flex flex-1 flex-col">
        <div className="flex h-16 max-h-16 items-center justify-center">
          <span className="h-11 w-11">
            <Logo className="" />
          </span>
          <Link href="/dashboard" className={clsx('text-white', { hidden: !sidebar })}>
            Mulez
          </Link>
        </div>
      </nav>
    </aside>
  )
}
