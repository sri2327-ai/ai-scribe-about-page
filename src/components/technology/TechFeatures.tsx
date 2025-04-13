
"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, CheckCircle, DollarSign, Heart, Cpu } from "lucide-react"
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
  const isMobile = useIsMobile()

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-wix-madefor">
            {title}
          </h2>
          <p className="text-blue-100/90 max-w-2xl mx-auto">
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
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 border-purple-400 text-white"
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

          <div className="order-1 lg:order-2 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-10">
            <AnimatePresence mode="wait">
              {features.map((feature, index) =>
                index === currentFeature ? (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 rounded-full mb-8">
                      <div className="w-16 h-16 flex items-center justify-center text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-normal text-white mb-4">{feature.title}</h3>
                    <p className="text-center text-gray-300 max-w-md">{feature.content}</p>
                    
                    {/* Progress bar */}
                    <div className="w-full mt-8 h-1 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                      />
                    </div>
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
      icon: <Clock className="w-10 h-10 stroke-[1.5]" />
    },
    {
      step: 'Step 2',
      title: 'Unmatched Accuracy',
      content: 'AI-driven precision for documentation & workflows, ensuring clinical details are captured with exceptional fidelity.',
      icon: <CheckCircle className="w-10 h-10 stroke-[1.5]" />
    },
    {
      step: 'Step 3',
      title: 'Cost-Effective Efficiency',
      content: 'Reduces overhead without sacrificing quality, allowing healthcare providers to allocate resources more effectively.',
      icon: <DollarSign className="w-10 h-10 stroke-[1.5]" />
    },
    {
      step: 'Step 4',
      title: 'Enhanced Patient Care',
      content: 'AI automation for faster, better decision-making, enabling clinicians to focus more on direct patient care.',
      icon: <Heart className="w-10 h-10 stroke-[1.5]" />
    },
    {
      step: 'Step 5',
      title: 'Autonomous Operations',
      content: 'AI-powered staffing, scribing & clinical support that works intelligently alongside your team.',
      icon: <Cpu className="w-10 h-10 stroke-[1.5]" />
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
