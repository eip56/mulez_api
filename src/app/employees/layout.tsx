import { Navigation } from '@/components'

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Navigation />
      <main className="flex h-screen flex-1 flex-col gap-5 p-6">{children}</main>
    </div>
  )
}

// const tabs = [
//   { name: 'Overview', href: '#', current: false },
//   { name: 'Team Members', href: '#', current: false },
//   { name: 'Applicants', href: '#', current: true }
// ]

// const PAGE_TITLE = 'Team Members'

// const headers = [
//   { label: 'Name' },
//   { label: 'Title' },
//   { label: 'Email' },
//   { label: 'Role' },
//   { label: 'Edit' }
// ]
