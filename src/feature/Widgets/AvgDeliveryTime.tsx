import { Card, CardContent } from '@/components'
import { ArrowUpIcon } from '@heroicons/react/24/outline'

export default function AvgDeliveryTime() {
  return (
    <Card>
      <CardContent>
        <div className="flex w-full">
          <div className="grow">
            <h6 className="flex-1 text-xs text-gray-500">Avg Delivery Time</h6>
            <p className="mt-2 flex gap-2 text-xl text-white">
              45 mins
              <span className="text-xxs flex items-center gap-1 rounded-md bg-green-500/10 px-1.5 text-green-500">
                + 6% <ArrowUpIcon className="h-2.5 w-2.5" />
              </span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
