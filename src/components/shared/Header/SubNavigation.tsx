import Link from 'next/link'
import { SubNavigationProps } from '.'

export default function SubNavigation({ links }: SubNavigationProps) {
  return (
    <nav className="flex overflow-x-auto border-b border-white/10 py-4">
      <ul
        role="list"
        className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8"
      >
        {links?.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={item.current ? 'text-indigo-400' : ''}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
