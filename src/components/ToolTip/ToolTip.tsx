export default function ToolTip({ label }) {
  return (
    <>
      <button
        data-tooltip-target="tooltip-right"
        data-tooltip-placement="right"
        type="button"
        className="mb-2 ms-3 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Tooltip right
      </button>

      <div
        id="tooltip-right"
        role="tooltip"
        className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm dark:bg-gray-700">
        Tooltip on right
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  )
}
