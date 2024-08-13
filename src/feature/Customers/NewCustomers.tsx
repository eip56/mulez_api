import { WidgetCard } from '@/components'
import { FireIcon } from '@/components/Icons/AppIcons'

export default function NewCustomers() {
  return (
    <WidgetCard>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#494C55]">
        <FireIcon className="h-4 w-4 fill-white" />
      </div>
      <div>
        <h6 className="text-sm text-gray-500">New Customers</h6>
        <p className="text-2xl text-white">70</p>
      </div>
    </WidgetCard>
  )
}
