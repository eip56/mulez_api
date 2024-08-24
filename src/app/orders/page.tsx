import RecentOrders from '@/feature/Orders/RecentOrders'

export default function Orders() {
  return (
    <>
      <div className="OrderStats mx-8 grid grid-cols-6 gap-2 divide-x rounded-lg border bg-[#F9FAFB]">
        <div className="bg-neutral-[#F9FAFB] p-4">
          <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
          <p className="text-base font-semibold">112</p>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-500">Average Delivery Time</h3>
          <p className="text-base font-semibold">45 min</p>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-500">Returns</h3>
          <p className="text-base font-semibold">2</p>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-500">Avg. Order Value</h3>
          <p className="text-base font-semibold">$78.00</p>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-500">Today&apos;s Revenue</h3>
          <p className="text-base font-semibold">$3,580.00</p>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
          <p className="text-base font-semibold">$520,580.00</p>
        </div>
      </div>

      <div className="RecentOrders">
        <RecentOrders />
      </div>
    </>
  )
}
