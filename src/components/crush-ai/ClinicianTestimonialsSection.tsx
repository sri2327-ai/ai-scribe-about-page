
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
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

// Default testimonials - replace as needed
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Cardiologist",
    company: "Heart Care Associates",
    content: "CRUSH has transformed my practice. Documentation that once took hours now happens in real-time, allowing me to focus entirely on my patients. The clinical insights are remarkably accurate.",
    rating: 5,
    avatar: "/testimonials/doctor-1.jpg"
  },
  {
    id: 2,
    name: "Dr. Michael Rodriguez",
    role: "Family Physician",
    company: "Community Health Center",
    content: "As a physician seeing 25+ patients daily, CRUSH has been revolutionary. It captures everything accurately during visits, and I spend almost zero time on documentation after hours.",
    rating: 5,
    avatar: "/testimonials/doctor-2.jpg"
  },
  {
    id: 3,
    name: "Dr. Emma Thompson",
    role: "Pediatrician",
    company: "Children's Wellness Clinic",
    content: "The quality of notes CRUSH produces is exceptional. It captures medical details with precision while maintaining the human elements of patient stories.",
    rating: 5,
    avatar: "/testimonials/doctor-3.jpg"
  },
];

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
  
  // For scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  
  // Transform scroll progress to different values for various animations
  const cardScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1])
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1])
  const titleY = useTransform(scrollYProgress, [0, 0.3], [50, 0])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

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
      className={cn("py-16 md:py-24 relative overflow-hidden flex justify-center bg-white text-black", className)}
    >
      <div className="absolute inset-0 border-b border-black/10 z-0"></div>
      
      <div className="container items-center px-4 md:px-6 relative z-10">
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="text-center mb-12 space-y-4"
        >
          <motion.h2 
            variants={itemVariants} 
            className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[${crushAIColors.primary}]`}
          >
            {title}
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className={`max-w-[700px] mx-auto md:text-xl/relaxed text-[${crushAIColors.text.secondary}]`}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="md:grid md:grid-cols-[1fr_auto] gap-8 items-center max-w-[1200px] mx-auto"
        >
          <motion.div 
            variants={itemVariants} 
            style={{ scale: cardScale, opacity: cardOpacity }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 z-10">
              <Quote className={`h-12 w-12 text-[${crushAIColors.tertiary}33]`} strokeWidth={1} />
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
                    index === activeIndex ? `border-[${crushAIColors.tertiary}33]` : 'border-transparent'
                  )}
                >
                  <CardContent className="p-6 md:p-8 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <Avatar className={`h-12 w-12 border-2 border-[${crushAIColors.tertiary}33]`}>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback 
                            className={`text-white bg-[${crushAIColors.primary}]`}
                          >
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <h4 
                            className={`font-semibold text-[${crushAIColors.text.primary}]`}
                          >
                            {testimonial.name}
                          </h4>
                          <p 
                            className={`text-sm text-[${crushAIColors.text.secondary}]`}
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

                    <Separator className={`my-4 bg-[${crushAIColors.tertiary}33]`} />

                    <p 
                      className={`flex-1 italic text-base/relaxed text-[${crushAIColors.text.secondary}]`}
                    >
                      "{testimonial.content}"
                    </p>

                    {showVerifiedBadge && (
                      <div 
                        className={`mt-4 text-xs text-right text-[${crushAIColors.text.light}]`}
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
              className={`rounded-full h-10 w-10 hover:border-black/30 border-[${crushAIColors.primary}33] bg-white`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className={`h-4 w-4 text-[${crushAIColors.text.light}]`} />
            </Button>

            <div className="flex md:flex-col gap-2 items-center justify-center">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    index === activeIndex 
                      ? `bg-[${crushAIColors.primary}]` 
                      : `bg-[${crushAIColors.tertiary}33]`
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
              className={`rounded-full h-10 w-10 hover:border-black/30 border-[${crushAIColors.primary}33] bg-white`}
              aria-label="Next testimonial"
            >
              <ChevronRight className={`h-4 w-4 text-[${crushAIColors.text.light}]`} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
