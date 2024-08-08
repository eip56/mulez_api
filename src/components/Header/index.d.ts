export interface HeaderProps {
  children: React.ReactNode
}

export interface SubNavigationProps {
  links: {
    name: string
    href: string
    current?: boolean
  }[]
}

export interface HeaderTitleProps {
  title: string
  description?: string
  action?: React.ReactNode
}

export interface HeaderStatProps {
  stats: {
    name: string
    value: string
    unit?: string
  }[]
}
