export default function TotalSales() {
  return (
    <div className="gap-0.25 grid grid-rows-3 items-center rounded-md bg-accent px-4 py-2">
      <div className="flex items-center justify-between">
        <h5 className="text-sm text-gray-500">Total Sales</h5>
        <div>
          <select
            id="TotalSales"
            name="totalSales"
            className="ring-white-100/[.25] mt-2 block w-full rounded-md border-0 bg-mainbg py-1 pl-3 pr-8 text-gray-500 ring-0 ring-inset sm:text-sm sm:leading-6"
            defaultValue="1"
          >
            <option value="0">Month</option>
            <option value="1">Week</option>
            <option value="2">Day</option>
          </select>
        </div>
      </div>
      <p className="text-2xl font-bold text-white">&#36;10,7070.84</p>
      <div className="flex flex-col text-sm text-gray-500">
        <span className="text-green-500">+2.5%</span> from last week
      </div>
    </div>
  )
}
