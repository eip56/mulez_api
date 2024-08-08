import React from 'react'
import clsx from 'clsx'
import { formatDate } from '@/lib/time-utils'
import { getStatus, calculateAge } from '@/lib/value-formatters'

interface Header {
  key: string
  label: string
  formatter?: string
}

interface Data {
  id: string | number
  [key: string]: any
}

interface SimpleTableProps {
  headers: Header[]
  data: Data[]
  renderActions?: (row: Data) => JSX.Element
  renderRows?: (
    row: Data,
    headers: Header[],
    formatters: { [key: string]: (value: any) => string }
  ) => JSX.Element
}

const formatters: { [key: string]: (value: any) => any } = {
  date: formatDate,
  status: getStatus,
  age: calculateAge
  // Add more formatters here as needed
}

/**
 * SimpleTable component renders a dynamic table based on provided headers and data.
 *
 * @param {SimpleTableProps} props - The props object containing headers, data, and optional callbacks for actions and custom row rendering.
 * @param {Header[]} props.headers - An array of header objects with key, label, and optional formatter properties.
 * @param {Data[]} props.data - An array of data objects where each object corresponds to a row.
 * @param {(row: Data) => JSX.Element} [props.renderActions] - Optional callback to render custom actions for each row.
 * @param {(row: Data, headers: Header[], formatters: { [key: string]: (value: any) => string }) => JSX.Element} [props.renderRows] - Optional callback to render custom rows.
 *
 * @returns {JSX.Element} The rendered table component.
 */
const SimpleTable: React.FC<SimpleTableProps> = ({ headers, data, renderActions, renderRows }) => {
  return (
    <div className="flow-root">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2 align-middle">
          <table className="min-w-full">
            <thead className="bg-[#151516]">
              <tr>
                {headers?.map(({ key, label }) => (
                  <th
                    key={key}
                    scope="col"
                    className="p-4 text-left text-sm font-semibold text-white">
                    {label}
                  </th>
                ))}
                {renderActions && (
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-right text-sm font-semibold text-white">
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2E2E31] bg-[#1C1C1F]">
              {data?.map(d =>
                renderRows ? (
                  renderRows(d, headers, formatters)
                ) : (
                  <tr key={d.id}>
                    {headers?.map(({ key, formatter }, index) => (
                      <td
                        className={clsx('whitespace-nowrap p-4 text-sm font-medium', {
                          'text-white/65': index === 0,
                          'text-gray-500': index !== 0
                        })}
                        key={`${d.id}-${key}`}>
                        {formatter ? formatters[formatter](d[key]) : d[key]}
                      </td>
                    ))}
                    {renderActions && (
                      <td className="flex justify-end gap-4 whitespace-nowrap p-4 text-sm font-medium">
                        {renderActions(d)}
                      </td>
                    )}
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SimpleTable
