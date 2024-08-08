import { Header } from '@/components'
import TotalProducts from '@/features/Inventory/TotalProducts'
import TotalInventoryValue from '@/features/Inventory/TotalInventoryValue'
import TopSellingProducts from '@/features/Inventory/TopSellingProducts'
import ExpiringSoon from '@/features/Inventory/ExpiringSoon'
import RecentlyActive from '@/features/Inventory/RecentlyActive'

export default async function InventoryPage() {
  return (
    <div className="flex h-screen flex-col gap-5 overflow-hidden p-4">
      <Header>
        <Header.Title
          title={'Inventory Overview'}
          description={'General overview of inventory and their status.'}
        />
      </Header>

      <div className="grid h-28 max-h-28 flex-initial grid-cols-4 gap-5 overflow-hidden">
        <TotalProducts />
        <TotalInventoryValue />
        <TopSellingProducts />
        <ExpiringSoon />
      </div>

      <div className="grow">
        <RecentlyActive />
      </div>
    </div>
  )
}
