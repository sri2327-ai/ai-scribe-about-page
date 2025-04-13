
"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, CheckCircle, DollarSign, Heart, Cpu } from "lucide-react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import { Skeleton } from "@/components/ui/skeleton"
import { Progress } from "@/components/ui/progress"

interface Feature {
  step: string
  title: string
  content: string
  icon: React.ReactNode
}

interface TechFeaturesProps {
  features: Feature[]
  className?: string
  title?: string
  subtitle?: string
  autoPlayInterval?: number
}

export function TechFeatures({
  features,
  className,
  title = "Technology That Delivers",
  subtitle = "Our platform combines cutting-edge AI with healthcare expertise",
  autoPlayInterval = 5000,
}: TechFeaturesProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setLoading(true)
        setTimeout(() => {
          setCurrentFeature((prev) => (prev + 1) % features.length)
          setProgress(0)
          setLoading(false)
        }, 300)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <section className={cn("py-16 md:py-24 bg-black", className)}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4 text-white font-wix-madefor">
            {title}
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
          {/* Left side - Only headings */}
          <div className="order-2 lg:order-1 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="cursor-pointer"
                initial={{ opacity: 0.5 }}
                animate={{ 
                  opacity: index === currentFeature ? 1 : 0.5,
                  scale: index === currentFeature ? 1.02 : 1
                }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  setCurrentFeature(index)
                  setProgress(0)
                }}
              >
                <h3 className={cn(
                  "text-xl md:text-2xl font-semibold",
                  index === currentFeature ? "text-white" : "text-white/50"
                )}>
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Right side - Icon, description and loader */}
          <div className="order-1 lg:order-2 bg-black backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-10 relative overflow-hidden">
            {/* Abstract geometric design with white outlines */}
            <div className="absolute inset-0 w-full h-full opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="white" strokeWidth="1">
                  <circle cx="400" cy="300" r="250" strokeOpacity="0.4" />
                  <circle cx="400" cy="300" r="200" strokeOpacity="0.3" />
                  <circle cx="400" cy="300" r="150" strokeOpacity="0.2" />
                  <path d="M100,100 L700,100 L700,500 L100,500 Z" strokeOpacity="0.5" />
                  <path d="M150,150 L650,150 L650,450 L150,450 Z" strokeOpacity="0.3" />
                  <path d="M200,200 L600,200 L600,400 L200,400 Z" strokeOpacity="0.2" />
                  <line x1="100" y1="100" x2="700" y2="500" strokeOpacity="0.1" />
                  <line x1="700" y1="100" x2="100" y2="500" strokeOpacity="0.1" />
                </g>
              </svg>
            </div>

            <AnimatePresence mode="wait">
              {features.map((feature, index) =>
                index === currentFeature ? (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center h-full relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="border-2 border-white p-8 rounded-full mb-8 relative">
                      <div className="absolute inset-0 rounded-full blur-sm bg-white/5"></div>
                      <div className="w-16 h-16 flex items-center justify-center text-white relative z-10">
                        {feature.icon}
                      </div>
                    </div>
                    <p className="text-center text-gray-300 max-w-md mb-8">{feature.content}</p>
                    
                    {/* Custom gradient progress bar */}
                    <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-white/40 via-white to-white/40"
                        style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
                      />
                    </div>
                    
                    {loading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-20">
                        {/* Modern geometric loader */}
                        <div className="relative">
                          <svg width="80" height="80" viewBox="0 0 80 80">
                            <circle 
                              className="opacity-20" 
                              cx="40" cy="40" r="34" 
                              fill="none" 
                              stroke="white" 
                              strokeWidth="2"
                            />
                            <circle 
                              className="animate-spin origin-center" 
                              cx="40" cy="40" r="34" 
                              fill="none" 
                              stroke="white" 
                              strokeWidth="4"
                              strokeDasharray="40 170"
                              style={{ animationDuration: '2s' }}
                            />
                            <circle 
                              className="animate-ping" 
                              cx="40" cy="40" r="5" 
                              fill="white"
                              style={{ animationDuration: '1.5s' }}
                            />
                            <path 
                              className="animate-pulse" 
                              d="M30,40 L50,40 M40,30 L40,50" 
                              stroke="white" 
                              strokeWidth="1"
                              style={{ animationDuration: '1s' }}
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

const TechFeaturesContent = () => {
  const features = [
    {
      step: 'Step 1',
      title: 'Real-Time, 24/7 Automation',
      content: 'Always available, no downtime. Our AI systems work around the clock providing continuous service and support.',
      icon: <Clock className="w-10 h-10 stroke-[1.5] text-white" />
    },
    {
      step: 'Step 2',
      title: 'Unmatched Accuracy',
      content: 'AI-driven precision for documentation & workflows, ensuring clinical details are captured with exceptional fidelity.',
      icon: <CheckCircle className="w-10 h-10 stroke-[1.5] text-white" />
    },
    {
      step: 'Step 3',
      title: 'Cost-Effective Efficiency',
      content: 'Reduces overhead without sacrificing quality, allowing healthcare providers to allocate resources more effectively.',
      icon: <DollarSign className="w-10 h-10 stroke-[1.5] text-white" />
    },
    {
      step: 'Step 4',
      title: 'Enhanced Patient Care',
      content: 'AI automation for faster, better decision-making, enabling clinicians to focus more on direct patient care.',
      icon: <Heart className="w-10 h-10 stroke-[1.5] text-white" />
    },
    {
      step: 'Step 5',
      title: 'Autonomous Operations',
      content: 'AI-powered staffing, scribing & clinical support that works intelligently alongside your team.',
      icon: <Cpu className="w-10 h-10 stroke-[1.5] text-white" />
    },
  ]

  return (
    <TechFeatures
      features={features}
      title="Technology That Delivers"
      subtitle="Transforming healthcare delivery with intelligent automation"
      autoPlayInterval={5000}
    />
  )
}

export default TechFeaturesContent
