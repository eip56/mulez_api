import { deliveryCategory } from '@/lib/constants'
import clsx from 'clsx'

interface IProps {
  label: string
  type?: boolean
  size?: 'sm' | 'md' | 'lg'
  classNames?: string
}

export default function Chip({ label, classNames, size = 'sm' }: IProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-md px-2 ring-1 ring-inset',
        { 'py-0.5 text-[10px]': size === 'sm' },
        { 'py-1 text-xs': !size },
        { [classNames]: classNames },
        { 'bg-white/10 ring-white/20': !classNames }
      )}>
      {label}
    </span>
  )
}
