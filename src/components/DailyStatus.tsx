'use client'
import { useDateTime } from '@/lib/date-time-utils'

export default function DailyStatus() {
  return (
    <div className="rounded-md bg-accent px-4 py-2">
      <div className="flex items-center justify-between">
        <h5 className="text-sm text-gray-500">
          Daily Status - {useDateTime()}
        </h5>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </div>

      <div className="from-pp to-ppl h-48 rounded-md bg-gradient-to-b p-8"></div>

      <div className="mt-4 grid grid-rows-1 border-t border-gray-700 pt-4">
        <h6 className="text-white">Total Sales Breakdown</h6>

        <div className="align-center grid grid-cols-2 py-2">
          <p className="text-sm text-gray-500">Retail</p>
          <p className="text-md text-end text-white">&#36;1,153.00</p>
        </div>

        <div className="align-center grid grid-cols-2 py-2">
          <p className="text-sm text-gray-500">Wholesale</p>
          <p className="text-md text-end text-white">&#36;4,425.00</p>
        </div>
      </div>

      <div className="align-center mt-4 grid grid-cols-2 border-t border-gray-700 pt-4">
        <h6 className="text-white">Total Sales</h6>
        <p className="text-md text-end text-white">&#36;5,578.00</p>
      </div>

      <div className="mt-4 grid grid-rows-1 border-t border-gray-700 pt-4">
        <h6 className="text-white">Total Sales by Channel</h6>

        <div className="align-center grid grid-cols-2 py-2">
          <p className="text-sm text-gray-500">Online Retail</p>
          <p className="text-md text-end text-white">66</p>
        </div>

        <div className="align-center grid grid-cols-2 py-2">
          <p className="text-sm text-gray-500">Wholesale</p>
          <p className="text-md text-end text-white">4</p>
        </div>
      </div>
    </div>
  )
}
