import { Card } from '..'
import { default as Td } from './TableData'
import clsx from 'clsx'

interface IProps {
  title?: string
  headers: { key: string; label: string }[]
  colgroup?: string[]
  renderRows?: (row: any) => JSX.Element
  data?: any[]
}

const thStyles = 'px-6 py-4 text-left text-xs font-medium text-[#F9F9F9]'
const tdStyles = 'whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500'

export default function Table({ title, colgroup, headers, renderRows, data }: IProps) {
  return (
    <Card isTable>
      {title && <Card.Title title={title} />}
      <table className="min-w-full table-auto">
        {colgroup && (
          <colgroup>
            {colgroup.map((col, index) => (
              <col key={index} className={col} />
            ))}
          </colgroup>
        )}
        <thead className="bg-[#151516]">
          <tr>
            {headers?.map(({ key, label }) => (
              <th key={key} scope="col" className={thStyles}>
                {label}
              </th>
            ))}
            <th className={thStyles}>&nbsp;</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#2E2E31]">
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
    </Card>
  )
}

export { default as Td } from './TableData'
