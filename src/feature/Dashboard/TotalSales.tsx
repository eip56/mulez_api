import { Card, CardContent } from '@/components'
import {
  BanknotesIcon,
  EllipsisHorizontalIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline'

export default function TotalSales() {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center">
          <div className="inline-flex flex-1 items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50">
              <BanknotesIcon className="h-3 text-blue-600" />
            </span>
            <div className="text-sm font-medium">Total Sales</div>
          </div>
          <button className="">
            <EllipsisHorizontalIcon className="h-5" />
          </button>
        </div>
        <div className="mt-3 text-xl font-semibold">$120,784.02</div>
        <p className="mt-2 inline-flex items-center text-sm text-gray-500">
          <ArrowTrendingUpIcon className="mr-2 h-5 stroke-[#1FCCAF]" />
          <span className="mr-2 text-[#1FCCAF]">12.3%</span> +$1,453.89 today
        </p>
      </CardContent>
    </Card>
  )
}
