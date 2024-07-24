// @todo Change color of first default option
'use client'
import React from 'react'
import clsx from 'clsx'

export default function Select({ label, name, options }) {
  const [isDefault, setIsDefault] = React.useState(true)

  const handleChange = (event) => {
    if (event.target.value !== '') {
      setIsDefault(false)
    }
  }

  return (
    <div className="Select">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-500"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={''}
        onChange={handleChange}
        className={clsx(
          'mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-400 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6',
          { 'text-gray-900': !isDefault, 'text-gray-400': isDefault },
        )}
      >
        <option value={''} disabled>
          Select a {label}
        </option>
        {options.map(({ label, value }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}
