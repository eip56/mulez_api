import clsx from 'clsx'

interface IProps {
  children: React.ReactNode
  classNames?: string
}

export default function Card({ children, classNames }: IProps) {
  return (
    <div className={clsx('rounded-lg border p-4', { [classNames]: classNames })}>{children}</div>
  )
}
