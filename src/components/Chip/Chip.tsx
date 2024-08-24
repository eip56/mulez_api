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
      className={clsx('inline-flex items-center rounded-md border px-2 text-xsx', {
        [classNames]: classNames
      })}>
      {label}
    </span>
  )
}
