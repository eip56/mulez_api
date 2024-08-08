import Link from 'next/link'

const secondaryNavigation = [
  { name: 'General Details', href: '#' },
  { name: 'Notifications', href: '#' }
]

export default function AsideMenu() {
  return (
    <nav aria-label="Sidebar" className="w-1/6 flex-none flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          {/* <div className="text-xs leading-6 text-white/25">General</div> */}
          <ul role="list" className="-mx-2 mt-2 space-y-1">
            {secondaryNavigation?.map(item => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="transition-duration-200 group flex gap-x-3 rounded-md p-2 text-sm leading-6 text-white/25 transition-all hover:text-white">
                  <span className="truncate">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  )
}
