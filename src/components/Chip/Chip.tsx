import { deliveryCategory } from '@/lib/constants'
import clsx from 'clsx'

interface IProps {
  label: string
  type?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function Chip({ label, size = 'sm' }: IProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-md bg-white/10 px-2 text-white/75 ring-1 ring-inset ring-white/20',
        { 'py-0.5 text-[10px]': size === 'sm' },
        { 'py-1 text-xs': !size }
      )}>
      {label}
    </span>
  )
}
