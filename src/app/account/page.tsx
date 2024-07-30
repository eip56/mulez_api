import { AsideMenu } from '@/components/shared'
import { Cog8ToothIcon } from '@heroicons/react/20/solid'

const details = [
  { label: 'Full name', value: 'Eric Pantoja' },
  { label: 'Position', value: 'Founder' },
  { label: 'Email address', value: 'eric@mulez.app' },
  { label: 'Salary', value: '$ 250,000.00 / USD' },
  { label: 'Address', value: '5225 Justin Dr NW, Albuquerque New Mexico' },
  { label: 'Phone number', value: '(505) 999 - 7525' },
  { label: 'Schedule', value: '∞' },
  { label: 'Supervisor', value: 'N/A' }
]

export default function Account() {
  return (
    <div className="px-20 py-10">
      <div className="mb-6 flex flex-col items-start justify-between gap-x-8 gap-y-4 border-b border-white/10 pb-6">
        <div className="flex items-center gap-x-3">
          <div className="flex-none rounded-full bg-white/10 p-2 text-white">
            <Cog8ToothIcon className="h-6 w-6" />
          </div>
          <h1 className="flex gap-x-3 text-xl">
            <span className="font-semibold text-white">Settings</span>
          </h1>
        </div>
        <p className="text-sm text-gray-400">Manage and edit your personal account details</p>
      </div>
      <div className="flex gap-6">
        <AsideMenu />
        <div className="flex-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-white">Account Information</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-400">
              Personal details and application.
            </p>
          </div>
          <div className="mt-6 border-t border-white/10">
            <dl className="divide-y divide-white/10">
              {details.map(({ label, value }, index) => (
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0" key={index}>
                  <dt className="text-sm font-medium leading-6 text-white">{label}</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
