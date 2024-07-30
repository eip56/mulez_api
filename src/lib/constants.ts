// Subnavgation Links

export const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  {
    name: 'Orders',
    href: '/orders',
    children: [
      { name: 'Overview', href: '/orders/overview' },
      { name: 'All orders', href: '/orders/all-orders' },
      { name: 'Reports', href: '/orders/reports' },
    ],
  },
  { name: 'Customers', href: '/customers' },
  { name: 'Vendors', href: '/vendors' },
  { name: 'Logistics', href: '/logistics' },
  { name: 'Invoices', href: '/invoices' },
  { name: 'Stash', href: '/stash' },
]

export const ordersSubnavLinks = [
  { name: 'Overview', href: '#' },
  { name: 'All Orders', href: '#' },
  { name: 'Reports', href: '#' },
]
