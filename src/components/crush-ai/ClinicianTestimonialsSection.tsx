
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
import { Box, Container } from "@mui/material";

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
  const containerRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()
  
  // For scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  
  // Transform scroll progress to different values for sticky container effect
  const containerWidth = useTransform(scrollYProgress, [0, 0.3], ["96%", "100%"]);
  const containerHeight = useTransform(scrollYProgress, [0, 0.3], ["94%", "100%"]);
  const containerBorderRadius = useTransform(scrollYProgress, [0, 0.3], ["1rem", "0rem"]);
  const containerBgOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  
  // Previous transform values for card animations
  const cardScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [0.7, 1])
  const titleY = useTransform(scrollYProgress, [0, 0.3], [30, 0])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1])

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
    <Box
      component="section"
      ref={sectionRef}
      id="testimonials-alt"
      sx={{
        py: { xs: 6, md: 8 },
        position: "relative",
        overflow: "hidden",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          background: `linear-gradient(135deg, 
            ${crushAIColors.primary}33, 
            ${crushAIColors.secondary}33, 
            ${crushAIColors.tertiary}33)`,
          opacity: containerBgOpacity,
        }}
      />
      
      <motion.div
        ref={containerRef}
        className="overflow-hidden shadow-xl z-10"
        style={{
          width: containerWidth,
          height: containerHeight,
          borderRadius: containerBorderRadius,
          backgroundColor: "#ffffff",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
          position: "absolute",
          inset: 0,
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxHeight: "90%",
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: "relative",
            zIndex: 10,
            py: { xs: 3, md: 4 },
            px: { xs: 2, md: 3 },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflowY: "auto",
          }}
        >
          <motion.div
            style={{ y: titleY, opacity: titleOpacity }}
            className="text-center mb-8 space-y-3"
          >
            <motion.h2 
              variants={itemVariants} 
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              style={{ color: crushAIColors.primary }}
            >
              {title}
            </motion.h2>
            <motion.p 
              variants={itemVariants} 
              className="max-w-[700px] mx-auto md:text-xl/relaxed"
              style={{ color: crushAIColors.text.secondary }}
            >
              {subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="md:grid md:grid-cols-[1fr_auto] gap-6 items-center max-w-[1000px] mx-auto"
            style={{ 
              scale: cardScale,
              opacity: cardOpacity,
            }}
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
                    <CardContent className="p-5 md:p-6 h-full flex flex-col">
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
            <motion.div variants={itemVariants} className="flex md:flex-col gap-4 justify-center mt-6 md:mt-0">
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
        </Container>
      </motion.div>
    </Box>
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
