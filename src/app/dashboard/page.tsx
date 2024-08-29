import TotalSales from '@/feature/Dashboard/TotalSales'
import Routes from '@/feature/Dashboard/Routes'
import RecentOrders from '@/feature/Dashboard/RecentOrders'
import TotalOrders from '@/feature/Dashboard/TotalOrders'
import ScheduledDeliveries from '@/feature/Dashboard/ScheduledDeliveries'
import AvgDeliveryTime from '@/feature/Dashboard/AvgDeliveryTime'

export default async function Dashboard() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4 p-6">
        <div className="col-span-6 grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <TotalSales />
          </div>
          <div className="col-span-6">
            <TotalOrders />
          </div>
          <div className="col-span-6">
            <ScheduledDeliveries />
          </div>
          <div className="col-span-6">
            <AvgDeliveryTime />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 p-6 pt-0">
        <div className="col-span-8">
          <RecentOrders />
        </div>
        <div className="col-span-4">
          <Routes />
        </div>
      </div>
    </div>
  )
}
