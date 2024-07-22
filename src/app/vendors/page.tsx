import Link from 'next/link'
import { getVendors } from '../../../_actions/vendorActions'

export default async function Vendors() {
  const { vendors } = await getVendors()

  return (
    <div className="mx-auto max-w-7xl">
      <div className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-white">
                Vendors
              </h1>
              <p className="mt-2 text-sm text-gray-300">
                A list of all the vendors.
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <button
                type="button"
                className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Create Vendor
              </button>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                      >
                        Contact
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                      >
                        License
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                      >
                        UBI
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                      >
                        Products
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {vendors?.map((v) => (
                      <tr key={v.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                          {v.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                          {v.contact}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                          {v.email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                          {v.license}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                          {v.tap}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                          {0}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <a
                            href="#"
                            className="text-indigo-400 hover:text-indigo-300"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
