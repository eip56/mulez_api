import {
  TruckIcon,
  CubeIcon,
  CreditCardIcon,
  UserGroupIcon,
  SquaresPlusIcon,
  UserCircleIcon,
  Cog8ToothIcon
} from '@heroicons/react/24/outline'

interface NavItem {
  label: string
  path: string
  children?: NavItem[]
  Icon: React.FC | any
}

export const navigation: NavItem[] = [
  { label: 'Dashboard', path: '/dashboard', Icon: SquaresPlusIcon },
  { label: 'Deliveries', path: '/deliveries', Icon: TruckIcon },
  { label: 'Orders', path: '/orders', Icon: CreditCardIcon },
  { label: 'Inventory', path: '/inventory', Icon: CubeIcon },
  { label: 'Customers', path: '/customers', Icon: UserCircleIcon },
  { label: 'Vendors', path: '/vendors', Icon: UserGroupIcon }
]

export const bottomNav: NavItem[] = [{ label: 'Settings', path: '/account', Icon: Cog8ToothIcon }]

// Weight Measurements
export const weightMeasurements = [
  { label: 'g', name: 'Gram' },
  { label: 'oz', name: 'Ounce' },
  { label: 'lb', name: 'Pound' }
]

export const ordersSubnavLinks = [
  { name: 'Overview', href: '#' },
  { name: 'All Orders', href: '#' },
  { name: 'Reports', href: '#' }
]

export const statuses = {
  Paid: 'text-green-400 bg-green-400/10',
  Unpaid: 'text-yellow-400 bg-yellow-400/10',
  Pending: 'text-indigo-400 bg-indigo-400/10',
  Overdue: 'text-rose-400 bg-rose-400/10'
}

export const deliveryCategory = {
  Wholesale: 'ring-orange-400/20 bg-orange-400/10 text-orange-400',
  Retail: 'ring-blue-400/20 bg-blue-400/10 text-blue-400'
}

// Route / Delivery statuses
export const deliveryStatuses = [
  {
    label: 'Order Received',
    description: 'The order has been placed and received by the system.'
  },
  {
    label: 'Route Assigned',
    description: 'The order has been assigned to a specific delivery route with one or more stops.'
  },
  {
    label: 'Preparing for Delivery',
    description: 'Packages are being prepared and packaged for delivery.'
  },
  {
    label: 'Ready for Dispatch',
    description: 'The packages are ready to be dispatched and are awaiting the delivery vehicle.'
  },
  {
    label: 'Dispatched',
    description: 'The delivery vehicle has left the warehouse with the packages.'
  },
  {
    label: 'In Transit',
    description: 'The delivery vehicle is on its way to the delivery locations.'
  },
  {
    label: 'Out for Delivery',
    description:
      'The delivery vehicle is approaching the destination, and the packages are about to be delivered.'
  },
  {
    label: 'Attempted Delivery',
    description:
      'A delivery attempt was made, but it was not successful (e.g., recipient not available).'
  },
  {
    label: 'Delivered',
    description: 'The package has been successfully delivered to the recipient.'
  },
  {
    label: 'Delivery Delayed',
    description:
      'The delivery has been delayed due to unforeseen circumstances (e.g., traffic, weather).'
  },
  {
    label: 'Returned to Warehouse',
    description:
      'The package has been returned to the warehouse (e.g., after a failed delivery attempt).'
  },
  {
    label: 'Cancelled',
    description: 'The delivery has been cancelled, and the package will not be delivered.'
  },
  {
    label: 'Rescheduled',
    description: 'The delivery has been rescheduled to a different date or time.'
  },
  {
    label: 'Partial Delivery',
    description: 'Only part of the delivery has been completed, with more packages pending.'
  },
  {
    label: 'Awaiting Pickup',
    description: 'The package is waiting to be picked up by the delivery vehicle.'
  },
  {
    label: 'On Hold',
    description:
      'The delivery is temporarily on hold due to specific reasons (e.g., customer request, verification needed).'
  }
]
