
'use client'

import React, { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { useIsMobile } from '@/hooks/use-mobile'

interface ChemicalBurnEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  colors?: string[]
  intensity?: number
  speed?: number
  particleCount?: number
}

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  life: number
  maxLife: number
  fadeRate: number
  tail: Array<{x: number, y: number, alpha: number}>
}

export function ChemicalBurnEffect({
  className,
  colors = ['#1EAEDB', '#D946EF', '#8B5CF6'],
  intensity = 0.7,
  speed = 1,
  particleCount = 300,
  ...props
}: ChemicalBurnEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useIsMobile()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const particlesRef = useRef<Particle[]>([])

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

  // Initialize particles
  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return
    
    const actualParticleCount = isMobile ? Math.floor(particleCount * 0.6) : particleCount
    
    const particles: Particle[] = []
    for (let i = 0; i < actualParticleCount; i++) {
      particles.push(createParticle(dimensions.width, dimensions.height, colors))
    }
    
    particlesRef.current = particles
  }, [dimensions, colors, isMobile, particleCount])

  // Create a new particle
  const createParticle = (width: number, height: number, colors: string[]): Particle => {
    const size = Math.random() * 3 + 1
    const color = colors[Math.floor(Math.random() * colors.length)]
    const maxLife = Math.random() * 100 + 100
    
    // Position particles mostly near the edges for the chemical burn look
    let x, y
    const edgeThreshold = 0.7; // 70% chance to be near an edge
    
    if (Math.random() < edgeThreshold) {
      // Position near an edge
      const edge = Math.floor(Math.random() * 4) // 0: top, 1: right, 2: bottom, 3: left
      
      switch (edge) {
        case 0: // top
          x = Math.random() * width
          y = Math.random() * height * 0.3
          break
        case 1: // right
          x = width - (Math.random() * width * 0.3)
          y = Math.random() * height
          break
        case 2: // bottom
          x = Math.random() * width
          y = height - (Math.random() * height * 0.3)
          break
        case 3: // left
          x = Math.random() * width * 0.3
          y = Math.random() * height
          break
        default:
          x = Math.random() * width
          y = Math.random() * height
      }
    } else {
      // Random position anywhere
      x = Math.random() * width
      y = Math.random() * height
    }
    
    // Create vectors pointing more toward the center
    const centerX = width / 2
    const centerY = height / 2
    
    // Calculate direction to center
    const dirX = (centerX - x)
    const dirY = (centerY - y)
    const dist = Math.sqrt(dirX * dirX + dirY * dirY)
    
    // Normalize and apply random speed
    const baseSpeed = (Math.random() * 0.5 + 0.2) * speed
    let speedX = (dirX / dist) * baseSpeed
    let speedY = (dirY / dist) * baseSpeed
    
    // Add some randomness to direction
    speedX += (Math.random() - 0.5) * 0.5 * speed
    speedY += (Math.random() - 0.5) * 0.5 * speed
    
    return {
      x,
      y,
      size,
      speedX,
      speedY,
      color,
      life: 0,
      maxLife,
      fadeRate: Math.random() * 0.01 + 0.005,
      tail: []
    }
  }

  // Animation logic
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return

    let animationFrameId: number

    const render = () => {
      if (!canvas || !ctx) return
      
      // Semi-transparent fade for trail effect
      ctx.fillStyle = `rgba(0, 0, 0, 0.1)`
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      particlesRef.current.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.speedX * intensity
        particle.y += particle.speedY * intensity
        
        // Add current position to tail with full opacity
        particle.tail.unshift({ 
          x: particle.x, 
          y: particle.y, 
          alpha: 0.8 
        })
        
        // Limit tail length
        const tailLength = isMobile ? 5 : 10
        if (particle.tail.length > tailLength) {
          particle.tail.pop()
        }
        
        // Reduce opacity of tail segments
        particle.tail.forEach(segment => {
          segment.alpha *= 0.85
        })
        
        // Draw the particle
        ctx.globalCompositeOperation = 'screen'
        
        // Draw the tail
        if (particle.tail.length > 1) {
          for (let i = 0; i < particle.tail.length - 1; i++) {
            const currentSegment = particle.tail[i]
            const nextSegment = particle.tail[i + 1]
            
            const gradient = ctx.createLinearGradient(
              currentSegment.x, 
              currentSegment.y, 
              nextSegment.x, 
              nextSegment.y
            )
            
            gradient.addColorStop(0, `${particle.color}${Math.floor(currentSegment.alpha * 255).toString(16).padStart(2, '0')}`)
            gradient.addColorStop(1, `${particle.color}${Math.floor(nextSegment.alpha * 255).toString(16).padStart(2, '0')}`)
            
            ctx.beginPath()
            ctx.moveTo(currentSegment.x, currentSegment.y)
            ctx.lineTo(nextSegment.x, nextSegment.y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = particle.size
            ctx.lineCap = 'round'
            ctx.stroke()
            ctx.closePath()
          }
        }
        
        // Draw particle core (brighter dot at the head)
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
        ctx.closePath()
        
        // Add a glow effect
        const glow = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        )
        glow.addColorStop(0, `${particle.color}80`) // 50% opacity
        glow.addColorStop(1, 'rgba(0,0,0,0)')
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()
        ctx.closePath()
        
        // Update life
        particle.life += 1
        
        // Reset particle if it goes off screen or exceeds its lifespan
        if (
          particle.x < -50 ||
          particle.x > canvas.width + 50 ||
          particle.y < -50 ||
          particle.y > canvas.height + 50 ||
          particle.life > particle.maxLife
        ) {
          particlesRef.current[index] = createParticle(canvas.width, canvas.height, colors)
        }
      })
      
      animationFrameId = requestAnimationFrame(render)
    }

    render()
    
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [dimensions, colors, intensity, speed, isMobile])

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
