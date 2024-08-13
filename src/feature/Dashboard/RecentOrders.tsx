import { Card, CardTitle, CardContent } from '@/components'

export default function RecentOrders() {
  return (
    <div className="w-1/3 flex-initial">
      <Card classNames="">
        <CardTitle title="Recent Orders" />
        <CardContent>
          <div className="">
            <ul>
              <li>1</li>
              <li>2</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const headers = [
  { key: 'order', label: 'Order ID' },
  { key: 'date', label: 'Date' },
  { key: 'customer', label: 'Customer' },
  { key: 'amount', label: 'Amount' },
  { key: 'status', label: 'Status' }
]

const data = [
  {
    order: 'ORD-001',
    date: '12/12/2021',
    customer: 'John Doe',
    amount: '$120',
    status: 'Delivered'
  },
  {
    order: 'ORD-002',
    date: '12/12/2021',
    customer: 'Jane Doe',
    amount: '$120',
    status: 'Delivered'
  },
  {
    order: 'ORD-003',
    date: '12/12/2021',
    customer: 'John Doe',
    amount: '$120',
    status: 'Delivered'
  },
  {
    order: 'ORD-004',
    date: '12/12/2021',
    customer: 'Jane Doe',
    amount: '$120',
    status: 'Delivered'
  },
  {
    order: 'ORD-005',
    date: '12/12/2021',
    customer: 'John Doe',
    amount: '$120',
    status: 'Delivered'
  },
  {
    order: 'ORD-006',
    date: '12/12/2021',
    customer: 'Jane Doe',
    amount: '$120',
    status: 'Delivered'
  },
  {
    order: 'ORD-007',
    date: '12/12/2021',
    customer: 'John Doe',
    amount: '$120',
    status: 'Delivered'
  },
  {
    order: 'ORD-008',
    date: '12/12/2021',
    customer: 'Jane Doe',
    amount: '$120',
    status: 'Delivered'
  }
]
