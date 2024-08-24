import { EyeIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'

interface TableActionsProps {
  actions?: string[]
}

const btns = {
  view: { Icon: EyeIcon, label: 'View' },
  edit: { Icon: EllipsisHorizontalIcon, label: 'Edit' }
}

export default function TableActions({ actions }: TableActionsProps) {
  return (
    <div className="flex items-center justify-end gap-2">
      {actions?.map((action, index) => {
        const { Icon } = btns[action]
        return (
          <button
            key={index}
            className="group rounded-full p-1 text-gray-500 transition-all hover:bg-gray-200">
            <Icon className="h-4.5 w-4.5 text-gray-500 transition-all group-hover:text-[#3F7BFF]" />
          </button>
        )
      })}
    </div>
  )
}
