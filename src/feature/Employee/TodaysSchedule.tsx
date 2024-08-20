'use client'
import { generateHalfHourIntervals } from '@/lib/gantt-utils'

export default function TodaysSchedule() {
  const intervals = generateHalfHourIntervals()

  return (
    <div className="ScheduleGantt flex h-1/2 grow flex-col">
      <div className="shink flex">
        {intervals?.map(({ time, meridiem }, index) => (
          <div className="relative flex-1 px-4 text-center text-sm text-gray-500" key={time}>
            {time}
            <span className="pl-1 text-xxs text-gray-600">{meridiem}</span>
            {index < intervals.length - 1 && (
              <span className="absolute bottom-0 right-0 block h-2 w-px bg-gray-600" />
            )}
          </div>
        ))}
      </div>

      <div className="flex grow bg-[#151617]">
        {Array.from({ length: 12 }).map((_, index) => {
          return <div className="h-full w-full flex-1 border-r border-[#1C1E1F]" key={index} />
        })}
      </div>
    </div>
  )
}
