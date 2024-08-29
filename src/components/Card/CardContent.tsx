import clsx from 'clsx'

interface CardContentProps {
  children?: React.ReactNode
  className?: string
}

export default function CardContent({ children, className }: CardContentProps) {
  return <div className={clsx('CardContent grow overflow-hidden p-4', className)}>{children}</div>
}
