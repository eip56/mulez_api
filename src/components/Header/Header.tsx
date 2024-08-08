import { HeaderProps } from '.'
import Title from './HeaderTitle'
import SubNavigation from './SubNavigation'
import HeaderStats from './HeaderStats'

export default function Header({ children }: HeaderProps) {
  return <header>{children}</header>
}

Header.Title = Title
Header.SubNavigation = SubNavigation
Header.Stats = HeaderStats
