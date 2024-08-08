import { WidgetCard } from '@/components'
import { FireIcon } from '@/components/Icons/AppIcons'

export default function TopSellingProducts() {
  return (
    <WidgetCard>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#494C55]">
        <FireIcon className="h-4 w-4 fill-white" />
      </div>
      <div>
        <h6 className="text-sm text-gray-500">Top Selling Product</h6>
        <p className="text-2xl text-white">
          Gorilla Glue
          <span className="block text-xs text-gray-500">
            Venor: Raw Greens &#183; Lineage: Hybrid
          </span>
        </p>
      </div>
    </WidgetCard>
  )
}
