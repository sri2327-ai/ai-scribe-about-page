
'use client'

import React, { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { useIsMobile } from '@/hooks/use-mobile'

interface ChemicalBurnEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  colors?: string[]
  intensity?: number
  speed?: number
}

export function ChemicalBurnEffect({
  className,
  colors = ['#1EAEDB', '#D946EF', '#8B5CF6'],
  intensity = 0.4,
  speed = 0.005,
  ...props
}: ChemicalBurnEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useIsMobile()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const width = canvasRef.current.parentElement.offsetWidth
        const height = canvasRef.current.parentElement.offsetHeight
        setDimensions({ width, height })
        canvasRef.current.width = width
        canvasRef.current.height = height
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const renderBurnEffect = () => {
      if (!canvas || !ctx) return
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Create radial gradients for each color
      colors.forEach((color, i) => {
        const radius = canvas.width * (0.4 + 0.2 * Math.sin(time + i * 2))
        const centerX = canvas.width / 2 + Math.sin(time * 0.5 + i) * canvas.width * 0.1
        const centerY = canvas.height / 2 + Math.cos(time * 0.7 + i) * canvas.height * 0.1
        
        const gradient = ctx.createRadialGradient(
          centerX, 
          centerY, 
          0, 
          centerX, 
          centerY, 
          radius
        )
        
        gradient.addColorStop(0, `${color}${Math.floor(intensity * 80).toString(16)}`)
        gradient.addColorStop(0.5, `${color}${Math.floor(intensity * 20).toString(16)}`)
        gradient.addColorStop(1, 'transparent')
        
        ctx.globalCompositeOperation = i === 0 ? 'source-over' : 'screen'
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })
      
      // Add some noise effect
      ctx.globalCompositeOperation = 'overlay'
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * (isMobile ? 30 : 60)
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)')
        gradient.addColorStop(1, 'transparent')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }
      
      time += speed || 0.005
      animationFrameId = requestAnimationFrame(renderBurnEffect)
    }

    renderBurnEffect()
    
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [colors, intensity, speed, dimensions, isMobile])

  return (
    <div
      className={cn(
        'absolute inset-0 z-0 pointer-events-none overflow-hidden',
        className
      )}
      {...props}
    >
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}
