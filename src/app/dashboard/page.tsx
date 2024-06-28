import Navigation from '@/components/Navigation'
import AppBar from '@/components/Appbar'
import TotalSales from '@/components/TotalSales'
import CurrentSessions from '@/components/CurrentSessions'
import DailyStatus from '@/components/DailyStatus'

export default function Dashboard() {
  return (
    <>
      <div className="h-full bg-mainbg">
        <Navigation />
        <div className="h-full lg:pl-60">
          {/* <AppBar /> */}
          <main className="h-full py-8">
            <div className="flex gap-4 px-8">
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-5">
                  <TotalSales />
                  <CurrentSessions />
                </div>
              </div>
              <div className="w-1/3 flex-initial">
                <DailyStatus />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
