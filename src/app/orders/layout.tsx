import VerticalMenu from '@/feature/Navigation/VerticalMenu'

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <VerticalMenu />
      <main className="flex-1">{children}</main>
    </div>
  )
}
