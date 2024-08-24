import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Tooltip from '@/components/ToolTip/ToolTip'
import clsx from 'clsx'

export default function NavItem({ Icon, label, path }) {
  const pathname = usePathname()
  const isActive = pathname === path

  return (
    <li className="group relative flex items-center justify-center">
      <Link
        href={path}
        className={clsx(
          'hover:bg-navbg relative mb-1 flex w-12 items-center justify-center rounded-lg p-2.5 text-gray-500 transition-colors duration-300 hover:text-white',
          { 'bg-navbg text-white': isActive }
        )}>
        <i className="h-6 w-6">
          <Icon />
        </i>

        <Tooltip label={label} />
      </Link>
      {isActive && (
        <span className="absolute left-0 top-1/2 block h-1/2 w-1 -translate-y-1/2 rounded-br-lg rounded-tr-lg bg-white"></span>
      )}
    </li>
  )
}
