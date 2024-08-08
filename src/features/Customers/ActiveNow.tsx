import { WidgetCard } from '@/components'
import { FireIcon } from '@/components/Icons/AppIcons'

export default function ActiveNow() {
  return (
    <WidgetCard>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#494C55]">
        <FireIcon className="h-4 w-4 fill-white" />
      </div>
      <div>
        <h6 className="text-sm text-gray-500">Active Now</h6>
        <p className="text-2xl text-white">45</p>
      </div>
    </WidgetCard>
  )
}
