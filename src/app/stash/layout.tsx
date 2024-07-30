import { Navigation } from '@/components/shared'

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Navigation />
      <main className="flex-1">{children}</main>
    </div>
  )
}
