interface WidgetCardProps {
  children: React.ReactNode
  classNames?: string
}

export default function WidgetCard({ children, classNames }: WidgetCardProps) {
  return (
    <div
      className={`flex items-center gap-4 rounded-md border border-white/5 bg-[#1F1F21] p-5 ${classNames}`}>
      {children}
    </div>
  )
}
