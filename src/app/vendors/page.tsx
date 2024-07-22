import Link from 'next/link'
import { getVendors } from '../../../_actions/vendorActions'

export default async function Vendors() {
  const res = await getVendors()
  console.log(res)

  return (
    <div>
      <h1>Vendors</h1>

      <Link href="/vendors/create-vendor" className="bg-white">
        Create Vendor
      </Link>
    </div>
  )
}
