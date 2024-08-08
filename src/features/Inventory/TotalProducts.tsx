import { WidgetCard } from '@/components'
import { BoxIcon } from '@/components/Icons/AppIcons'

export default function TotalProducts() {
  return (
    <WidgetCard>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#494C55]">
        <BoxIcon className="h-4 w-4 fill-white" />
      </div>
      <div>
        <h6 className="text-sm text-gray-500">Available Stock</h6>
        <p className="text-2xl text-white">250</p>
      </div>
    </WidgetCard>
  )
}
