
"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, CheckCircle, DollarSign, Heart, Cpu } from "lucide-react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import { Skeleton } from "@/components/ui/skeleton"
import { GradientTracing } from "@/components/ui/gradient-tracing"

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
          <div className="order-2 lg:order-1 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6"
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
                <motion.div
                  className={cn(
                    "mt-1 w-10 h-10 rounded-full flex items-center justify-center border",
                    index === currentFeature
                      ? "bg-white border-white text-black"
                      : "bg-black border-white/20 text-white/60",
                  )}
                  whileHover={{ scale: 1.1 }}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className={cn(
                    "text-xl font-semibold mb-2",
                    index === currentFeature ? "text-white" : "text-white/70"
                  )}>
                    {feature.title}
                  </h3>
                  <p className={cn(
                    "text-base",
                    index === currentFeature ? "text-gray-300" : "text-gray-400"
                  )}>
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="order-1 lg:order-2 bg-black backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-10 relative overflow-hidden">
            {/* Grok-inspired gradient backdrop */}
            <div className="absolute inset-0 w-full h-full opacity-50 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ea384c]/50 via-[#F97316]/40 to-[#D946EF]/30"></div>
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
            </div>

            {/* Geometric design with white outlines */}
            <div className="absolute inset-0 w-full h-full opacity-20 z-0">
              <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="white" strokeWidth="1">
                  <circle cx="400" cy="300" r="250" strokeOpacity="0.3" />
                  <circle cx="400" cy="300" r="200" strokeOpacity="0.2" />
                  <circle cx="400" cy="300" r="150" strokeOpacity="0.15" />
                  <path d="M200,150 L600,150 L600,450 L200,450 Z" strokeOpacity="0.25" />
                  <path d="M250,200 L550,200 L550,400 L250,400 Z" strokeOpacity="0.2" />
                  <line x1="200" y1="150" x2="600" y2="450" strokeOpacity="0.15" />
                  <line x1="600" y1="150" x2="200" y2="450" strokeOpacity="0.15" />
                </g>
              </svg>
            </div>

            {/* Add gradient tracing effect */}
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 opacity-60 z-0">
              <GradientTracing
                width={800}
                height={2}
                strokeWidth={2}
                baseColor="white"
                gradientColors={["#ea384c", "#F97316", "#D946EF"]}
                animationDuration={3}
                path={`M0,1 L800,1`}
              />
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
                    <div className="bg-black border-2 border-white p-8 rounded-full mb-8 relative">
                      <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-br from-[#ea384c]/20 via-[#F97316]/10 to-[#D946EF]/20"></div>
                      <div className="w-16 h-16 flex items-center justify-center text-white relative z-10">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-normal text-white mb-4">{feature.title}</h3>
                    <p className="text-center text-gray-300 max-w-md">{feature.content}</p>
                    
                    {/* Custom elegant progress bar */}
                    <div className="w-full mt-8 h-[2px] bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-[#ea384c] via-[#F97316] to-[#D946EF]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                      />
                    </div>
                    
                    {loading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-20">
                        <div className="relative w-16 h-16">
                          <div className="absolute inset-0 rounded-full border-2 border-t-white border-r-white/50 border-b-transparent border-l-transparent animate-spin"></div>
                          <div className="absolute inset-4 rounded-full border-2 border-b-white border-l-white/50 border-t-transparent border-r-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
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
