import { WidgetCard } from '@/components'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'

export default function DailyOrders({ title }: { title: string }) {
  return (
    <div className="flex rounded-md border border-white/5 bg-[#1F1F21] p-4">
      <div className="flex w-full">
        <h6 className="flex-1 text-sm text-gray-500">{title}</h6>
        <div>
          <EllipsisHorizontalIcon className="h-4 w-4 text-gray-500" />
        </div>
      </div>
      <div></div>
    </div>
  )
}
