import { Header, Table, Td, Chip } from '@/components'
import { EyeIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { formatCurrency } from '@/lib'

export default function InventoryTable() {
  const renderRows = (row: any) => {
    return (
      <tr key={row.id}>
        <Td>{row.name}</Td>
        <Td>{row.vendor}</Td>
        <Td>
          <Chip label={row.category} />
        </Td>
        <Td>{row.price}</Td>
        <Td>{row.stock}</Td>
        <Td>{formatCurrency(row.revenue)}</Td>
        <Td>
          <div className="flex items-center space-x-2">
            <EyeIcon className="cursor-pointer text-gray-500" />
            <EllipsisHorizontalIcon className="cursor-pointer text-gray-500" />
          </div>
        </Td>
      </tr>
    )
  }

  return <Table title="Latest Routes" headers={headers} data={data} renderRows={renderRows} />
}

const headers = [
  { key: 'name', label: 'Name' },
  { key: 'vendor', label: 'Vendor' },
  { key: 'category', label: 'Category' },
  { key: 'price', label: 'Price' },
  { key: 'stock', label: 'Stock' },
  { key: 'revenue', label: 'Revenue' }
]

const data = [
  {
    id: 1,
    name: 'Gorilla Glue',
    vendor: "Mr. B's Frosty Flowers",
    category: 'Flower',
    price: 25,
    stock: 100,
    revenue: 2500
  },
  {
    id: 2,
    name: 'Blue Dream',
    vendor: 'Raw Greens',
    category: 'Flower',
    price: 20,
    stock: 30,
    revenue: 500
  },
  {
    id: 3,
    name: 'Wedding Cake',
    vendor: 'P37',
    category: 'Pre-Roll',
    price: 35,
    stock: 100,
    revenue: 2500
  },
  {
    id: 4,
    name: 'Boisinberry Gummy',
    vendor: 'WYLD',
    category: 'Edible',
    price: 25,
    stock: 50,
    revenue: 1500
  }
]
