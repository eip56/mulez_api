import { Table } from '@/components'

export default function RecentlyActive() {
  return (
    <div className="h-full max-h-full overflow-hidden">
      <Table title="Recently Active Products" headers={headers} />
    </div>
  )
}

const headers = [
  { label: 'Product Name', key: 'name' },
  { label: 'Last Updated', key: 'updated' },
  { label: 'Stock', key: 'stock' },
  { label: 'Price', key: 'price' }
]
