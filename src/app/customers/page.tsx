import { Header } from '@/components'
import TotalCustomers from '@/feature/Customers/TotalCustomers'
import NewCustomers from '@/feature/Customers/NewCustomers'
import ActiveNow from '@/feature/Customers/ActiveNow'
import RecentCustomers from '@/feature/Customers/RecentCustomers'

export default function CustomersPage() {
  return (
    <div className="CustomersPage flex h-screen flex-col gap-5 overflow-hidden p-4">
      <Header>
        <Header.Title
          title={'Customers Overview'}
          description={'General overview of all customers and their status.'}
        />
      </Header>

      <div className="grid h-28 max-h-28 flex-initial grid-cols-3 gap-5 overflow-hidden">
        <TotalCustomers />
        <NewCustomers />
        <ActiveNow />
      </div>

      <div className="grow">
        <RecentCustomers />
      </div>
    </div>
  )
}
