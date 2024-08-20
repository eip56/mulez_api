import clsx from 'clsx'

interface TableRowProps {
  children: React.ReactNode
  classNames?: string
}

export default function TableData({ children, classNames, ...rest }: TableRowProps) {
  return (
    <td
      {...rest}
      className={clsx('px-6 py-2.5 text-sm text-gray-500', {
        [classNames]: classNames
      })}>
      {children}
    </td>
  )
}
