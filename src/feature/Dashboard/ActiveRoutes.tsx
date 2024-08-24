import { Card } from '@/components'
import { EllipsisHorizontalIcon, MapPinIcon } from '@heroicons/react/20/solid'
import GoogleMap from '@/components/GoogleMaps/GoogleMap'
import Image from 'next/image'

export default function ActiveRoutes() {
  return (
    <Card>
      <div className="mb-6 flex items-center">
        <h4 className="grow text-base font-medium">Active Routes</h4>
        <button className="rounded-full p-1 transition-all hover:bg-gray-200">
          <EllipsisHorizontalIcon className="h-4" />
        </button>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-4 flex flex-col gap-3 border-b pb-4">
          <div className="flex gap-3">
            <span className="relative h-8 w-8 flex-initial">
              <Image alt="" src="/profilepic.png" height="32" width="32" className="rounded-full" />
              <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
            </span>
            <div>
              <h6 className="text-smd font-medium leading-none">Mike Werner</h6>
              <p className="flex items-center gap-1 text-sm text-gray-500">
                <MapPinIcon className="h-3" />
                Bowery Street 10 deliveries
              </p>
            </div>
          </div>
        </div>
        <div className="h-80 w-full overflow-hidden rounded-lg bg-gray-200">
          <GoogleMap />
        </div>
        <div className="mt-4 grid grid-cols-4 gap-4 divide-x">
          <div className="text-center">
            <p className="text-md font-semibold">46 mi</p>
            <span className="text-sm font-semibold text-gray-500">Distance</span>
          </div>
          <div className="text-center">
            <p className="text-md font-semibold">10</p>
            <span className="text-sm font-semibold text-gray-500">Stops</span>
          </div>
          <div className="text-center">
            <p className="text-md font-semibold">2 h 45 m</p>
            <span className="text-sm font-semibold text-gray-500">Duration</span>
          </div>
          <div className="text-center">
            <p className="text-md font-semibold">$525</p>
            <span className="text-sm font-semibold text-gray-500">Gross Value</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
