import { Header, Table, Td, Chip } from '@/components'
import { EyeIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { formatCurrency } from '@/lib'

export default function RecentDeliveries() {
  const renderRows = (row: any) => {
    return (
      <tr key={row.id}>
        <Td>{row.routeID}</Td>
        <Td>{row.driver}</Td>
        <Td>
          <Chip label={row.waypoints} />
        </Td>
        <Td>{row.duration}</Td>
        <Td>{row.status}</Td>
        <Td>{formatCurrency(row.grossValue)}</Td>
        <Td>
          <div className="flex items-center justify-end gap-4">
            <button>
              <EyeIcon className="h-[18px] w-[18px] text-gray-500 hover:text-white" />
            </button>
            <button>
              <EllipsisHorizontalIcon className="h-[18px] w-[18px] text-gray-500 hover:text-white" />
            </button>
          </div>
        </Td>
      </tr>
    )
  }

  return <Table title="Latest Routes" headers={headers} data={data} renderRows={renderRows} />
}

const headers = [
  { key: 'name', label: 'Route ID' },
  { key: 'vendor', label: 'Driver' },
  { key: 'stock', label: 'Way Points' },
  { key: 'price', label: 'Duration' },
  { key: 'revenue', label: 'Status' },
  { key: 'revenue', label: 'Gross' }
]

const data = [
  {
    id: 1,
    routeID: 'A56X-6769',
    driver: '-',
    waypoints: 3,
    duration: '1h 30m',
    status: 'Unassigned',
    grossValue: 2500
  },
  {
    id: 2,
    routeID: 'A56X-6769',
    driver: 'Mike Werner',
    waypoints: 3,
    duration: '1h 30m',
    status: 'In Progress',
    grossValue: 2500
  },
  {
    id: 3,
    routeID: 'A56X-6769',
    driver: 'Eric Pantoja',
    waypoints: 3,
    duration: '1h 30m',
    status: 'In Progress',
    grossValue: 2500
  }
]
