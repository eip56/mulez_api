import clsx from 'clsx'

interface CardContentProps {
  children?: React.ReactNode
  classNames?: string
}

export default function CardContent({ children, classNames }: CardContentProps) {
  return (
    <div className={clsx('CardContent grow overflow-hidden p-4', { [classNames]: classNames })}>
      {children}
    </div>
  )
}

// Scroll Usage (Optional)
{
  /* <div className="flex h-full max-h-full w-full max-w-full overflow-hidden">
  <div className="flex-1"></div>
    <div className="h-full max-h-full flex-1 overflow-y-scroll">
  </div>
</div> */
}
