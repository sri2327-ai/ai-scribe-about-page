
"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Workflow, BarChart3, HeartPulse, Bot } from "lucide-react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

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
                      ? "bg-black border-white text-white"
                      : "bg-black border-white/20 text-white/60",
                  )}
                  whileHover={{ scale: 1.1 }}
                >
                  {index <= currentFeature ? (
                    <span className={cn(
                      "text-lg font-bold",
                      index === currentFeature ? "text-white" : "text-gray-400"
                    )}>✓</span>
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
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-64 h-64 text-white">
                        {feature.icon}
                      </div>
                    </div>
                    
                    <div className="absolute bottom-6 left-0 right-0 w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-white"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                      />
                    </div>
                    
                    {loading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-20">
                        <div className="relative w-16 h-16">
                          <div className="absolute inset-0 border-t-2 border-r-2 border-white/80 rounded-full animate-spin"></div>
                          <div className="absolute inset-4 border-b-2 border-l-2 border-white/60 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          </div>
                          <div className="absolute h-[1px] w-full top-1/2 -translate-y-1/2 bg-white/30 animate-pulse"></div>
                          <div className="absolute w-[1px] h-full left-1/2 -translate-x-1/2 bg-white/30 animate-pulse"></div>
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
      icon: <Brain className="w-full h-full stroke-[1] text-white" />
    },
    {
      step: 'Step 2',
      title: 'Unmatched Accuracy',
      content: 'AI-driven precision for documentation & workflows, ensuring clinical details are captured with exceptional fidelity.',
      icon: <Workflow className="w-full h-full stroke-[1] text-white" />
    },
    {
      step: 'Step 3',
      title: 'Cost-Effective Efficiency',
      content: 'Reduces overhead without sacrificing quality, allowing healthcare providers to allocate resources more effectively.',
      icon: <BarChart3 className="w-full h-full stroke-[1] text-white" />
    },
    {
      step: 'Step 4',
      title: 'Enhanced Patient Care',
      content: 'AI automation for faster, better decision-making, enabling clinicians to focus more on direct patient care.',
      icon: <HeartPulse className="w-full h-full stroke-[1] text-white" />
    },
    {
      step: 'Step 5',
      title: 'Autonomous Operations',
      content: 'AI-powered staffing, scribing & clinical support that works intelligently alongside your team.',
      icon: <Bot className="w-full h-full stroke-[1] text-white" />
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
