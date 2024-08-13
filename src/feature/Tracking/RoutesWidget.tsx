import Link from 'next/link'
import { CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline'
import { routes } from './data'

export default function RoutesWidget() {
  return (
    <div className="RoutesWidget mt-8 max-h-[50vh] overflow-scroll rounded-md bg-[#191919] p-6">
      <div className="flex items-center">
        <div className="flex-1">
          <h6 className="text-white">Scheduled Routes</h6>
        </div>
        <div className="flex">
          <Link
            href="/tracking"
            className="text-xs text-gray-500 underline decoration-gray-500 decoration-dashed transition-colors duration-75 ease-linear hover:text-white hover:decoration-white"
          >
            History
          </Link>
        </div>
      </div>
      <ul role="list" className="mt-8 space-y-2">
        {routes?.map((r) => (
          <li
            key={r.id}
            className="relative flex gap-x-4 border-b border-white/5 py-1 last:border-b-0"
          >
            <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-[#191919] text-white">
              &#8858;
            </div>
            <div className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
              <div className="flex items-center">
                <div className="flex-1">
                  <span className="font-sm text-gray-500">
                    {r.type ? 'Delivery' : 'Wholesale'}
                  </span>
                  <p className="gap-2 font-medium text-white">
                    ID: 109-270 &bull; {r.cargo} packages{' '}
                  </p>
                  <p className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                    {r.origin} &rarr; {r.destination}
                  </p>
                </div>
                <div className="text-right">
                  <p className="flex items-center gap-2 font-medium text-white">
                    <ClockIcon className="h-3 w-3 text-gray-500" /> {r.duration}
                  </p>
                  <p className="flex flex-none items-center gap-2 py-0.5 text-xs leading-5 text-gray-500">
                    <CurrencyDollarIcon className="h-3 w-3 text-gray-500" />
                    &#36;{r.value}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

{
  /* <div
              className={classNames(
                activityItemIdx === activity.length - 1 ? 'h-6' : '-bottom-6',
                'absolute left-0 top-0 flex w-6 justify-center',
              )}
            >
              <div className="w-px bg-gray-100" />
            </div>

            <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-[#191919]">
              <div className="h-1.5 w-1.5 rounded-full ring-2 ring-gray-300" />
            </div>
            <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
              <span className="font-medium text-white">
                {activityItem.person.name}
              </span>{' '}
              {activityItem.type} the invoice.
            </p>
            <time
              dateTime={activityItem.dateTime}
              className="flex-none py-0.5 text-xs leading-5 text-gray-500"
            >
              {activityItem.date}
            </time> */
}
