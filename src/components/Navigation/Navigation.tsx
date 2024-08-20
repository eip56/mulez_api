'use client'
import { useGlobalContext } from '@/context/Global/global-context'
import { navigation } from '@/lib/constants'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/Icons/Logo'
import Link from 'next/link'
import clsx from 'clsx'

export default function Navigation() {
  const { sidebar, setSidebar } = useGlobalContext()
  const pathname = usePathname()

  return (
    <div
      className={clsx(
        'flex flex-none border-r border-r-white/5 bg-dark transition-all duration-200',
        {
          'w-56': sidebar,
          'w-[75px]': !sidebar
        }
      )}>
      <nav className="flex flex-1 flex-col">
        <div
          className="flex items-center gap-4 border-b border-white/10 py-3 pl-[27.5px] text-white"
          onClick={setSidebar}>
          <span className="flex h-7 items-center justify-center">
            <Logo className="h-6 w-6" />
          </span>
          <p className={clsx('text-lg font-bold', { hidden: !sidebar, block: sidebar })}>MULEZ</p>
        </div>
        <ul role="list" className="mt-6 flex flex-1 flex-col gap-y-2">
          {navigation.map(item => {
            const isActive = pathname === item.href

            return (
              <li key={item.label} className="relative">
                <Link
                  data-tooltip-target="tooltip-default"
                  href={item.href}
                  className={clsx(
                    'group flex items-center gap-4 fill-[#969696] py-3 pl-[27.5px] text-sm leading-6 text-[#969696] hover:text-white group-hover:fill-white group-hover:text-white',
                    {
                      'pl-[27.5px]': !sidebar
                      // 'bg-[#2387FB]': isActive
                    }
                  )}>
                  <span className="flex h-6 items-center justify-center">
                    <item.icon
                      className={clsx(
                        'relative h-5 w-5 items-center justify-center transition-all duration-200 group-hover:fill-white',
                        {
                          '': !sidebar,
                          'flex-none': sidebar,
                          'fill-[#3972E0]': isActive
                        }
                      )}
                    />
                  </span>

                  <span
                    className={clsx('transition-all duration-200', {
                      hidden: !sidebar,
                      block: sidebar,
                      'text-white': isActive
                    })}>
                    {item.label}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
