"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { crushAIColors } from "@/theme/crush-ai-theme";

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export interface TestimonialsSectionProps {
  title?: string
  subtitle?: string
  testimonials?: Testimonial[]
  autoRotateInterval?: number
  showVerifiedBadge?: boolean
  trustedCompanies?: string[]
  trustedCompaniesTitle?: string
  className?: string
}

export function ClinicianTestimonialsSection({
  testimonials = defaultTestimonials,
  autoRotateInterval = 6000,
  showVerifiedBadge = true,
  trustedCompanies = [],
  trustedCompaniesTitle = "Trusted by healthcare providers nationwide",
  className,
}: TestimonialsSectionProps) {
  // State for active testimonial
  const [activeIndex, setActiveIndex] = useState(0)
  const controls = useAnimation()
  
  // Automatically cycle through testimonials
  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [testimonials.length, autoRotateInterval])

  // Trigger animations when component mounts
  useEffect(() => {
    controls.start("visible")
  }, [controls])

  // Handlers for navigation
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section
      id="testimonials-alt"
      className={cn("py-8 md:py-10 flex justify-center text-black w-full", className)}
      style={{ height: '100%' }}
    >      
      <div className="container items-center px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="md:grid md:grid-cols-[1fr_auto] gap-8 items-center max-w-[1200px] mx-auto"
        >
          <motion.div 
            variants={itemVariants} 
            className="relative"
          >
            <div className="absolute -top-6 -left-6 z-10">
              <Quote className="h-12 w-12" style={{ color: `${crushAIColors.tertiary}33` }} strokeWidth={1} />
            </div>

            {/* Testimonial cards */}
            <div className="relative h-[320px] md:h-[280px]">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-500 border",
                    index === activeIndex
                      ? "opacity-100 translate-x-0 shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                      : "opacity-0 translate-x-[100px] pointer-events-none",
                  )}
                  style={{ 
                    borderColor: index === activeIndex ? `${crushAIColors.tertiary}33` : 'transparent'
                  }}
                >
                  <CardContent className="p-6 md:p-8 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2" style={{ borderColor: `${crushAIColors.tertiary}33` }}>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback 
                            className="text-white"
                            style={{ backgroundColor: crushAIColors.primary }}
                          >
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <h4 
                            className="font-semibold"
                            style={{ color: crushAIColors.text.primary }}
                          >
                            {testimonial.name}
                          </h4>
                          <p 
                            className="text-sm"
                            style={{ color: crushAIColors.text.secondary }}
                          >
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>

                    <Separator className="my-4" style={{ backgroundColor: `${crushAIColors.tertiary}33` }} />

                    <p 
                      className="flex-1 italic text-base/relaxed"
                      style={{ color: crushAIColors.text.secondary }}
                    >
                      "{testimonial.content}"
                    </p>

                    {showVerifiedBadge && (
                      <div 
                        className="mt-4 text-xs text-right"
                        style={{ color: crushAIColors.text.light }}
                      >
                        Verified Healthcare Provider
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <motion.div variants={itemVariants} className="flex md:flex-col gap-4 justify-center mt-8 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full h-10 w-10 hover:border-black/30"
              style={{ 
                borderColor: `${crushAIColors.primary}33`,
                backgroundColor: "white"
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" style={{ color: crushAIColors.text.light }} />
            </Button>

            <div className="flex md:flex-col gap-2 items-center justify-center">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    index === activeIndex ? "" : "",
                  )}
                  style={{ 
                    backgroundColor: index === activeIndex 
                      ? crushAIColors.primary 
                      : `${crushAIColors.tertiary}33`
                  }}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveIndex(index)
                    }
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full h-10 w-10 hover:border-black/30"
              style={{ 
                borderColor: `${crushAIColors.primary}33`,
                backgroundColor: "white"
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" style={{ color: crushAIColors.text.light }} />
            </Button>
          </motion.div>
        </motion.div>

        {/* Logo cloud */}
        {trustedCompanies.length > 0 && (
          <motion.div 
            variants={itemVariants} 
            className="mt-20 pt-10 border-t" 
            style={{ borderColor: `${crushAIColors.tertiary}33` }}
          >
            <h3 
              className="text-sm font-medium text-center mb-8"
              style={{ color: crushAIColors.text.light }}
            >
              {trustedCompaniesTitle}
            </h3>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
              {trustedCompanies.map((company) => (
                <div 
                  key={company} 
                  className="text-2xl font-semibold"
                  style={{ color: `${crushAIColors.text.light}80` }}
                >
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

// Default testimonials data with realistic clinician feedback
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Family Medicine Physician",
    company: "Boston Medical Center",
    content: "CRUSH has transformed my practice. I'm saving 2+ hours daily on documentation, allowing me to focus on patients instead of screens. The AI captures nuances I would have missed in my notes.",
    rating: 5,
    avatar: ""
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Cardiologist",
    company: "Northwestern Memorial Hospital",
    content: "As a specialist, I need precision in my documentation. CRUSH understands complex cardiac terminology and accurately documents patient histories, saving me time while improving my note quality.",
    rating: 5,
    avatar: ""
  },
  {
    id: 3,
    name: "Dr. Rebecca Martinez",
    role: "Pediatrician",
    company: "Children's Hospital Colorado",
    content: "CRUSH adapts perfectly to pediatric practice. It handles parent interviews seamlessly, helps with growth tracking, and ensures I never miss preventative care opportunities. Game-changing technology!",
    rating: 5,
    avatar: ""
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    role: "Emergency Medicine",
    company: "Johns Hopkins Hospital",
    content: "In our fast-paced ED, CRUSH keeps up flawlessly. It captures critical details during rapid assessments and helps me maintain detailed documentation even during our busiest shifts.",
    rating: 4,
    avatar: ""
  },
  {
    id: 5,
    name: "Dr. Elizabeth Taylor",
    role: "Psychiatrist",
    company: "UCLA Medical Center",
    content: "CRUSH excels at capturing the nuances of psychiatric interviews. It helps me track subtle changes in patient presentation over time and ensures my documentation supports proper care planning.",
    rating: 5,
    avatar: ""
  }
];
