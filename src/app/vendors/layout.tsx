import { VerticalMenu, Header } from '@/components'

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <VerticalMenu />
      <div className="flex-1">{children}</div>
    </div>
  )
}
