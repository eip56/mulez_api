import { Table, Td } from '@/components'
import { UserIcon, EllipsisHorizontalIcon } from '@heroicons/react/20/solid'

export default function UpcomingLeave() {
  const renderRows = (row: any) => {
    return (
      <tr key={row.id}>
        <Td classNames="flex gap-2 items-center">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#24262E]">
            <UserIcon className="h-[22px] w-[22px] text-gray-600" />
          </span>
          <div className="text-sm text-white">
            {row.name}
            <span className="block text-xs text-gray-500">{row.email}</span>
          </div>
        </Td>
        <Td classNames="text-sm text-gray-400">{`${row.startDate} - ${row.endDate}`}</Td>
        <Td classNames="text-sm text-gray-400">{row.length}</Td>
      </tr>
    )
  }

  return (
    <div className="bg-card rounded-md shadow-sm">
      <div className="flex items-center px-4 py-4">
        <h5 className="text-xsx grow font-normal text-white">Upcoming Leave</h5>
        <div className="">
          <EllipsisHorizontalIcon className="h-5 w-5 text-[#5A5C61]" />
        </div>
      </div>
      <Table headers={headers} data={data} renderRows={renderRows} />
    </div>
  )
}

//bg-gradient-to-b from-[#1F2223] to-[#1C2021]

const headers = [
  { key: 'name', label: 'Name' },
  { key: 'dates', label: 'Dates' },
  { key: 'length', label: 'Length' }
]

const data = [
  {
    id: 1,
    name: 'Eric Pantoja',
    email: 'eric@mulez.app',
    startDate: 'Aug 30, 2024',
    endDate: 'Sep 1, 2024',
    length: '3 days'
  },
  {
    id: 2,
    name: 'Mike Werner',
    email: 'mike@mulez.app',
    startDate: 'Oct 3, 2024',
    endDate: 'Oct 7, 2024',
    length: '4 days'
  },
  {
    id: 3,
    name: 'Richard Blackford',
    email: 'rich@mulez.app',
    startDate: 'Oct 8, 2024',
    endDate: 'Oct 9, 2024',
    length: '1 days'
  },
  {
    id: 4,
    name: 'Ryan Sandoval',
    email: 'ryan@mulez.app',
    startDate: 'Nov 11, 2024',
    endDate: 'Nov 12, 2024',
    length: '1 days'
  }
  // {
  //   name: 'Tom Curtis',
  //   email: 'tom@mulez.app',
  //   startDate: 'Dec 20, 2024',
  //   endDate: 'Dec 30, 2024',
  //   length: '10 days'
  // }
]
