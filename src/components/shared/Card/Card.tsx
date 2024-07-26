import Title from './CardTitle'

interface Props {
  children: React.ReactNode
}

export default function Card({ children }: Props) {
  return <div className="bg-card-bg rounded-md p-4">{children}</div>
}

Card.Title = Title
