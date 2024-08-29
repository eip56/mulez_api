import { Card, CardHeader, CardContent, Table, Td, Chip } from '@/components'
import { formatCurrency } from '@/lib/currency-utils'

export default function RecentOrders() {
  const renderRows = row => {
    return (
      <tr key={row.id}>
        <Td>{row.customer}</Td>
        <Td>
          <Chip label={row.status} />
        </Td>
        <Td>{row.city}</Td>
        <Td>{formatCurrency(row.amount)}</Td>
        <Td>{row.retained}</Td>
      </tr>
    )
  }

  return (
    <Card className="">
      <CardHeader>
        <div className="text-base font-medium">Recent Orders</div>
      </CardHeader>
      <CardContent>
        <Table headers={headers} data={data} renderRows={renderRows} />
      </CardContent>
    </Card>
  )
}

const headers = [
  { key: 'customer', label: 'Customer' },
  { key: 'status', label: 'Status' },
  { key: 'city', label: 'City' },
  { key: 'amount', label: 'Amount' },
  { key: 'retained', label: 'Retained' }
]

const data = [
  {
    id: 1,
    customer: 'John Doe',
    status: 'New',
    city: 'Abq',
    retained: '2 min ago',
    amount: 105.5
  },
  {
    id: 2,
    customer: 'Donald Trump',
    status: 'New',
    city: 'Abq',
    retained: '5 min ago',
    amount: 170.75
  },
  {
    id: 3,
    customer: 'Jennifer Lopez',
    status: 'New',
    city: 'Abq',
    retained: '7 min ago',
    amount: 105.5
  },
  {
    id: 4,
    customer: 'Ryan Renolds',
    status: 'Packaging',
    city: 'Abq',
    retained: '10 min ago',
    amount: 105.5
  },
  {
    id: 5,
    customer: 'Curtis Jackson',
    status: 'Ready',
    city: 'Abq',
    retained: '12 min ago',
    amount: 105.5
  },
  {
    id: 6,
    customer: 'Pablo Schreiber',
    status: 'New',
    city: 'Abq',
    retained: '15 min ago',
    amount: 60.5
  }
]
