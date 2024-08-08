import { Header } from '@/components'
import RecentDeliveries from '@/features/Deliveries/RecentDeliveries'
import { ordersSubnavLinks } from '@/lib/constants'

export default function DeliveriesPage() {
  return (
    <div className="DeliveriesPage flex h-screen flex-col gap-5 overflow-hidden">
      <Header>
        <Header.SubNavigation links={ordersSubnavLinks} />
        <Header.Title
          title={'Deliveries Overview'}
          description={'General overview of all deliveries and their status.'}
        />
      </Header>

      <div className="p-4">
        <div className="grid h-28 max-h-28 flex-initial grid-cols-3 gap-5 overflow-hidden"></div>

        <div className="grow">
          <RecentDeliveries />
        </div>
      </div>
    </div>
  )
}
