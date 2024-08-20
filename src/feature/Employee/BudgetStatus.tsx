'use client'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'
//import { generateDateValueArray } from '@/lib/demo.generators-utils'

export default function BudgetStatus() {
  return (
    <div className="">
      <div className="section-header p-4">
        <div className="text-white">Employee Expense</div>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              startAngle={180}
              endAngle={0}
              innerRadius={80}
              outerRadius={120}
              fill="#4b5563"
              dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

const data = [
  { name: 'Driver', value: 40 },
  { name: 'Management', value: 20 },
  { name: 'Admin', value: 60 }
]
const COLORS = ['#8774FB', '#54B2E8', '#4b5563']
