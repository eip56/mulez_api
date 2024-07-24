// components/Charts/BarChart.tsx
'use client'
import React from 'react'
import * as d3 from 'd3'
import ChartContainer from './ChartContainer'
import Axis from './Axis'

interface BarChartProps {
  data: number[]
  barColor?: string
  barWidth?: number
  barSpacing?: number
}

/**
 * BarChart component to render a bar chart using D3 and React.
 *
 * @param data - The data to be displayed in the bar chart.
 * @param barColor - The color of the bars.
 * @param barWidth - The width of the bars.
 * @param barSpacing - The spacing between the bars.
 * @returns The rendered bar chart.
 */
const BarChart: React.FC<BarChartProps> = ({
  data,
  barColor = 'teal',
  barWidth = 0.8,
  barSpacing = 0.1,
}) => {
  return (
    <ChartContainer>
      {({ width, height }) => {
        const xScale = d3
          .scaleBand()
          .domain(data.map((d, i) => i.toString()))
          .range([0, width])
          .padding(barSpacing)

        const yScale = d3
          .scaleLinear()
          .domain([0, d3.max(data)!])
          .range([height, 0])

        return (
          <svg width={width} height={height}>
            {data.map((d, i) => (
              <rect
                key={i}
                x={xScale(i.toString())}
                y={yScale(d)}
                width={xScale.bandwidth() * barWidth}
                height={height - yScale(d)}
                fill={barColor}
              />
            ))}
            <Axis
              scale={xScale}
              transform={`translate(0, ${height})`}
              orient="bottom"
            />
            <Axis scale={yScale} transform="translate(0, 0)" orient="left" />
          </svg>
        )
      }}
    </ChartContainer>
  )
}

export default BarChart
