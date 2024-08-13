import { Header, Table, Td, Chip } from '@/components'
import { EyeIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { formatCurrency } from '@/lib'

export default function RecentOrders() {
  const renderRows = (row: any) => {
    return (
      <tr key={row.id}>
        <Td>{row.orderID}</Td>
        <Td>{row.name}</Td>
        <Td>5225 Justin Drive, Albuquerque</Td>
        <Td>{formatCurrency(row.price)}</Td>
        <Td>8/8/2024</Td>
        <Td>
          <Chip label="New" />
        </Td>
        <Td>
          <div className="flex items-center space-x-2">
            <EyeIcon className="cursor-pointer text-gray-500" />
            <EllipsisHorizontalIcon className="cursor-pointer text-gray-500" />
          </div>
        </Td>
      </tr>
    )
  }

  return <Table title="Latest Orders" headers={headers} data={data} renderRows={renderRows} />
}

const headers = [
  { key: 'name', label: 'ID' },
  { key: 'vendor', label: 'Customer' },
  { key: 'stock', label: 'Destination' },
  { key: 'price', label: 'Amount' },
  { key: 'category', label: 'Delivery Date' },
  { key: 'revenue', label: 'Status' }
]

const data = [
  {
    id: 1,
    orderID: 'A56X-6769',
    name: 'Casey Mcbride',
    email: 'garnerstephanie@mcbride.com',
    vendor: "Mr. B's Frosty Flowers",
    category: 'Flower',
    price: 25,
    stock: 100,
    revenue: 2500,
    total: 85
  },
  {
    id: 2,
    orderID: 'A56X-6769',
    name: 'Adam Jones',
    email: 'middletondanielle@gmail.com',
    vendor: 'Raw Greens',
    category: 'Flower',
    price: 20,
    stock: 30,
    revenue: 500,
    total: 85
  },
  {
    id: 3,
    orderID: 'A56X-6769',
    name: 'Michael Jones',
    email: 'russell93@pearson-murphy.com',
    vendor: 'P37',
    category: 'Pre-Roll',
    price: 35,
    stock: 100,
    revenue: 2500,
    total: 85
  },
  {
    id: 4,
    orderID: 'A56X-6769',
    name: 'Jill Henry',
    email: 'rhondaanderson@yahoo.com',
    vendor: 'WYLD',
    category: 'Edible',
    price: 25,
    stock: 50,
    revenue: 1500,
    total: 85
  }
]
