import { Card } from '..'
import { default as Td } from './TableData'
import clsx from 'clsx'

interface IProps {
  headers: { key: string; label: string }[]
  colgroup?: string[]
  renderRows?: (row: any) => JSX.Element
  actions?: Boolean
  data?: any[]
}

const thStyles = 'px-6 py-3 text-left text-xs font-medium text-[#8A8B8C]'
const tdStyles = 'whitespace-nowrap px-6 py-2.5 text-sm text-slate-500'

export default function Table({ colgroup, headers, renderRows, data, actions }: IProps) {
  return (
    <table className="min-w-full table-auto">
      {colgroup && (
        <colgroup>
          {colgroup.map((col, index) => (
            <col key={index} className={col} />
          ))}
        </colgroup>
      )}
      <thead className="border-b">
        <tr>
          {headers?.map(({ key, label }) => (
            <th key={key} scope="col" className={thStyles}>
              {label}
            </th>
          ))}
          {actions && <th className={thStyles}>&nbsp;</th>}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {data?.map(d =>
          renderRows ? (
            renderRows(d)
          ) : (
            <tr key={d.id}>
              {headers.reduce((cells, { key }, index) => {
                const value = d[key]
                cells.push(
                  <td key={index} className={tdStyles}>
                    {value}
                  </td>
                )
                return cells
              }, [] as React.ReactNode[])}
            </tr>
          )
        )}
      </tbody>
    </table>
  )
}

export { default as Td } from './TableData'
