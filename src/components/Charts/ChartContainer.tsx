// components/ChartContainer.tsx
import React, { useRef, ReactNode } from 'react'
import useResizeObserver from '@/hooks/useResizeObserver'

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
