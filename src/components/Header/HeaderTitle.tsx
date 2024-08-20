import { HeaderTitleProps } from '.'

export default function Title({ title, description }: HeaderTitleProps) {
  return (
    <div className="flex flex-shrink flex-col items-start justify-between gap-x-8 gap-y-4 py-4">
      <div>
        <div className="flex items-center gap-x-3">
          <div className="flex-none rounded-full p-1">
            <div className="h-8 w-1 rounded-md bg-[#4EFFCA]" />
          </div>
          <h1 className="flex gap-x-3 text-base leading-7">
            <span className="text-2xl font-semibold text-white">{title}</span>
          </h1>
        </div>
        {description && <p className="mt-2 text-xs leading-6 text-gray-400">{description}</p>}
      </div>
    </div>
  )
}
