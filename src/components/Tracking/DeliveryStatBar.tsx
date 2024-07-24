'use client'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import * as d3 from 'd3'

type DataPoint = {
  date: string
  hours: number
  minutes: number
  avgHours: number
  avgMinutes: number
}

const generateData = (): DataPoint[] => {
  const data: DataPoint[] = []
  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() - currentDate.getDay())

  for (let i = 0; i < 7; i++) {
    const date = new Date(currentDate)
    date.setDate(currentDate.getDate() + i)
    const hours = Math.floor(Math.random() * 8) + 1
    const minutes = Math.floor(Math.random() * 60)
    const avgHours = Math.floor(Math.random() * 8) + 1
    const avgMinutes = Math.floor(Math.random() * 60)
    data.push({
      date: date.toLocaleDateString('en-US'),
      hours,
      minutes,
      avgHours,
      avgMinutes,
    })
  }

  return data
}

const BarChart: React.FC<{ yAxisLabelColor?: string }> = ({
  yAxisLabelColor = 'black',
}) => {
  const [data, setData] = useState<DataPoint[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<SVGSVGElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState<{
    width: number
    height: number
  }>({ width: 0, height: 0 })

  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current
      setDimensions({ width: clientWidth, height: clientHeight })
    }
  }, [])

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      updateDimensions()
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
      updateDimensions()
    }

    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        resizeObserver.unobserve(containerRef?.current)
      }
    }
  }, [updateDimensions])

  useEffect(() => {
    setData(generateData())
  }, [])

  useEffect(() => {
    if (data.length === 0 || dimensions.width === 0 || dimensions.height === 0)
      return

    const svg = d3.select(chartRef.current)
    const margin = { top: 20, right: 30, bottom: 50, left: 0 }
    const width = dimensions.width - margin.left - margin.right
    const height = dimensions.height - margin.top - margin.bottom

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.date))
      .range([0, width])
      .padding(0.3)

    const yMax =
      d3.max(data, (d) =>
        Math.max(d.hours + d.minutes / 60, d.avgHours + d.avgMinutes / 60),
      ) ?? 0

    const yScale = d3.scaleLinear().domain([0, yMax]).range([height, 0])

    svg.selectAll('*').remove()

    const chart = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    const barWidth = xScale.bandwidth() / 2 - 10 // Adjust the gap here

    chart
      .selectAll('.bar-hours')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar-hours')
      .attr('x', (d) => xScale(d.date)! + 5)
      .attr('y', (d) => yScale(d.hours + d.minutes / 60))
      .attr('width', barWidth)
      .attr('height', (d) => height - yScale(d.hours + d.minutes / 60))
      .attr('fill', '#27D593')

    chart
      .selectAll('.bar-avg-hours')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar-avg-hours')
      .attr('x', (d) => xScale(d.date)! + xScale.bandwidth() / 2 + 5)
      .attr('y', (d) => yScale(d.avgHours + d.avgMinutes / 60))
      .attr('width', barWidth)
      .attr('height', (d) => height - yScale(d.avgHours + d.avgMinutes / 60))
      .attr('fill', '#6B7280')

    chart
      .append('g')
      .attr('transform', `translate(${width}, 0)`)
      .call(d3.axisRight(yScale).ticks(3))
      .call((g) => g.select('.domain').remove()) // Remove the y-axis line
      .call((g) => g.selectAll('.tick line').remove()) // Remove the y-axis ticks
      .call((g) =>
        g
          .selectAll('.tick text')
          .attr('x', 4)
          .attr('dy', -4)
          .style('fill', '#6B7280'),
      ) // Adjust y-axis label position and color
  }, [data, dimensions, yAxisLabelColor])

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      <svg ref={chartRef} style={{ width: '100%', height: '100%' }}></svg>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '-35px',
        }}
      >
        <div
          style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#27D593',
              borderRadius: '50%',
              marginRight: '5px',
            }}
          ></div>
          <span style={{ color: '#6B7280', fontSize: '12px' }}>
            Working Time
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#6B7280',
              borderRadius: '50%',
              marginRight: '5px',
            }}
          ></div>
          <span style={{ color: '#6B7280', fontSize: '12px' }}>
            Average Working Time
          </span>
        </div>
      </div>
    </div>
  )
}

export default BarChart
