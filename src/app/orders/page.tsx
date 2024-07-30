import { Header } from '@/components/shared'
import { ordersSubnavLinks } from '@/lib/constants'
import clsx from 'clsx'

const stats = [
  { name: 'Number of orders', value: '405' },
  { name: 'Average delivery time', value: '36.65', unit: 'mins' },
  { name: 'Number of drivers', value: '3' },
  { name: 'Success rate', value: '98.5%' }
]
const statuses = {
  Completed: 'text-green-400 bg-green-400/10',
  Error: 'text-rose-400 bg-rose-400/10'
}

const PAGE_TITLE = 'Orders Overview'
const DESCRIPTION = 'General overview of all orders and their status.'

export default function Orders() {
  return (
    <div>
      <Header>
        <Header.SubNavigation links={ordersSubnavLinks} />
        <Header.Title title={PAGE_TITLE} description={DESCRIPTION} />
        <Header.Stats stats={stats} />
      </Header>

      <div className="border-t border-white/10 pt-11">
        <h2 className="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">
          Latest orders
        </h2>
        <table className="mt-6 w-full whitespace-nowrap text-left">
          <colgroup>
            <col className="w-1/12" />
            <col className="w-2/12" />
            <col className="w-2/12" />
            <col className="w-2/12" />
            <col className="w-2/12" />
            <col className="w-2/12" />
            <col className="w-1/12" />
          </colgroup>
          <thead className="border-b border-white/10 text-sm leading-6 text-white">
            <tr>
              <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
                Order ID
              </th>
              <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                Route ID
              </th>
              <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                Customer
              </th>
              <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                Employee
              </th>
              <th
                scope="col"
                className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
                Status
              </th>
              <th
                scope="col"
                className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20">
                Elapsed Time
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {['1'].map((item, index) => (
              <tr key={index}>
                <td className="py-4 pl-8">
                  <div className="flex items-center">
                    <div className="truncate text-sm font-medium leading-6 text-white">
                      # 2d89f0c8
                    </div>
                  </div>
                </td>
                <td className="table-cell py-4 pl-0">
                  <div className="flex gap-x-3">
                    <div className="font-mono text-sm leading-6 text-gray-400">2d89f0c8</div>
                    <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
                      12 Stops
                    </span>
                  </div>
                </td>
                <td className="table-cell py-4 pl-0">
                  <div className="flex gap-x-3">
                    <div className="font-mono text-sm leading-6 text-gray-400">Michael Wilcox</div>
                  </div>
                </td>
                <td className="table-cell py-4 pl-0">
                  <div className="flex gap-x-3">
                    <div className="font-mono text-sm leading-6 text-gray-400">Mike Werner</div>
                    <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
                      {'2d89f0c8'}
                    </span>
                  </div>
                </td>
                <td className="table-cell py-4 pl-0">
                  <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                    <time dateTime={'2023-01-23T11:00'} className="text-gray-400 sm:hidden">
                      Jul 29 2024 11:00 AM
                    </time>
                    <div
                      className={clsx('flex-none rounded-full bg-green-400/10 p-1 text-green-400')}>
                      <div className="h-1.5 w-1.5 rounded-full bg-current" />
                    </div>
                    <div className="hidden text-white sm:block">Completed</div>
                  </div>
                </td>
                <td className="table-cell py-4 pl-0">
                  <div className="font-mono text-sm leading-6 text-gray-400">45 minutes ago</div>
                </td>
                <td className="table-cell py-4 pl-0">
                  <div className="font-mono text-sm leading-6 text-gray-400">View</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
