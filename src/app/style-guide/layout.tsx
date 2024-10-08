import { VerticalMenu, Header } from '@/components'

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <VerticalMenu />
      <main className="flex-1">
        <Header title="Style Guide" />
        {children}
      </main>
    </div>
  )
}
