'use client'
import React, { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'

const generateData = () => {
  const times = [
    '9 AM',
    '10 AM',
    '11 AM',
    '12 PM',
    '1 PM',
    '2 PM',
    '3 PM',
    '4 PM',
    '5 PM',
    '6 PM',
    '7 PM',
    '8 PM',
    '9 PM',
  ]
  return times.map((time) => ({
    time,
    value: Math.floor(Math.random() * 15000),
  }))
}

const data = generateData()

const DailyMilestones = () => {
  const svgRef = useRef()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const barWidth = 20

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || !entries.length) return
      const { width, height } = entries[0].contentRect
      setDimensions({ width, height })
    })

    resizeObserver.observe(svgRef.current.parentElement)

    return () => resizeObserver.unobserve(svgRef.current.parentElement)
  }, [])

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const margin = { top: 20, right: 30, bottom: 40, left: 50 }
    const width = dimensions.width - margin.left - margin.right
    const height = dimensions.height - margin.top - margin.bottom

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.time))
      .range([0, width])
      .padding(0.1)

    const maxY = d3.max(data, (d) => d.value)
    const y = d3.scaleLinear().domain([0, maxY]).range([height, 0])

    const yAxis = d3
      .axisLeft(y)
      .ticks(10)
      .tickFormat((d) => (d % 2 === 0 ? d : ''))

    const xAxis = d3.axisBottom(x)

    svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`)

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .call(yAxis)
      .attr('color', '#6B7280')

    svg
      .append('g')
      .attr(
        'transform',
        `translate(${margin.left + 17},${height + margin.top})`,
      )
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em')
      .attr('dy', '.15em')
      .attr('transform', 'rotate(-65)')
      .attr('color', '#6B7280')

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .selectAll('.bar-background')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar-background')
      .attr('x', (d) => x(d.time) + (x.bandwidth() / 2 - barWidth / 2))
      .attr('y', 0)
      .attr('width', barWidth)
      .attr('height', height)
      .attr('fill', '#212730')

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.time) + (x.bandwidth() / 2 - barWidth / 2))
      .attr('y', (d) => y(d.value))
      .attr('width', barWidth)
      .attr('height', (d) => height - y(d.value))
      .attr('fill', '#02EFB0')
  }, [dimensions, data])

  return (
    <div style={{ width: '100%', height: '250px' }}>
      <svg ref={svgRef} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default DailyMilestones
