'use client'
import { Card } from '@/components'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

export default function Financials() {
  return (
    <Card>
      <div className="p-4">
        <h3 className="text-lg text-white">Expenses</h3>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 25,
                bottom: 5
              }}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} interval={0} />
              <Tooltip />
              <Line type="monotone" dataKey="pv" stroke="#4FFFCA" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mx-auto mt-4 grid w-2/4 grid-cols-2">
          <div className="text-center">
            <h6 className="mb-1 text-xs text-white">Overhead Costs</h6>
            <p className="text-lg text-white">$4,750</p>
          </div>
          <div className="text-center">
            <h6 className="mb-1 text-xs text-white">Total Expenses</h6>
            <p className="text-lg text-white">$6,450</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

const data = [
  {
    name: '6',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: '7',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: '8',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: '9',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: '10',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: '11',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: '12',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
]
