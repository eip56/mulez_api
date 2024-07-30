import { Header } from '@/components/shared'
import { ordersSubnavLinks } from '@/lib/constants'
import { ScaleIcon } from '@heroicons/react/20/solid'
import { EyeIcon } from '@heroicons/react/24/outline'
import { formatDate, formatTime } from '@/lib/time-utils'
import clsx from 'clsx'

const stats = [
  { name: 'Total Invoices', value: '14,305' },
  { name: 'Average invoices', value: '94.65', unit: '/ per day' },
  { name: 'Unpaid totals', value: '$60,400' },
  { name: 'Average paid time', value: '08', unit: 'days' }
]
const statuses = {
  Paid: 'text-green-400 bg-green-400/10',
  Unpaid: 'text-yellow-400 bg-yellow-400/10',
  Pending: 'text-indigo-400 bg-indigo-400/10',
  Overdue: 'text-rose-400 bg-rose-400/10'
}

const types = {
  Wholesale: 'ring-orange-400/20 bg-orange-400/10 text-orange-400',
  Retail: 'ring-blue-400/20 bg-blue-400/10 text-blue-400'
}

const data = [
  {
    invoiceId: 'INV-' + Math.random().toString(36).substring(2, 7).toUpperCase(),
    type: 'Retail',
    createdAt: new Date(2024, 6, Math.floor(Math.random() * 30) + 1).toISOString(),
    client: 'John Doe',
    skus: Math.floor(Math.random() * 20) + 1,
    measurement: Math.random() > 0.5 ? 'g' : 'oz',
    weight: parseFloat((Math.random() * 2).toFixed(2)),
    total: parseFloat((Math.random() * (100 - 40) + 40).toFixed(2)),
    status: 'Paid'
  },
  {
    invoiceId: 'INV-' + Math.random().toString(36).substring(2, 7).toUpperCase(),
    type: 'Wholesale',
    createdAt: new Date(2024, 6, Math.floor(Math.random() * 30) + 1).toISOString(),
    client: 'Acme Corp',
    skus: Math.floor(Math.random() * 20) + 1,
    measurement: Math.random() > 0.5 ? 'g' : 'oz',
    weight: parseFloat((Math.random() * 2).toFixed(2)),
    total: parseFloat((Math.random() * (100 - 40) + 40).toFixed(2)),
    status: 'Unpaid'
  },
  {
    invoiceId: 'INV-' + Math.random().toString(36).substring(2, 7).toUpperCase(),
    type: 'Wholesale',
    createdAt: new Date(2024, 6, Math.floor(Math.random() * 30) + 1).toISOString(),
    client: 'Bloom Corp',
    skus: Math.floor(Math.random() * 20) + 1,
    measurement: Math.random() > 0.5 ? 'g' : 'oz',
    weight: parseFloat((Math.random() * 2).toFixed(2)),
    total: parseFloat((Math.random() * (100 - 40) + 40).toFixed(2)),
    status: 'Pending'
  },
  {
    invoiceId: 'INV-' + Math.random().toString(36).substring(2, 7).toUpperCase(),
    type: 'Wholesale',
    createdAt: new Date(2024, 6, Math.floor(Math.random() * 30) + 1).toISOString(),
    client: 'Urban Wellness',
    skus: Math.floor(Math.random() * 20) + 1,
    measurement: Math.random() > 0.5 ? 'g' : 'oz',
    weight: parseFloat((Math.random() * 2).toFixed(2)),
    total: parseFloat((Math.random() * (100 - 40) + 40).toFixed(2)),
    status: 'Overdue'
  }
]

export default function Orders() {
  return (
    <div>
      <Header>
        <Header.SubNavigation links={ordersSubnavLinks} />
        <Header.Title
          title="Invoices Overview"
          description="General overview of invoices and their status."
        />
        <Header.Stats stats={stats} />
      </Header>

      <div className="mx-4 mt-10 rounded-md">
        <h2 className="px-8 pt-8 text-base font-semibold leading-7 text-white">Latest Invoices</h2>
        <table className="mt-6 w-full whitespace-nowrap text-left">
          <thead className="border-b border-white/10 text-sm leading-6 text-white">
            <tr>
              <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
                Invoice
              </th>
              <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                Client
              </th>
              <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                Type
              </th>
              <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                Date Created
              </th>
              <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                Sku&#39;s
              </th>
              <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                Weight
              </th>
              <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                Total
              </th>
              <th
                scope="col"
                className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
                Status
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                &nbsp;
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {data.map((i, index) => (
              <tr key={index}>
                <td className="py-4 pl-8">
                  <div className="flex items-center">
                    <div className="truncate text-sm font-medium leading-6 text-white">
                      {i.invoiceId}
                    </div>
                  </div>
                </td>
                <td className="table-cell py-4 pl-0">
                  <div className="flex gap-x-3">
                    <div className="font-mono text-sm leading-6 text-gray-400">{i.client}</div>
                  </div>
                </td>
                <td className="table-cell py-4 pl-0">
                  <div className="flex gap-x-3">
                    <span
                      className={`inline-flex items-center rounded-md px-2 py-1 text-xs ring-1 ring-inset ${types[i.type]}`}>
                      {i.type}
                    </span>
                  </div>
                </td>
                <td className="flex table-cell flex-row py-4 pl-0">
                  <time dateTime={'2023-01-23T11:00'} className="font-sm block text-gray-400">
                    {formatDate(i.createdAt)}
                  </time>
                  <time dateTime={'2023-01-23T11:00'} className="block text-xs text-gray-400">
                    {formatTime(i.createdAt)}
                  </time>
                </td>
                <td className="table-cell py-4 pl-0">
                  <div className="flex gap-x-3">
                    <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
                      {i.skus}
                    </span>
                  </div>
                </td>
                <td className="table-cell py-4 pl-0">
                  <div className="flex gap-x-3">
                    <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
                      <ScaleIcon className="mr-2 h-4 w-4" /> {i.weight} {i.measurement}
                    </span>
                  </div>
                </td>
                <td className="table-cell py-4 pl-0">
                  <div className="flex gap-x-3">
                    <div className="font-mono text-sm leading-6 text-gray-400">${i.total}</div>
                  </div>
                </td>
                <td className="table-cell py-4 pl-0">
                  <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                    <div className={`flex-none rounded-full p-1 ${statuses[i.status]}`}>
                      <div className="h-1.5 w-1.5 rounded-full bg-current" />
                    </div>
                    <div className="hidden text-gray-400 sm:block">{i.status}</div>
                  </div>
                </td>
                <td className="table-cell py-4 pl-0">
                  <button className="text-sm leading-6 text-gray-400">
                    <EyeIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
