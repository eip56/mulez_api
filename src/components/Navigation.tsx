import {
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  TruckIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Products', href: '#', icon: UsersIcon, current: false },
  { name: 'Vendors', href: '#', icon: UsersIcon, current: false },
  { name: 'Deliveries', href: '#', icon: TruckIcon, current: false },
  { name: 'Transactions', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]

export default function Navigation() {
  return (
    <div className="hidden bg-back lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="bg-eerie flex grow flex-col gap-y-5 overflow-y-auto border-r border-r-white/10 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={clsx(
                        item.current
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                        'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                      )}
                    >
                      <item.icon
                        className="h-6 w-6 shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
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
