# D3.js and React Chart Components

Introduction
This repository contains reusable chart components created using D3.js and React. The components are designed to be responsive and adaptable to different parent container sizes, handling data updates and resizing events effectively.

## Components

### 1. useResizeObserver

#### File: hooks/useResizeObserver.ts

#### Purpose:

The useResizeObserver hook observes the size of a DOM element using the ResizeObserver API. It updates the dimensions of the observed element whenever its size changes.

#### How it works:

- A ref to the DOM element is passed to the hook.
- The ResizeObserver observes the element's size and updates the dimensions state accordingly.
- The hook returns the current dimensions of the observed element.

```
import { useEffect, useState, useRef, MutableRefObject } from 'react'

interface Dimensions {
  width: number
  height: number
}

/**
 * Custom hook to observe the size of a DOM element.
 *
 * @param ref - The ref of the DOM element to observe.
 * @returns The dimensions of the observed element.
 */
const useResizeObserver = (ref: MutableRefObject<HTMLElement | null>): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 })

  useEffect(() => {
    if (!ref.current) return

    const resizeObserver = new ResizeObserver(entries => {
      if (!entries || entries.length === 0) return
      const { width, height } = entries[0].contentRect
      setDimensions({ width, height })
    })

    resizeObserver.observe(ref.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [ref])

  return dimensions
}

export default useResizeObserver

```

### 2. ChartContainer

#### File: components/ChartContainer.tsx

#### Purpose:

The ChartContainer component handles responsiveness and resizing. It provides the dimensions of its parent container to its children, ensuring that the chart fits proportionally within the container.

#### How it works:

- Uses the useResizeObserver hook to get the dimensions of the parent container.
- Passes the dimensions as props to its children.

```
import React, { useRef, ReactNode } from 'react'
import useResizeObserver from '../hooks/useResizeObserver'

interface ChartContainerProps {
  children: (dimensions: { width: number; height: number }) => ReactNode
}

/**
 * ChartContainer component to handle responsiveness and resizing.
 *
 * @param children - A function that receives the dimensions and returns the chart component.
 * @returns The chart container with responsive dimensions.
 */
const ChartContainer: React.FC<ChartContainerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const dimensions = useResizeObserver(containerRef)

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      {dimensions.width > 0 && dimensions.height > 0 && children(dimensions)}
    </div>
  )
}

export default ChartContainer
```

### 3. Axis

#### File: components/Axes.tsx

#### Purpose:

The Axis component renders chart axes using D3.js. It supports different orientations (bottom, left, right, top) and is designed to be reusable across different chart types.

#### How it works:

- Accepts scale, transform, and orient as props.
- Uses D3 to generate and render the axis based on the provided orientation and scale.

```
import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface AxisProps {
  scale: d3.AxisScale<d3.AxisDomain>
  transform: string
  orient: 'bottom' | 'left' | 'right' | 'top'
}

/**
 * Axes component to render chart axes using D3.
 *
 * @param scale - The scale function for the axis.
 * @param transform - The transformation string to position the axis.
 * @param orient - The orientation of the axis ('bottom', 'left', 'right', 'top').
 * @returns The rendered axis element.
 */
const Axis: React.FC<AxisProps> = ({ scale, transform, orient }) => {
  const axisRef = useRef<SVGGElement | null>(null)

  useEffect(() => {
    if (!axisRef.current) return

    let axisGenerator: d3.Axis<d3.AxisDomain>
    switch (orient) {
      case 'bottom':
        axisGenerator = d3.axisBottom(scale)
        break
      case 'left':
        axisGenerator = d3.axisLeft(scale)
        break
      case 'right':
        axisGenerator = d3.axisRight(scale)
        break
      case 'top':
        axisGenerator = d3.axisTop(scale)
        break
      default:
        return
    }

    d3.select(axisRef.current).call(axisGenerator)
  }, [scale, orient])

  return <g ref={axisRef} transform={transform} />
}

export default Axis

```

### 4. HomePage

#### File: pages/index.tsx

#### Purpose:

The HomePage component demonstrates how to use the ChartContainer and Axis components to create a simple bar chart. It showcases the integration of D3 scales and axes with React components.

#### How it works:

- Uses the ChartContainer component to handle responsive dimensions.
- Defines a simple dataset and scales for the bar chart.
- Renders the bars and axes using D3 and the Axis component.

```
import React from 'react'
import * as d3 from 'd3'
import ChartContainer from '../components/ChartContainer'
import Axis from '../components/Axes'

const HomePage: React.FC = () => {
  const data = [10, 20, 30, 40, 50]

  return (
    <ChartContainer>
      {({ width, height }) => {
        const xScale = d3
          .scaleBand()
          .domain(data.map((d, i) => i.toString()))
          .range([0, width])
          .padding(0.1)

        const yScale = d3.scaleLinear().domain([0, d3.max(data)!]).range([height, 0])

        return (
          <svg width={width} height={height}>
            {data.map((d, i) => (
              <rect
                key={i}
                x={xScale(i.toString())}
                y={yScale(d)}
                width={xScale.bandwidth()}
                height={height - yScale(d)}
                fill="teal"
              />
            ))}
            <Axis scale={xScale} transform={`translate(0, ${height})`} orient="bottom" />
            <Axis scale={yScale} transform="translate(0, 0)" orient="left" />
          </svg>
        )
      }}
    </ChartContainer>
  )
}

export default HomePage

```
