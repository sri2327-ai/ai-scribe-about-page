
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

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
  title = "Loved by Clinicians",
  subtitle = "See what others are saying about CRUSH, our AI Medical Scribe",
  testimonials = defaultTestimonials,
  autoRotateInterval = 6000,
  showVerifiedBadge = true,
  trustedCompanies = [],
  trustedCompaniesTitle = "Trusted by healthcare providers nationwide",
  className,
}: TestimonialsSectionProps) {
  // State for active testimonial
  const [activeIndex, setActiveIndex] = useState(0)

  // Refs for scroll animations
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  // Automatically cycle through testimonials
  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [testimonials.length, autoRotateInterval])

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

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
      ref={sectionRef}
      id="testimonials-alt"
      className={cn("py-16 md:py-24 relative overflow-hidden flex justify-center bg-black text-white", className)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/90 to-black z-0"></div>
      
      <div className="container items-center px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-12 space-y-4"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            {title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-[700px] mx-auto md:text-xl/relaxed">
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="md:grid md:grid-cols-[1fr_auto] gap-8 items-center max-w-[1200px] mx-auto"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -top-6 -left-6 z-10">
              <Quote className="h-12 w-12 text-purple-400/50" strokeWidth={1} />
            </div>

            {/* Testimonial cards */}
            <div className="relative h-[320px] md:h-[280px]">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-500 border border-gray-800 bg-black",
                    index === activeIndex
                      ? "opacity-100 translate-x-0 shadow-[0_0_15px_rgba(155,135,245,0.2)]"
                      : "opacity-0 translate-x-[100px] pointer-events-none",
                  )}
                >
                  <CardContent className="p-6 md:p-8 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-purple-500/20">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-purple-950 text-purple-200">{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <h4 className="font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-sm text-gray-400">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-purple-500 text-purple-500" />
                        ))}
                      </div>
                    </div>

                    <Separator className="my-4 bg-gray-800" />

                    <p className="flex-1 italic text-base/relaxed text-gray-300">"{testimonial.content}"</p>

                    {showVerifiedBadge && (
                      <div className="mt-4 text-xs text-right text-gray-500">Verified Healthcare Provider</div>
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
              className="rounded-full h-10 w-10 border-gray-700 bg-black hover:bg-gray-900 hover:border-purple-500/50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4 text-gray-400" />
            </Button>

            <div className="flex md:flex-col gap-2 items-center justify-center">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    index === activeIndex ? "bg-purple-500" : "bg-gray-700",
                  )}
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
              className="rounded-full h-10 w-10 border-gray-700 bg-black hover:bg-gray-900 hover:border-purple-500/50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Logo cloud */}
        {trustedCompanies.length > 0 && (
          <motion.div variants={itemVariants} className="mt-20 pt-10 border-t border-gray-800">
            <h3 className="text-sm font-medium text-gray-400 text-center mb-8">{trustedCompaniesTitle}</h3>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
              {trustedCompanies.map((company) => (
                <div key={company} className="text-2xl font-semibold text-gray-600">
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
