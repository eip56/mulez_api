import { Card, CardHeader, CardContent } from '@/components'
import GoogleMap from '@/components/GoogleMaps/GoogleMap'
import clsx from 'clsx'

// @TODO Fix list overflow scrolling
export default function Routes() {
  return (
    <Card className="Routes">
      <CardHeader>
        <div className="flex-1 text-base font-medium">Routes</div>
        <div className="text-xs underline decoration-dashed">History</div>
      </CardHeader>
    </Card>
  )
}

{
  /* <Card classNames="flex-1">
<CardTitle title="Latest Routes" />
<CardContent>
  <div className="flex h-full max-h-full w-full max-w-full gap-4 overflow-hidden">
    <div className="h-full max-h-full flex-1">
      <GoogleMap />
    </div>

    <ol className="flex w-2/6 flex-initial flex-col gap-4 divide-y divide-white/5 overflow-y-scroll">
      {data?.map((route, index) => (
        <li className={clsx({ 'pt-4': index > 0 })} key={route.id}>
          <div className="grid grid-cols-2 gap-2">
            <p className="text-sm text-gray-500">
              Route:
              <span className="ml-1 text-sm font-light text-white">{route.routeID}</span>
            </p>
            <p className="text-xs text-gray-500">
              Driver:
              <span className="ml-1 text-sm font-light text-white">{route.driver}</span>
            </p>
          </div>
          <p className="mb-4 mt-1 text-xs text-gray-500">Retail</p>
          <div className="mt-3 grid grid-cols-4">
            <p className="text-xs uppercase text-[#009351]">
              Start
              <span className="block font-semibold normal-case text-gray-500">
                {route.start}
              </span>
            </p>
            <p className="text-xs uppercase text-[#009351]">
              Stops
              <span className="block font-semibold normal-case text-gray-500">
                {route.stops}
              </span>
            </p>
            <p className="text-xs uppercase text-[#009351]">
              Distance
              <span className="block font-semibold normal-case text-gray-500">
                {route.distance}
                <span className="font-normal">mi</span>
              </span>
            </p>
            <p className="text-xs font-semibold uppercase text-[#009351]">
              Est<span className="block normal-case text-gray-500">{route.est}</span>
            </p>
          </div>
        </li>
      ))}
    </ol>
  </div>
</CardContent>
</Card> */
}

const data = [
  {
    id: 1,
    routeID: 'RT-0268',
    driver: 'Eric P.',
    start: '2:00 PM',
    stops: '5',
    distance: 23,
    est: '1 h 30 m'
  },
  {
    id: 2,
    routeID: 'RT-0448',
    driver: 'Mike W.',
    start: '2:15 PM',
    stops: '3',
    distance: 16,
    est: '45 m'
  },
  {
    id: 3,
    routeID: 'RT-0571',
    driver: 'Unassigned',
    start: '2:45 PM',
    stops: '5',
    distance: 16,
    est: '55 m'
  },
  {
    id: 4,
    routeID: 'RT-0898',
    driver: 'Unassigned',
    start: '3:30 PM',
    stops: '6',
    distance: 45,
    est: '2 h 15 m'
  },
  {
    id: 5,
    routeID: 'RT-0571',
    driver: 'Unassigned',
    start: '2:45 PM',
    stops: '5',
    distance: 16,
    est: '55 m'
  },
  {
    id: 6,
    routeID: 'RT-0898',
    driver: 'Unassigned',
    start: '3:30 PM',
    stops: '6',
    distance: 45,
    est: '2 h 15 m'
  },
  {
    id: 7,
    routeID: 'RT-0571',
    driver: 'Unassigned',
    start: '2:45 PM',
    stops: '5',
    distance: 16,
    est: '55 m'
  },
  {
    id: 8,
    routeID: 'RT-0898',
    driver: 'Unassigned',
    start: '3:30 PM',
    stops: '6',
    distance: 45,
    est: '2 h 15 m'
  }
]
