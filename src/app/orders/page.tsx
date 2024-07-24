import PageHeading from '@/components/shared/PageHeading/PageHeading'
import BarChart from '@/components/shared/Charts/BarChart'

const PAGE_TITLE = 'Orders'

export default function Orders() {
  const data = [10, 20, 30, 40, 50]

  return (
    <div className="mx-auto max-w-7xl py-10">
      <PageHeading title={PAGE_TITLE} />

      <div className="mt-8 grid h-[30vh] max-h-[30vh] grid-cols-2">
        <div className="rounded-md bg-[#191919] p-6">
          <BarChart
            data={data}
            barColor="steelblue"
            barWidth={0.9}
            barSpacing={0.2}
          />
        </div>
      </div>
    </div>
  )
}
