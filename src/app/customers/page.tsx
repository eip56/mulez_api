import SimpleTable from '@/components/shared/Table/SimpleTable'
import { EyeIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { calculateAge } from '@/lib/value-formatters'
import clsx from 'clsx'
import { customers } from './data'

const PAGE_TITLE = 'Customers'

export default function Employees() {
  const renderActions = (customer) => {
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

  const renderRows = (customer, headers, formatters) => {
    return (
      <tr key={customer.id}>
        {headers?.map(({ key, formatter }, index) => (
          <td
            className={clsx('whitespace-nowrap p-2 text-sm font-medium', {
              'text-white/65': index === 0,
              'text-gray-500': index !== 0,
            })}
            key={`${customer.id}-${key}`}
          >
            {key === 'dob' ? (
              <span className="mr-2 rounded-md bg-white/10 px-2 py-1 text-[10px] text-white/75">
                {calculateAge(customer[key])}
              </span>
            ) : null}
            {formatter ? formatters[formatter](customer[key]) : customer[key]}
            {key === 'name' ? (
              <div className="font-xs text-sm text-gray-500">
                #{customer.uid}
              </div>
            ) : null}
          </td>
        ))}
        <td className="flex justify-end gap-4 whitespace-nowrap p-4 text-sm font-medium">
          {renderActions(customer)}
        </td>
      </tr>
    )
  }

  return (
    <div className="mx-auto p-10">
      {/* <PageHeading title={PAGE_TITLE} /> */}

      <div className="max-h-[50vh] overflow-y-auto">
        <SimpleTable
          headers={[
            { label: 'Name', key: 'name' },
            { label: 'Email', key: 'email' },
            { label: 'Date of Birth', key: 'dob', formatter: 'date' },
            { label: 'Status', key: 'status', formatter: 'status' },
            { label: 'Last Update', key: 'updatedAt', formatter: 'date' },
          ]}
          data={customers}
          renderRows={renderRows}
        />
      </div>
    </div>
  )
}
