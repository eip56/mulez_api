interface CardTitleProps {
  title?: string
  action?: React.ReactNode
}

export default function Title({ title, action }: CardTitleProps) {
  return (
    <div className="CardTitle flex items-center px-6 py-4">
      <h2 className="text-base text-white">{title}</h2>
      {action && action}
    </div>
  )
}
