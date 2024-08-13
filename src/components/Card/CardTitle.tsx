interface CardTitleProps {
  title?: string
  action?: React.ReactNode
}

export default function CardTitle({ title, action }: CardTitleProps) {
  return (
    <div className="CardTitle flex shrink items-center p-3">
      <h6 className="text-base text-white">{title}</h6>
      {action && action}
    </div>
  )
}
