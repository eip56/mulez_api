import { PlusIcon } from '@heroicons/react/20/solid'
import PageHeading from '@/components/PageHeading/PageHeading'
import SimpleTable from '@/components/Table/SimpleTable'

const tabs = [
  { name: 'Overview', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
  { name: 'Applicants', href: '#', current: true },
]

const PAGE_TITLE = 'Team Members'

const headers = [
  { label: 'Name' },
  { label: 'Title' },
  { label: 'Email' },
  { label: 'Role' },
  { label: 'Edit' },
]

const people = [
  {
    name: 'Eric Pantoja',
    title: 'Founder',
    email: 'eric@mulez.app',
    role: 'Admin',
  },
  {
    name: 'Tom Curtis',
    title: 'Founder',
    email: 'tom@mulez.app',
    role: 'Admin',
  },
  {
    name: 'Richard Blackford',
    title: 'Founder',
    email: 'rich@mulez.app',
    role: 'Admin',
  },
  {
    name: 'Mike Werner',
    title: 'Founder',
    email: 'mike@mulez.app',
    role: 'Supervisor',
  },
]

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-7xl py-10">
      <PageHeading
        title={PAGE_TITLE}
        action={{ label: 'Create Team Member' }}
      />
      <div className="border-b border-gray-200 pb-5 sm:pb-0">
        <div className="mt-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? 'page' : undefined}
                className={
                  'whitespace-nowrap border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <SimpleTable headers={headers} data={people} />
    </div>
  )
}
