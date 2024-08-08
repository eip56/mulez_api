import { Header } from '@/components'
import { ordersSubnavLinks } from '@/lib/constants'
import RecentOrders from '@/features/Orders/RecentOrders'

export default function Orders() {
  return (
    <div className="CustomersPage flex h-screen flex-col gap-5 overflow-hidden">
      <Header>
        <Header.SubNavigation links={ordersSubnavLinks} />
        <Header.Title
          title={'Orders Overview'}
          description={'General overview of all orders and their status.'}
        />
      </Header>

      <div className="p-4">
        <div className="grid h-28 max-h-28 flex-initial grid-cols-3 gap-5 overflow-hidden"></div>

        <div className="grow">
          <RecentOrders />
        </div>
      </div>
    </div>
  )
}
