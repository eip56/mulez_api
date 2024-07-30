'use client'
import { useGlobalContext } from '@/context/Global/global-context'
import Link from 'next/link'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronRightIcon, UserIcon } from '@heroicons/react/20/solid'
import { navigation } from '@/lib/constants'
import clsx from 'clsx'

export default function Navigation() {
  const { sidebar, setSidebar } = useGlobalContext()

  return (
    <div
      className={clsx(
        'bg-dark flex flex-none overflow-y-auto overflow-x-hidden p-4 transition-all duration-200',
        { 'w-56': sidebar, 'w-20': !sidebar },
      )}
    >
      <nav className="flex flex-1 flex-col">
        <p className="text-white" onClick={setSidebar}>
          MULEZ
        </p>
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <Link
                      href={item.href}
                      className="block rounded-md py-2 pl-8 pr-2 text-sm leading-6 text-gray-500"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Disclosure as="div">
                      <DisclosureButton className="group flex w-full items-center gap-x-1 rounded-md p-2 text-left text-sm leading-6 text-gray-500">
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="h-5 w-5 shrink-0 text-gray-400 transition-all duration-100 group-data-[open]:rotate-90 group-data-[open]:text-gray-500"
                        />
                        {item.name}
                      </DisclosureButton>
                      <DisclosurePanel as="ul" className="mt-1 px-2">
                        {item.children.map((subItem) => (
                          <li key={subItem.name}>
                            <DisclosureButton
                              as={Link}
                              href={subItem.href}
                              className="block rounded-md py-2 pl-6 pr-2 text-sm leading-6 text-gray-500"
                            >
                              {subItem.name}
                            </DisclosureButton>
                          </li>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>

          <li className="-mx-6 mt-auto">
            <Link
              href="/account"
              className="flex items-center gap-x-4 px-6 py-3 text-sm leading-6 text-gray-500"
            >
              <span className="inline-block h-6 w-6 overflow-hidden rounded-full bg-white/10">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-full w-full text-white/25"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <span>Eric Pantoja</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
