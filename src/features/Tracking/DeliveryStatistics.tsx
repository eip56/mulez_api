import { deliveryStats } from './data'
import DeliveryStatBar from './DeliveryStatBar'

export default function DeliveryStatistics() {
  return (
    <div className="DeliveryStatistics mt-8 rounded-md bg-[#191919] p-6">
      <div className="flex items-center">
        <div className="flex-1">
          <h3 className="text-white">Delivery Statistics</h3>
        </div>
      </div>

      <div className="mt-8">
        <h6 className="mb-8 text-sm font-medium text-white">
          Average Time Per Day by Category
        </h6>
        <div className="flex w-full">
          {deliveryStats.map((stat) => (
            <div className={`w-[${stat.percentage}%] grow`} key={stat.id}>
              <p className="relative pb-4 text-xs text-gray-500">
                {stat.name}
                <span className="absolute bottom-1 left-0 h-[12px] w-[1px] bg-gray-700"></span>
              </p>
              <div
                className={`flex h-10 items-center bg-[${stat.color}] pl-4 text-xs text-white transition-all hover:scale-105`}
              >
                {stat.percentage}&#37;
              </div>
            </div>
          ))}
        </div>
      </div>
      <ul className="mt-8 space-y-2 overflow-auto">
        {deliveryStats.map((stat) => (
          <li
            className="flex gap-x-4 border-b border-white/5 py-1 text-white last:border-b-0"
            key={stat.id}
          >
            <div className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
              {stat.name}
            </div>
            <div className="text-xs text-gray-500">{stat.duration}</div>
            <div className="text-xs text-gray-500">{stat.percentage}&#37;</div>
          </li>
        ))}
      </ul>
      <div className="relative mt-8 h-[200px] w-full">
        <h6 className="text-sm font-medium text-white">
          Working time per Driver
        </h6>
        <DeliveryStatBar />
      </div>
    </div>
  )
}
