import SalesStatistics from '@/feature/Dashboard/SalesStatistics'
import ActiveRoutes from '@/feature/Dashboard/ActiveRoutes'

export default async function Dashboard() {
  return (
    <div className="px-8">
      <div className="grid grid-cols-2 gap-6">
        <SalesStatistics />
        <ActiveRoutes />
      </div>
    </div>
  )
}
