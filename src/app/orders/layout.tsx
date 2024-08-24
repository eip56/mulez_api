import { VerticalMenu, Header } from '@/components'

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <VerticalMenu />
      <main className="flex flex-1 flex-col gap-4">
        <Header title="Orders" />
        {children}
      </main>
    </div>
  )
}
