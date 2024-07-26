interface PageTitleProps {
  title: string
  action?: React.ReactNode
}

export default function Title({ title, action }: PageTitleProps) {
  return (
    <div className="min-w-0 flex-1">
      <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
        {title}
      </h2>
      {action && action}
    </div>
  )
}
