import clsx from 'clsx'

interface CardTitleProps {
  children?: React.ReactNode
  className?: string
}

export default function CardHeader({ children, className }: CardTitleProps) {
  return <div className={clsx('CardHeader flex items-center px-6 pt-4', className)}>{children}</div>
}
