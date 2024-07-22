import { PlusIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Eric Pantoja',
    title: 'Founder',
    email: 'eric@mulez.app',
    role: 'Admin',
  },
  // More people...
]

export default function SimpleTable({ headers, data }) {
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                {headers?.map((header) => (
                  <th
                    key={header.label}
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white"
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {data?.map((person) => (
                <tr key={person.email}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white">
                    {person.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                    {person.title}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                    {person.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                    {person.role}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                    <a
                      href="#"
                      className="text-indigo-400 hover:text-indigo-300"
                    >
                      Edit
                      <span className="sr-only">, {person.name}</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
