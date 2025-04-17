
"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type SVGProps,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Container, Typography, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { Zap, RefreshCw, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { WaveBackground } from "@/components/ui/wave-background";
import { cn } from "@/lib/utils";

// Logo component types
interface Logo {
  name: string
  id: number
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
}

// Utility functions for logos
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos)
  const columns: Logo[][] = Array.from({ length: columnCount }, () => [])

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  const maxLength = Math.max(...columns.map((col) => col.length))
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })

  return columns
}

// Logo Column Component
const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 2000
    const columnDelay = index * 200
    const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
    const currentIndex = Math.floor(adjustedTime / cycleInterval)
    const CurrentLogo = useMemo(() => logos[currentIndex].img, [logos, currentIndex])

    return (
      <motion.div
        className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${logos[currentIndex].id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            exit={{
              y: "-20%",
              opacity: 0,
              filter: "blur(6px)",
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
              },
            }}
          >
            <CurrentLogo className="h-20 w-20 max-h-[80%] max-w-[80%] object-contain md:h-32 md:w-32" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    )
  }
)

// Logo Carousel Component
interface LogoCarouselProps {
  columnCount?: number
  logos: Logo[]
}

function LogoCarousel({ columnCount = 2, logos }: LogoCarouselProps) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  useEffect(() => {
    const distributedLogos = distributeLogos(logos, columnCount)
    setLogoSets(distributedLogos)
  }, [logos, columnCount])

  return (
    <div className="flex space-x-4">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  )
}

// Gradient Heading Component
const headingVariants = cva(
  "tracking-tight pb-3 bg-clip-text text-transparent",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-t from-neutral-700 to-neutral-800 dark:from-stone-200 dark:to-neutral-200",
        pink: "bg-gradient-to-t from-accent to-accent/90 dark:from-stone-200 dark:to-neutral-200",
        light: "bg-gradient-to-t from-neutral-200 to-neutral-300",
        secondary:
          "bg-gradient-to-t from-neutral-500 to-neutral-600 dark:from-stone-200 dark:to-neutral-200",
      },
      size: {
        default: "text-2xl sm:text-3xl lg:text-4xl",
        xxs: "text-base sm:text-lg lg:text-lg",
        xs: "text-lg sm:text-xl lg:text-2xl",
        sm: "text-xl sm:text-2xl lg:text-3xl",
        md: "text-2xl sm:text-3xl lg:text-4xl",
        lg: "text-3xl sm:text-4xl lg:text-5xl",
        xl: "text-4xl sm:text-5xl lg:text-6xl",
        xll: "text-5xl sm:text-6xl lg:text-[5.4rem]  lg:leading-[0.5rem] ",
        xxl: "text-5xl sm:text-6xl lg:text-[6rem]",
        xxxl: "text-5xl sm:text-6xl lg:text-[8rem]",
      },
      weight: {
        default: "font-bold",
        thin: "font-thin",
        base: "font-base",
        semi: "font-semibold",
        bold: "font-bold",
        black: "font-black",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      weight: "default",
    },
  }
)

interface HeadingProps extends VariantProps<typeof headingVariants> {
  asChild?: boolean
  children: React.ReactNode
  className?: string
}

const GradientHeading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ asChild, variant, weight, size, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "h3" // default to 'h3' if not a child
    return (
      <Comp ref={ref} {...props} className={className}>
        <span className={cn(headingVariants({ variant, size, weight }))}>
          {children}
        </span>
      </Comp>
    )
  }
)

GradientHeading.displayName = "GradientHeading"

// Define types for headings
type Variant = "default" | "pink" | "light" | "secondary"
type Size =
  | "default"
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "xxxl"
type Weight = "default" | "thin" | "base" | "semi" | "bold" | "black"

