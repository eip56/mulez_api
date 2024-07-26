import Title from './HeaderTitle'

interface Props {
  children: React.ReactNode
}

export default function Header({ children }: Props) {
  return <div className="PageHeading mb-10">{children}</div>
}

Header.Title = Title
