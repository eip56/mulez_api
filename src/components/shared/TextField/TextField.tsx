export default function TextField({ label, type, name, ...props }: any) {
  return (
    <div className="TextField">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-500"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          type={type || 'text'}
          name={name}
          id={name}
          autoComplete="given-name"
          placeholder={label || ''}
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  )
}
