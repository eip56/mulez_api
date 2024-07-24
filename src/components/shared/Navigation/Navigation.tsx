'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  CalendarIcon,
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  TruckIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Orders', href: '/orders', icon: TruckIcon },
  { name: 'Customers', href: '/customers', icon: UsersIcon },
  { name: 'Tracking', href: '/tracking', icon: TruckIcon },
  { name: 'Invoices', href: '/invoices', icon: FolderIcon },
  { name: 'Stash', href: '/stash', icon: UsersIcon },
  { name: 'Vendors', href: '/vendors', icon: UsersIcon },
  { name: 'Employees', href: '/employees', icon: UsersIcon },
  { name: 'Fleet', href: '/fleet', icon: UsersIcon },
  { name: 'Scheduling', href: '/scheduling', icon: CalendarIcon },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <div className="bg-lbg hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="bg-eerie flex grow flex-col gap-y-5 overflow-y-auto border-r border-r-white/10 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <h5 className="text-sm text-gray-500">Mulez Administration</h5>
          {/* <Image src={Mule} alt="Mule" /> */}
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={clsx(
                        'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white',
                        { 'bg-gray-800 text-white': pathname === item.href },
                      )}
                    >
                      <item.icon
                        className="h-6 w-6 shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mt-auto">
              <a
                href="#"
                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                <Cog6ToothIcon
                  className="h-6 w-6 shrink-0"
                  aria-hidden="true"
                />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
