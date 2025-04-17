
import { useEffect, useRef, useState } from "react"

interface Position {
  x: number
  y: number
}

interface Vector extends Position {
  timestamp: number
}

export const useMouseVector = (containerRef?: React.RefObject<HTMLElement>) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const previousVector = useRef<Vector>({ x: 0, y: 0, timestamp: 0 })
  const [vector, setVector] = useState<Position>({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef?.current || document

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef?.current?.getBoundingClientRect()
      const x = rect ? e.clientX - rect.left : e.clientX
      const y = rect ? e.clientY - rect.top : e.clientY
      
      const timestamp = Date.now()
      const timeDelta = timestamp - previousVector.current.timestamp

      if (timeDelta > 0) {
        const vx = (x - previousVector.current.x) / timeDelta
        const vy = (y - previousVector.current.y) / timeDelta
        setVector({ x: vx, y: vy })
      }

      previousVector.current = { x, y, timestamp }
      setPosition({ x, y })
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [containerRef])

  return { position, vector }
}
