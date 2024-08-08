import { Header, Table, Td, Chip } from '@/components/shared'

export default async function InventoryPage() {
  return (
    <div className="flex h-screen flex-col overflow-hidden p-4">
      {/* Widget/statistics row */}
      <div className="mb-4 grid h-24 flex-initial grid-cols-4 gap-4">
        <div className="flex items-center justify-center bg-gray-300">Widget 1</div>
        <div className="flex items-center justify-center bg-gray-300">Widget 2</div>
        <div className="flex items-center justify-center bg-gray-300">Widget 3</div>
        <div className="flex items-center justify-center bg-gray-300">Widget 4</div>
      </div>

      {/* Graph area */}
      <div className="mb-4 flex h-64 flex-initial items-center justify-center bg-gray-400">
        Graph Area
      </div>

      {/* Table area */}
      <div className="flex-grow overflow-hidden">
        <div className="flex h-full max-h-full w-full flex-col overflow-y-scroll bg-gray-500">
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>

          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
        </div>
      </div>
    </div>
  )
}
