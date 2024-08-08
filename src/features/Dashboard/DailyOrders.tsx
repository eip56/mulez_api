import { WidgetCard } from '@/components'
import { SkullIcon } from '@/components/Icons/AppIcons'

export default function DailyOrders() {
  return (
    <div className="flex items-center gap-4 rounded-md border border-white/5 bg-[#1F1F21] p-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#494C55]">
        <SkullIcon className="h-4 w-4 fill-white" />
      </div>
      <div>
        <h6 className="text-sm text-gray-500">Top Selling Product</h6>
        <p className="text-2xl text-white">Purple Hills</p>
      </div>
    </div>
  )
}
