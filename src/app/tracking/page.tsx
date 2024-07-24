import PageHeading from '@/components/shared/PageHeading/PageHeading'
import DeliveryStatistics from '@/components/Tracking/DeliveryStatistics'
import RoutesWidget from '@/components/Tracking/RoutesWidget'

export default function TrackingPage() {
  return (
    <div className="TrackingPage">
      <div className="p-10">
        <PageHeading title="Tracking" action={{ label: 'Create Tracking' }} />
        <div className="grid max-h-[50vh] grid-cols-2 gap-4 overflow-hidden">
          <RoutesWidget />
          <DeliveryStatistics />
        </div>
      </div>
    </div>
  )
}
