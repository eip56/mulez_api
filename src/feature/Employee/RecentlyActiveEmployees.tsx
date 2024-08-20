import { Chip, Table, Td } from '@/components'
import { UserIcon, EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

const statuses = {
  Offline: 'text-gray-500 bg-gray-100/10',
  Active: 'text-green-400 bg-green-400/10',
  Busy: 'text-rose-400 bg-rose-400/10',
  Away: 'text-yellow-500 bg-yellow-400/10'
}

const roles = {
  Driver: 'text-sky-500 ring-sky-400/20 bg-sky-400/10',
  Vault: 'text-yellow-500 ring-yellow-400/20 bg-yellow-400/10',
  Admin: 'text-red-400 ring-red-400/20 bg-red-400/10',
  Sudo: 'text-lime-500 ring-lime-400/20 bg-lime-400/10'
}

export default function RecentlyActiveEmployees() {
  const renderRows = (row: any) => {
    return (
      <tr key={row.id}>
        <Td>
          <div className="flex items-center gap-4">
            <div className="flex-initial">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#24262E]">
                <UserIcon className="h-6 w-6 text-gray-600" />
              </span>
            </div>
            <div>
              <div className="text-white">{row.name}</div>
              <span className="block text-xs text-white/50">@{row.at}</span>
            </div>
          </div>
        </Td>

        <Td>
          <div className="flex items-center gap-2">
            <div className={clsx('flex-none rounded-full p-1', `${statuses[row.status]}`)}>
              <div className="h-2 w-2 rounded-full bg-current" />
            </div>
            <span>{row.status}</span>
          </div>
        </Td>

        <Td>{row.email}</Td>

        <Td>{row.phone}</Td>

        <Td>
          <div className="flex gap-2">
            {row?.roles?.map((role: string, index: number) => (
              <Chip key={index} label={role} classNames={roles[role]} />
            ))}
          </div>
        </Td>

        <Td>{row.lastUpdate}</Td>

        <Td>
          <div className="flex justify-end">
            <button type="button" className="rounded-full p-1 text-slate-500 shadow-sm">
              <EllipsisHorizontalIcon aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </Td>
      </tr>
    )
  }

  return (
    <div className="bg-card rounded-md shadow-sm">
      <div className="flex items-center px-6 py-4">
        <h5 className="text-xsx grow font-normal text-white">Recently Active Employees</h5>
      </div>
      <Table headers={headers} data={data} renderRows={renderRows} actions />
    </div>
  )
}

const headers = [
  { key: 'name', label: 'Name' },
  { key: 'status', label: 'Status' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'roles', label: 'Roles' },
  { key: 'lastUpdate', label: 'Last Update' }
]

const data = [
  {
    id: 1,
    name: 'Eric Pantoja',
    at: 'eric',
    email: 'eric@mulez.app',
    phone: '(505) 555-5555',
    roles: ['Sudo'],
    lastUpdate: '3 min ago',
    status: 'Busy'
  },
  {
    id: 2,
    name: 'Mike Werner',
    at: 'mike',
    email: 'mike@mulez.app',
    phone: '(505) 555-5555',
    roles: ['Admin'],
    lastUpdate: '8 min ago',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Richard Blackford',
    at: 'rich',
    email: 'rich@mulez.app',
    phone: '(505) 555-5555',
    roles: ['Admin'],
    lastUpdate: '13 min ago',
    status: 'Away'
  },
  {
    id: 4,
    name: 'Ashley Alvarez',
    at: 'acakes',
    email: 'ashley@mulez.app',
    phone: '(505) 555-5555',
    roles: ['Admin'],
    lastUpdate: '25 min ago',
    status: 'Active'
  },
  {
    id: 5,
    name: 'Ryan Sandoval',
    at: 'ryan',
    email: 'ryan@mulez.app',
    phone: '(505) 555-5555',
    roles: ['Driver', 'Vault'],
    lastUpdate: '30 min ago',
    status: 'Busy'
  },
  {
    id: 6,
    name: 'Luis Valenzuela',
    at: 'luis',
    email: 'luis@mulez.app',
    phone: '(505) 555-5555',
    roles: ['Driver'],
    lastUpdate: '38 min ago',
    status: 'Offline'
  },
  {
    id: 7,
    name: 'Matthew Hoisington',
    at: 'matt',
    email: 'matt@mulez.app',
    phone: '(505) 555-5555',
    roles: ['Driver'],
    lastUpdate: '40 min ago',
    status: 'Away'
  },
  {
    id: 8,
    name: 'Marcos Rodrigues',
    at: 'marcos',
    email: 'marcos@mulez.app',
    phone: '(505) 555-5555',
    roles: ['Driver', 'Vault'],
    lastUpdate: '45 min ago',
    status: 'Active'
  }
]