// Mock EHR logos for demonstration
// For a real implementation, you would replace these with actual SVG imports 
const ehrLogos = [
  { id: 1, name: "Epic", img: ({ className }: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" className={className}><rect width="24" height="24" rx="2" fill="#143151" /><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10">Epic</text></svg> },
  { id: 2, name: "Cerner", img: ({ className }: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" className={className}><rect width="24" height="24" rx="2" fill="#143151" /><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="8">Cerner</text></svg> },
  { id: 3, name: "Meditech", img: ({ className }: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" className={className}><rect width="24" height="24" rx="2" fill="#143151" /><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="7">Meditech</text></svg> },
  { id: 4, name: "NextGen", img: ({ className }: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" className={className}><rect width="24" height="24" rx="2" fill="#143151" /><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="7">NextGen</text></svg> },
  { id: 5, name: "Athena", img: ({ className }: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" className={className}><rect width="24" height="24" rx="2" fill="#143151" /><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="8">Athena</text></svg> },
]

// Main EHR Integration Section
export const EhrIntegrationSection = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.between('sm', 'md'));

  const features = [
    {
      title: "Works on Any Device",
      description: "Desktop, laptop, tablet, or mobile.",
      icon: <Zap size={36} style={{ color: crushAIColors.secondary }} />
    },
    {
      title: "Instant Sync",
      description: "AI-generated notes go directly into your EHR.",
      icon: <RefreshCw size={36} style={{ color: crushAIColors.secondary }} />
    },
    {
      title: "Automated Updates",
      description: "Lab results, prescriptions, and referrals auto-sync.",
      icon: <FileCheck size={36} style={{ color: crushAIColors.secondary }} />
    }
  ];

  return (
    <WaveBackground 
      baseColor={crushAIColors.secondary}
      intensity="light"
    >
      <Box 
        component="section" 
        sx={{ 
          py: { xs: 6, md: 12 },
          position: "relative",
          zIndex: 1
        }}
      >
        <Container maxWidth="lg">
          <Box 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            sx={{ mb: 6, textAlign: 'center' }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.75rem', md: '2.75rem' },
                fontWeight: 800,
                mb: 3,
                color: crushAIColors.text.primary,
                letterSpacing: '-0.04em',
                lineHeight: 1.1
              }}
            >
              Seamless EHR Integration
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                maxWidth: 720,
                mx: 'auto',
                color: crushAIColors.text.primary,
                fontWeight: 400,
                mb: 5,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                lineHeight: 1.6
              }}
            >
              CRUSH syncs effortlessly with any EHR system, eliminating copy-pasting and manual entry.
            </Typography>
          </Box>

          {/* EHR Logo Carousel */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
              mb: 8
            }}
          >
            <LogoCarousel logos={ehrLogos} columnCount={3} />
          </Box>

          {/* Features section */}
          {isMobile ? (
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent>
                {features.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 bg-white/95">
                        <CardContent className="flex flex-col items-center text-center p-6">
                          <Box 
                            sx={{ 
                              mb: 3,
                              p: 2,
                              borderRadius: '50%',
                              bgcolor: `${crushAIColors.secondary}20`,
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center'
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Typography 
                            variant="h5" 
                            sx={{ 
                              mb: 1.5,
                              fontWeight: 600,
                              color: crushAIColors.text.primary,
                              fontSize: '1.25rem',
                              letterSpacing: '-0.01em'
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography 
                            variant="body1"
                            sx={{ color: crushAIColors.text.secondary, fontSize: '0.95rem', lineHeight: 1.5 }}
                          >
                            {item.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4 gap-2">
                <CarouselPrevious className="relative static left-auto translate-y-0" />
                <CarouselNext className="relative static right-auto translate-y-0" />
              </div>
            </Carousel>
          ) : (
            <Box 
              sx={{ 
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: { xs: 2, sm: 2, md: 3 },
                width: '100%',
                px: 2,
                overflow: 'visible',
                position: 'relative',
                zIndex: 2
              }}
            >
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  style={{ 
                    width: isTablet ? 'calc(33.333% - 16px)' : '300px',
                    minWidth: isTablet ? 'auto' : '300px'
                  }}
                >
                  <Card className="h-full overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 bg-white/95">
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <Box 
                        sx={{ 
                          mb: 3,
                          p: 2,
                          borderRadius: '50%',
                          bgcolor: `${crushAIColors.secondary}20`,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          mb: 1.5,
                          fontWeight: 600,
                          color: crushAIColors.text.primary,
                          fontSize: '1.25rem',
                          letterSpacing: '-0.01em'
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography 
                        variant="body1"
                        sx={{ color: crushAIColors.text.secondary, fontSize: '0.95rem', lineHeight: 1.5 }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          )}
        </Container>
      </Box>
    </WaveBackground>
  );
};

// Export additional components for reuse
export { LogoColumn, LogoCarousel, GradientHeading, headingVariants };
