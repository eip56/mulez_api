import clsx from 'clsx'

interface IProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className }: IProps) {
  return (
    <div className={clsx('Card rounded-md border bg-white dark:bg-[#202529]', className)}>
      {children}
    </div>
  )
}
