import { Header, Table, Chip } from '@/components/shared'
import { EyeIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { data } from './data'

export default function TrackingPage() {
  const renderRows = row => {
    return (
      <tr key={row.id}>
        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
          {row.routeId}
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
          <Chip label={row.type} type />
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
          {row.duration}
        </td>
        <td className="flex items-center gap-2 whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
          <div className={`bg-white/10} flex-none rounded-full p-1 text-white`}>
            <div className="h-1.5 w-1.5 rounded-full bg-current" />
          </div>
          <div className="hidden text-gray-400 sm:block">{row.status}</div>
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
          {row.scheduled}
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
          $ {row.gross}.00
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
    <div className="TrackingPage p-6">
      <Header>
        <Header.Title
          title={'Logistics Overview'}
          description={'General overview of all logistics and their status.'}
        />
      </Header>

      <Table title="Latest Routes" headers={headers} data={data} renderRows={renderRows} />
    </div>
  )
}

const headers = [
  { key: 'routeId', label: 'Route ID' },
  { key: 'type', label: 'Type' },
  { key: 'duration', label: 'Duration' },
  { key: 'status', label: 'Status' },
  { key: 'scheduled', label: 'Scheduled' },
  { key: 'gross', label: 'Gross Value' }
]
