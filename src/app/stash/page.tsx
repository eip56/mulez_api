import { Header } from '@/components/shared'
import clsx from 'clsx'

const stats = [
  { name: 'Total Asset Value', value: '$ 9,212,323' },
  { name: `Product Sku\'s`, value: '134' },
  { name: 'Gross Sales', value: '$60,400' },
  { name: 'Top Performers', value: 'Gorilla Glue' }
]

const inventory = [
  {
    id: 1,
    name: 'Gorilla Glue',
    vendor: "Mr. B's Frosty Flowers"
  }
]

// Name
// Vendor
// Price
// wholesale price
// stock
// sales
// revenue
// status in stock low stack out of stock

export default async function Stash() {
  return (
    <div>
      <Header>
        <Header.Title
          title={'Stash Overview'}
          description={'General overview of inventory and their status.'}
        />
        <Header.Stats stats={stats} />
      </Header>

      <div className="mx-4 mt-6">
        <h2 className="mb-4 text-base font-semibold leading-7 text-white">
          Latest Active Inventory
        </h2>

        <ul role="list" className="divide-y divide-gray-800">
          {inventory.map(item => (
            <li
              key={item.id}
              className="bg-dark flex justify-between gap-x-4 gap-x-6 rounded-lg p-5">
              <div className="flex-1 border-r border-white/10">
                <p className="text-sm font-semibold leading-6 text-white">{item.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                  Vendor:
                  <span className="ml-2 text-white underline decoration-dashed">
                    Mr. B&#39;s Frosty Flowers
                  </span>
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                  Category:
                  <span className="ml-2 text-gray-200">Flower</span>
                  <span className="px-1 text-gray-400">&bull;</span>
                  Lineage:
                  <span className="ml-2 text-gray-200">Hybrid</span>
                </p>
              </div>
              <div className="flex-1 border-r border-white/10">
                <p className="text-sm font-semibold leading-6 text-white">
                  Mr. B&#39;s Frosty Flowers
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-400">{item.vendor}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
