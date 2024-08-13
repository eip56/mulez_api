import CardTitle from './CardTitle'
import clsx from 'clsx'

interface IProps {
  children: React.ReactNode
  classNames?: string
}

export default function Card({ children, classNames }: IProps) {
  return (
    <div
      className={clsx(
        'max-width-full flex h-full max-h-full w-full flex-col overflow-hidden rounded-md border border-white/5 bg-[#1F1F21]',
        {
          [classNames]: classNames
        }
      )}>
      {children}
    </div>
  )
}

Card.Title = CardTitle