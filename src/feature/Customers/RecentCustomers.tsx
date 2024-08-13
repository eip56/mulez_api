import { Chip, Table, Td } from '@/components'
import { EyeIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { formatCurrency, calculateAge } from '@/lib'

import { customers } from '@/fakedb/customers'

export default function RecentCustomers() {
  const renderActions = customer => {
    return (
      <>
        <button>
          <EyeIcon className="h-[18px] w-[18px] text-gray-500 hover:text-white" />
        </button>
        <button>
          <EllipsisHorizontalIcon className="h-[18px] w-[18px] text-gray-500 hover:text-white" />
        </button>
      </>
    )
  }

  const renderRows = customer => {
    return (
      <tr key={customer.id}>
        <Td>
          <div className="text-sm text-white">{customer.name}</div>
          <span className="text-xs">{customer.email}</span>
        </Td>
        <Td>
          <Chip label="Retail" />
        </Td>
        <Td>{calculateAge(customer.dob)}</Td>
        <Td>{customer.status}</Td>
        <Td>{customer.lastActive}</Td>
        <Td>{renderActions(customer)}</Td>
      </tr>
    )
  }

  return (
    <div className="h-full max-h-full overflow-hidden">
      <Table title="Recent Customers" headers={headers} data={customers} renderRows={renderRows} />
    </div>
  )
}

const headers = [
  { label: 'Name', key: 'name' },
  { label: 'Type', key: 'invoiceID' },
  { label: 'Age', key: 'total' },
  { label: 'Status', key: 'status' },
  { label: 'Last Active', key: 'orderPlaced' }
]
