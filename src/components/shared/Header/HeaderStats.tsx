import { HeaderStatProps } from '.'
import clsx from 'clsx'

export default function HeaderStats({ stats }: HeaderStatProps) {
  return (
    <div className="grid grid-cols-1 bg-gray-700/10 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={stat.name}
          className={clsx('border-t border-white/5 px-8 py-6', {
            'border-l': index % 2 === 1 || index === 2,
          })}
        >
          <p className="text-sm font-medium leading-6 text-gray-400">
            {stat.name}
          </p>
          <p className="mt-2 flex items-baseline gap-x-2">
            <span className="text-4xl font-semibold tracking-tight text-white">
              {stat.value}
            </span>
            {stat.unit ? (
              <span className="text-sm text-gray-400">{stat.unit}</span>
            ) : null}
          </p>
        </div>
      ))}
    </div>
  )
}
