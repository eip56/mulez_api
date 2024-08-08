import Title from './CardTitle'
import clsx from 'clsx'

interface IProps {
  isTable?: boolean
  children: React.ReactNode
}

export default function Card({ isTable, children }: IProps) {
  return <div className={clsx('rounded-md border border-white/5 bg-[#1F1F21]')}>{children}</div>
}

Card.Title = Title
