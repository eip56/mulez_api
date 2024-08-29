import { Card, CardContent } from '@/components'
import {
  TruckIcon,
  EllipsisHorizontalIcon,
  ArrowTrendingDownIcon
} from '@heroicons/react/24/outline'

export default function ScheduledDeliveries() {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center">
          <div className="inline-flex flex-1 items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50">
              <TruckIcon className="h-3 text-blue-600" />
            </span>
            <div className="text-sm font-medium">Deliveries</div>
          </div>
          <button className="">
            <EllipsisHorizontalIcon className="h-5" />
          </button>
        </div>
        <div className="mt-3 text-xl font-semibold">45</div>
        <p className="mt-2 inline-flex items-center text-sm text-gray-500">
          <ArrowTrendingDownIcon className="mr-2 h-5 stroke-[#FD3400]" />
          <span className="mr-2 text-[#FD3400]">10%</span> -15 today
        </p>
      </CardContent>
    </Card>
  )
}
