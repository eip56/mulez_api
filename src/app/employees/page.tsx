import { Header } from '@/components'
import EmployeeExpense from '@/feature/Employee/EmployeeExpense'
import RecentlyActiveEmployees from '@/feature/Employee/RecentlyActiveEmployees'
import UpcomingLeave from '@/feature/Employee/UpcomingLeave'

export default function Employees() {
  return (
    <>
      <Header>
        <Header.Title
          title={'Employee Overview'}
          description={'General overview of all Employees and their status.'}
        />
      </Header>

      <div className="grid grid-cols-2 gap-4">
        <EmployeeExpense />
        <UpcomingLeave />
      </div>

      <div className="flex-1">
        <RecentlyActiveEmployees />
      </div>
    </>
  )
}

const tabs = [
  { name: 'Overview', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
  { name: 'Applicants', href: '#', current: true }
]

const PAGE_TITLE = 'Team Members'

const headers = [
  { label: 'Name' },
  { label: 'Title' },
  { label: 'Email' },
  { label: 'Role' },
  { label: 'Edit' }
]

const people = [
  {
    name: 'Eric Pantoja',
    title: 'Founder',
    email: 'eric@mulez.app',
    role: 'Admin'
  },
  {
    name: 'Tom Curtis',
    title: 'Founder',
    email: 'tom@mulez.app',
    role: 'Admin'
  },
  {
    name: 'Richard Blackford',
    title: 'Founder',
    email: 'rich@mulez.app',
    role: 'Admin'
  }
]
