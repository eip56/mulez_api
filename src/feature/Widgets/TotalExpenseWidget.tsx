import { Card, CardContent } from '@/components'
import { ArrowDownIcon } from '@heroicons/react/24/outline'

export default function TotalExpenseWidget() {
  return (
    <Card>
      <CardContent>
        <div className="flex w-full">
          <div className="grow">
            <h6 className="flex-1 text-xs text-gray-500">Total Expense</h6>
            <p className="mt-2 flex gap-2 text-xl text-white">
              $ 2, 225.00
              <span className="text-xxs flex items-center gap-1 rounded-md bg-red-500/10 px-1.5 text-red-500">
                +2.15% <ArrowDownIcon className="h-2.5 w-2.5" />
              </span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
