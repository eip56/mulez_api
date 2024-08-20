import { Header, Table, Chip } from '@/components'
import { EyeIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'

export default async function Vendors() {
  const renderRows = row => {
    return (
      <tr key={row.id}>
        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
          {row.vendor}
        </td>
        <td className="px-6 py-4 text-sm font-medium text-gray-500">{row.contact}</td>
        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <Chip label={row.inventory} size="sm" />
            <div className="flex h-1 flex-1 items-center gap-2">
              <div className="relative flex-1">
                <div className="h-1 w-full rounded-full bg-[#484A54]" />
                <div
                  className={`absolute bottom-0 left-0 top-0 h-1 rounded-full bg-[#2768F0]`}
                  style={{ width: `${row.stockLevel}%` }}
                />
              </div>
              <div className="flex-initial">{row.stockLevel}%</div>
            </div>
          </div>
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
          $ {row.grossSales}.00
        </td>

        <td className="gap-2 whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <div className={`bg-white/10} flex-none rounded-full p-1 text-white`}>
              <div className="h-1.5 w-1.5 rounded-full bg-current" />
            </div>
            <div className="text-xs text-gray-400">{row.status}</div>
          </div>
        </td>

        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
          <Chip label={row.vendorType} />
        </td>

        <td className="flex justify-end gap-4 whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
          <button className="text-sm leading-6 text-gray-400">
            <EyeIcon className="h-5 w-5" />
          </button>
          <button className="text-sm leading-6 text-gray-400">
            <EllipsisHorizontalIcon className="h-5 w-5" />
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className="VendorsPage p-6">
      <Header>
        <Header.Title
          title={'Vendors Overview'}
          description={'General overview of all vendors and their status.'}
        />
      </Header>
      <Table
        title="Latest Routes"
        headers={headers}
        data={data}
        renderRows={renderRows}
        colgroup={colgroup}
      />
    </div>
  )
}

const headers = [
  { key: 'vendor', label: 'Vendor' },
  { key: 'contact', label: 'Contact' },
  { key: 'inventory', label: 'Inventory' },
  { key: 'grossSales', label: 'Gross Sales' },
  { key: 'vendorType', label: 'Vendor Type' },
  { key: 'status', label: 'Status' }
]

const colgroup = ['w-2/12', 'w-2/12', 'w-2/12', 'w-2/12', 'w-1/12', 'w-1/12', 'w-1/12']

const data = [
  {
    vendor: "Mr. B's Frosty Flowers",
    vendorType: 'Producer',
    contact: 'Jeff Bezos',
    email: 'mailme@gmail.com',
    phone: '(123) 456-7890',
    inventory: 53,
    stockLevel: 50,
    grossSales: '1,000.00',
    status: 'Active'
  },
  {
    vendor: 'Raw Greens',
    vendorType: 'VICE',
    contact: 'Sam Walton',
    email: 'mailme@gmail.com',
    phone: '(123) 456-7890',
    inventory: 23,
    stockLevel: 15,
    grossSales: '5000.00',
    status: 'Setup'
  },
  {
    vendor: 'P37',
    vendorType: 'Manufacturer',
    contact: 'George Dayton',
    email: 'mailme@gmail.com',
    phone: '(123) 456-7890',
    inventory: 15,
    stockLevel: 88,
    grossSales: '25000.00',
    status: 'Suspended'
  }
]
