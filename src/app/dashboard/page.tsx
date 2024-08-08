import DailyOrders from '@/features/Dashboard/DailyOrders'

export default function Dashboard() {
  return (
    <div className="DeliveriesPage flex h-screen flex-col gap-5 overflow-hidden">
      <div className="p-4">
        <div className="grid h-28 max-h-28 flex-initial grid-cols-4 gap-5">
          <DailyOrders />
        </div>

        <div className="grow"></div>
      </div>
    </div>
  )
}
