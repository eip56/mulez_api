import { Table, Td, TableActions, Chip } from '@/components'
import { formatCurrency } from '@/lib'
import Link from 'next/link'

const status = {
  New: 'text-green-400 border-green-400',
  Cancelled: 'text-rose-400 border-rose-400'
}

export default function RecentOrders() {
  const renderRows = (row: any) => {
    return (
      <tr key={row.id}>
        <Td>{row.orderID}</Td>
        <Td>{row.createdAt}</Td>
        <Td>
          <Link href={`/orders/${row.customer}`} className="text-[#3F7BFF]">
            {row.customer}
          </Link>
        </Td>
        <Td>{row.destination}</Td>
        <Td>{formatCurrency(row.total)}</Td>
        <Td>{row.items} items</Td>
        <Td>
          <Chip label={row.orderStatus} classNames={status[row.orderStatus]} />
        </Td>
        <Td>{row.routeID ? row.routeID : '-'}</Td>
        <Td>
          <TableActions actions={['view']} />
        </Td>
      </tr>
    )
  }

  return (
    <div className="mx-8 rounded-lg border bg-white">
      <div className="p-4">
        <h4 className="text-base font-semibold">Recent Orders</h4>
      </div>
      <Table headers={headers} data={data} renderRows={renderRows} actions />
    </div>
  )
}

const headers = [
  { key: 'orderID', label: 'Order ID' },
  { key: 'createdAt', label: 'Created at' },
  { key: 'customer', label: 'Customer' },
  { key: 'destination', label: 'Destination' },
  { key: 'total', label: 'Total' },
  { key: 'items', label: 'Items' },
  { key: 'orderStatus', label: 'Order Status' },
  { key: 'routeID', label: 'Route ID' }
]

const data = [
  {
    id: 1,
    orderID: 'R56X-6769',
    createdAt: 'Aug 24, 2024',
    customer: 'Casey Mcbride',
    destination: '400 Roma SE, Abq',
    total: 78.0,
    items: 3,
    routeID: null,
    orderStatus: 'New'
  },
  {
    id: 2,
    orderID: 'R56X-6769',
    createdAt: 'Aug 24, 2024',
    customer: 'Johnny Tapia',
    destination: '4912 Candeleria NE, Abq',
    total: 28.0,
    items: 3,
    routeID: null,
    orderStatus: 'Cancelled'
  }
]
