'use client'
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts'
import { generateDateValueArray } from '@/lib/demo.generators-utils'

export default function EmployeeExpense() {
  const { data, ticks } = generateDateValueArray(40) || { data: [], ticks: [] }

  return (
    <div className="bg-card rounded-md shadow-sm">
      <div className="section-header p-4">
        <div className="text-white">Employee Expense</div>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={150}
            height={40}
            data={data}
            margin={{
              right: 10,
              left: 10
            }}>
            <XAxis
              dataKey="label"
              ticks={ticks}
              axisLine={false}
              tickLine={false}
              interval={0}
              style={{
                fontSize: '9px',
                color: '#23D2D5'
              }}
            />
            {/* <Tooltip cursor={false} /> */}
            <Bar dataKey="value" fill="#24CBCD" radius={[10, 10, 0, 0]} barSize={3} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
//#8884d8
