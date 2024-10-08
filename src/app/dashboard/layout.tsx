import { VerticalMenu, Header } from '@/components'
import AppBar from '@/components/Appbar/Appbar'

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-[#F9FAFB]">
      <VerticalMenu />
      <div className="flex-1">{children}</div>
    </div>
  )
}
