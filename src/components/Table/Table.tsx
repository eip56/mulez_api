import { Card } from '..'
import { default as Td } from './TableData'
import clsx from 'clsx'

interface IProps {
  title?: string
  headers: { key: string; label: string }[]
  colgroup?: string[]
  renderRows?: (row: any) => JSX.Element
  actions?: Boolean
  data?: any[]
}

//divide-y divide-white/[0.08]
// th #151516 divide- #2E2E31
const thStyles = 'px-6 py-3 text-left text-xs font-semibold text-[#8A8B8C]'
const tdStyles = 'whitespace-nowrap px-6 py-2.5 text-sm text-slate-500'

export default function Table({ title, colgroup, headers, renderRows, data, actions }: IProps) {
  return (
    <div>
      {title && <Card.Title title={title} />}
      <table className="min-w-full table-auto">
        {colgroup && (
          <colgroup>
            {colgroup.map((col, index) => (
              <col key={index} className={col} />
            ))}
          </colgroup>
        )}
        <thead className="bg-white/[0.025]">
          <tr>
            {headers?.map(({ key, label }) => (
              <th key={key} scope="col" className={thStyles}>
                {label}
              </th>
            ))}
            {actions && <th className={thStyles}>&nbsp;</th>}
          </tr>
        </thead>
        <tbody className="">
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
    </div>
  )
}

export { default as Td } from './TableData'
