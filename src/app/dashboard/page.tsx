import TotalSales from '@/components/TotalSales'
import CurrentSessions from '@/components/CurrentSessions'
import DailyStatus from '@/components/DailyStatus'
import DailyMilestones from '@/components/DailyMilestones'

export default function Dashboard() {
  return (
    <>
      <div className="h-full">
        <div className="h-full py-8">
          <div className="flex gap-4 px-8">
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-5">
                <TotalSales />
                <CurrentSessions />
              </div>
              <div className="mt-8 rounded-md bg-accent px-4 py-2">
                <DailyMilestones />
              </div>
            </div>
            <div className="w-1/3 flex-initial">
              <DailyStatus />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
