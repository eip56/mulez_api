// components/Axes.tsx
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
