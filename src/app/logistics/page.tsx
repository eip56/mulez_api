import { Header } from '@/components/shared'
import DeliveryStatistics from '@/components/Tracking/DeliveryStatistics'
import RoutesWidget from '@/components/Tracking/RoutesWidget'

export default function TrackingPage() {
  return (
    <div className="TrackingPage">
      <Header>
        <Header.Title
          title={'Logistics Overview'}
          description={'General overview of all logistics and their status.'}
        />
      </Header>

      <div className="p-10">
        {/* <PageHeading title="Tracking" action={{ label: 'Create Tracking' }} /> */}
        <div className="grid max-h-[50vh] grid-cols-2 gap-4 overflow-hidden">
          <RoutesWidget />
          <DeliveryStatistics />
        </div>
      </div>
    </div>
  )
}
