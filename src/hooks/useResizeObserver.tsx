// hooks/useResizeObserver.ts
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
const useResizeObserver = (
  ref: MutableRefObject<HTMLElement | null>,
): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (!ref.current) return

    const resizeObserver = new ResizeObserver((entries) => {
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
