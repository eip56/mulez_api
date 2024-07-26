import OpenOrders from '@/components/Orders/OpenOrders'
import TotalOrders from '@/components/Orders/TotalOrders'
import OrderStatistics from '@/components/Orders/OrderStatistics'
import { Header } from '@/components/shared'

const PAGE_TITLE = 'Orders'

export default function Orders() {
  return (
    <div className="px-10 py-10">
      <Header>
        <Header.Title title="Orders" />
      </Header>
      <div className="grid grid-cols-3 gap-4">
        <TotalOrders />
        <OpenOrders />
        <OrderStatistics />
      </div>
    </div>
  )
}
