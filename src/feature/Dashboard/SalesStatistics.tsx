'use client'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'

export default function SalesStatistics() {
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <div className="flex items-center">
        <h3 className="grow text-base font-medium">Sales Statistics</h3>
        <button className="rounded-full p-1 transition-all hover:bg-gray-200">
          <EllipsisHorizontalIcon className="h-4" />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 divide-x">
        <div className="flex justify-center gap-2">
          <div className="flex-initial">
            <span className="mt-0.5 block h-4 w-4 rounded-full border border-4 border-[#9A55FF]" />
          </div>
          <div>
            <h4 className="flex items-center gap-2 text-sm font-medium text-gray-500">
              Total Revenue
            </h4>
            <p className="mt-1 font-bold">
              $45,456.00 <span className="text-sm font-medium text-gray-300">USD</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-2">
          <div className="flex-initial">
            <span className="mt-0.5 block h-4 w-4 rounded-full border border-4 border-[#8047D4]" />
          </div>
          <div>
            <h4 className="flex items-center gap-2 text-sm font-medium text-gray-500">
              Total Sales
            </h4>
            <p className="mt-1 font-bold">
              8,550 <span className="text-sm font-medium text-gray-300">Products</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-2">
          <div className="flex-initial">
            <span className="mt-0.5 block h-4 w-4 rounded-full border border-4 border-[#DBC3FF]" />
          </div>
          <div>
            <h4 className="flex items-center gap-2 text-sm font-medium text-gray-500">
              Total Views
            </h4>
            <p className="mt-1 font-bold">
              28,550 <span className="text-sm font-medium text-gray-300">Views</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 h-52">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{ fontSize: '12px', fill: '#d1d5db' }} tickLine={false} />
            <YAxis
              tickLine={false}
              type="number"
              domain={[0, 20000]}
              tick={{ fontSize: '12px', fill: '#d1d5db' }}
              axisLine={false}
              allowDataOverflow={true}
            />
            {/* <Tooltip /> */}
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#9A55FF" fill="#9A55FF" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#8047D4" fill="#8047D4" />
            <Area type="monotone" dataKey="amt" stackId="1" stroke="#DBC3FF" fill="#DBC3FF" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

const data = [
  {
    name: '21 Aug',
    uv: 0,
    pv: 0,
    amt: 0
  },
  {
    name: '21 Aug',
    uv: 1100,
    pv: 1600,
    amt: 2000
  },
  {
    name: '22 Aug',
    uv: 1500,
    pv: 2000,
    amt: 3000
  },
  {
    name: '23 Aug',
    uv: 2750,
    pv: 4500,
    amt: 3500
  },
  {
    name: '24 Aug',
    uv: 5000,
    pv: 8000,
    amt: 9000
  }
]
