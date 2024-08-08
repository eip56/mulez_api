import { WidgetCard } from '@/components'
import { MoneyBagIcon } from '@/components/Icons/AppIcons'

export default function TotalInventoryValue() {
  return (
    <WidgetCard>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#494C55]">
        <MoneyBagIcon className="h-4 w-4 fill-white" />
      </div>
      <div>
        <h6 className="text-sm text-gray-500">Total Value</h6>
        <p className="text-2xl text-white">$45,000</p>
      </div>
    </WidgetCard>
  )
}
