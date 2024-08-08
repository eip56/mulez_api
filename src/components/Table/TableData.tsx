interface TableRowProps {
  children: React.ReactNode
  classNames?: string
}

export default function TableData({ children, classNames, ...rest }: TableRowProps) {
  return (
    <td {...rest} className={`whitespace-nowrap px-6 py-4 text-sm text-gray-500 ${classNames}`}>
      {children}
    </td>
  )
}
