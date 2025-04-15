
'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { GripVertical } from "lucide-react"
import { cn } from "@/lib/utils"

interface SplitViewProps {
  leftContent: React.ReactNode
  rightContent: React.ReactNode
  leftLabel?: React.ReactNode
  rightLabel?: React.ReactNode
  className?: string
  initialPosition?: number
  dividerClassName?: string
  handleClassName?: string
}

export function SplitView({
  leftContent,
  rightContent,
  leftLabel,
  rightLabel,
  className,
  initialPosition = 50,
  dividerClassName,
  handleClassName,
}: SplitViewProps) {
  const [position, setPosition] = React.useState(initialPosition)
  const [isDragging, setIsDragging] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const handleDragStart = () => {
    setIsDragging(true)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return

    const container = containerRef.current
    const rect = container.getBoundingClientRect()
    
    // Get clientX based on whether this is a touch or mouse event
    let clientX
    if ('touches' in e) {
      clientX = e.touches[0].clientX
    } else {
      clientX = e.clientX
    }
    
    // Calculate the percentage
    const newPosition = Math.min(
      Math.max(0, ((clientX - rect.left) / rect.width) * 100),
      100
    )
    
    setPosition(newPosition)
  }

  React.useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && containerRef.current) {
        const container = containerRef.current
        const rect = container.getBoundingClientRect()
        const newPosition = Math.min(
          Math.max(0, ((e.clientX - rect.left) / rect.width) * 100),
          100
        )
        setPosition(newPosition)
      }
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleMouseMove as any)
      window.addEventListener('touchend', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleMouseMove as any)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  return (
    <div 
      ref={containerRef}
      className={cn("relative w-full h-full overflow-hidden rounded-xl select-none", className)}
      onMouseMove={isDragging ? handleDrag : undefined}
      onTouchMove={isDragging ? handleDrag : undefined}
    >
      {/* Left Content */}
      <div 
        className="absolute top-0 left-0 h-full w-full overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        {leftContent}
      </div>
      
      {/* Right Content */}
      <div 
        className="absolute top-0 left-0 h-full w-full overflow-hidden"
        style={{
          clipPath: `inset(0 0 0 ${position}%)`,
        }}
      >
        {rightContent}
      </div>
      
      {/* Divider */}
      <div
        className={cn(
          "absolute top-0 h-full w-0.5 bg-gradient-to-b from-blue-400/70 via-purple-400/70 to-blue-400/70 backdrop-blur-sm z-10", 
          dividerClassName
        )}
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <motion.div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-2 border-white cursor-move z-20",
            handleClassName
          )}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchEnd={handleDragEnd}
          style={{
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        >
          <div className="grid grid-cols-3 gap-0.5">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full" />
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Labels */}
      {(leftLabel || rightLabel) && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4 z-10">
          {leftLabel && (
            <div className="text-xs font-medium">
              {leftLabel}
            </div>
          )}
          {rightLabel && (
            <div className="text-xs font-medium">
              {rightLabel}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
