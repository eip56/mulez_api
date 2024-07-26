interface CardTitleProps {
  title?: string
  action?: React.ReactNode
}

export default function Title({ title, action }: CardTitleProps) {
  return (
    <div className="CardTitle flex items-center justify-between">
      <h2 className="text-sm font-medium text-gray-300">{title}</h2>
      {action && action}
    </div>
  )
}
