import DailyOrders from '@/feature/Dashboard/DailyOrders'
import Financials from '@/feature/Dashboard/Financials'
import Expenses from '@/feature/Dashboard/Expenses'
import RecentOrders from '@/feature/Dashboard/RecentOrders'
import LatestRoutes from '@/feature/Dashboard/LatestRoutes'
import RevenueWidget from '@/feature/Widgets/RevenueWidget'
import TotalExpenseWidget from '@/feature/Widgets/TotalExpenseWidget'
import AvgDeliveryTime from '@/feature/Widgets/AvgDeliveryTime'

export default async function Dashboard() {
  return (
    <div className="DeliveriesPage flex h-screen flex-col gap-5 overflow-hidden p-4">
      <div className="grid h-28 max-h-28 flex-initial grid-cols-4 gap-5">
        <RevenueWidget />
        <TotalExpenseWidget />
        <AvgDeliveryTime />
        <DailyOrders title="Date" />
      </div>

      <div className="flex grow gap-4">
        <div className="flex-1"></div>
        <div className="w-1/3 flex-initial">
          <Expenses />
        </div>
      </div>

      {/* <div className="flex grow gap-4 overflow-hidden">
        <div className="flex-1">
          <LatestRoutes />
        </div>
        <div className="w-1/3 flex-initial">
          <RecentOrders />
        </div>
      </div> */}
    </div>
  )
}
