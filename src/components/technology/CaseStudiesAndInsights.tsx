import React, { useEffect, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import YouTubeFacade from "@/components/ui/youtube-facade";
import Autoplay from "embla-carousel-autoplay";

// Case Studies + Insights Section
// - Top: Case study carousel with the first slide as a video using YouTubeFacade (like John Reece section)
// - Bottom: Short blog links row (pill-style links)

const caseStudies = [
  {
    id: "video",
    type: "video" as const,
    title: "How AI-supercharged workflows improve provider experience",
    quote:
      "I've used over a dozen AI scribes and wasn't satisfied with any of them—until I started using S10.AI. It offers all the functionality I need in a single system. S10.AI has been the best experience by far.",
    author: "Dr. Brad Wainer",
    org: "DO Primary Care Associates",
    posterUrl: "/lovable-uploads/e3cd847c-a393-4441-9ec8-c60b0ca1b578.png",
    videoId: "ysz5S6PUM-U",
    cta: { href: "/case-studies", label: "Read full case study" },
  },
  {
    id: "trustpilot-1",
    type: "trustpilot" as const,
    title: "Exceptional AI Scribe Performance",
    quote:
      "I've tried several AI scribes—DeepScribe, Dragon Dax, Freed.ai, and Heidi—and S10.ai is by far the best. It's accurate, saves time, and I highly recommend it.",
    author: "Sarah Johnson",
    org: "Verified Trustpilot Reviewer",
    cta: { href: "https://www.trustpilot.com/users/668b8b2047406e76e8d0362f", label: "Read more on Trustpilot" },
  },
  {
    id: "trustpilot-2",
    type: "trustpilot" as const,
    title: "Practice Transformation with S10.AI",
    quote:
      "The S10.ai AI medical scribe has truly transformed my practice — I highly recommend it!",
    author: "Michael Thompson",
    org: "Verified Trustpilot Reviewer",
    cta: { href: "https://www.trustpilot.com/users/64572143efbe6d0015975d9f", label: "Read more on Trustpilot" },
  },
];

const insights = [
  {
    title: "Top 10 stats about AI in medical practices",
    href: "/blog",
  },
  {
    title: "What MA risk-adjustment audits could mean",
    href: "/blog",
  },
  {
    title: "What’s holding practices back from using AI?",
    href: "/blog",
  },
  {
    title: "From burnout to breathing room with AI",
    href: "/blog",
  },
];

const SlideContent: React.FC<{ cs: (typeof caseStudies)[number] }> = ({ cs }) => {
  const handleClick = () => {
    if (cs.cta?.href) {
      window.open(cs.cta.href, '_blank');
    }
  };

  // Full-width layout for Trustpilot slides
  if (cs.type === "trustpilot") {
    return (
      <article className="group rounded-3xl bg-gray-100 dark:bg-gray-800 shadow-xl ring-1 ring-border/60 p-6 md:p-8 animate-fade-in md:h-[320px] lg:h-[340px] flex flex-col justify-between">
        {/* Trustpilot Header */}
        <div className="flex items-center gap-3 mb-6">
          {/* Trustpilot Star */}
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#00B67A' }}>
            <path d="M12 2L9.19 8.63L2 9.24L7.46 14.97L5.82 22L12 18.27L18.18 22L16.54 14.97L22 9.24L14.81 8.63L12 2Z"/>
          </svg>
          {/* Trustpilot Text */}
          <span className="text-black dark:text-white font-bold text-xl">Trustpilot</span>
        </div>
        
        {/* Main Review Content */}
        <div className="flex-1 flex flex-col justify-center text-center">
          <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl leading-relaxed italic mb-8 max-w-4xl mx-auto">
            "{cs.quote}"
          </p>
          
          {/* Star Rating */}
          <div className="flex gap-1 justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#00B67A' }}>
                <path d="M12 2L9.19 8.63L2 9.24L7.46 14.97L5.82 22L12 18.27L18.18 22L16.54 14.97L22 9.24L14.81 8.63L12 2Z"/>
              </svg>
            ))}
          </div>
          
          {/* Author Info */}
          {cs.author && (
            <div className="text-gray-600 dark:text-gray-400 text-base mb-8">
              <p className="font-semibold">{cs.author}</p>
              <p>{cs.org}</p>
            </div>
          )}
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          {cs.cta && (
            <Button 
              variant="outline" 
              size="default" 
              className="rounded-full group cursor-pointer"
              onClick={handleClick}
            >
              {cs.cta.label}
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          )}
        </div>
      </article>
    );
  }

  // Video slide
  return (
    <article className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 items-stretch rounded-3xl bg-card/90 shadow-xl ring-1 ring-border/60 p-3 sm:p-5 md:p-6 animate-fade-in md:h-[320px] lg:h-[340px]">
      <div className="relative overflow-hidden rounded-2xl aspect-[16/10] sm:aspect-[4/3] md:aspect-auto md:h-full">
        <YouTubeFacade
          videoId={(cs as any).videoId}
          title={cs.title}
          posterUrl={(cs as any).posterUrl}
          className="h-full w-full"
          imageClassName="object-cover"
          playPosition="bottom-left"
        />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2.5 line-clamp-2">
            {cs.title}
          </h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-4 mb-3">
            "{cs.quote}"
          </p>
          {cs.author && (
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold">{cs.author}</p>
              <p>{cs.org}</p>
            </div>
          )}
        </div>
        <div className="mt-6">
          {cs.cta && (
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full group cursor-pointer"
              onClick={handleClick}
            >
              {cs.cta.label}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

const CaseStudiesAndInsights: React.FC = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    const handleSelect = () => setCurrent(api.selectedScrollSnap());
    const handleReInit = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", handleSelect);
    api.on("reInit", handleReInit);

    return () => {
      api.off("select", handleSelect);
      api.off("reInit", handleReInit);
    };
  }, [api]);

  return (
    <section aria-labelledby="tech-cs-insights-title" className="py-10 md:py-12 bg-gradient-to-b from-background via-muted/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <header className="mb-6 md:mb-8">
          <h2 id="tech-cs-insights-title" className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Real outcomes from modern AI workflows
          </h2>
          <p className="mt-1.5 text-muted-foreground">
            Explore case studies and timely insights for independent healthcare practices.
          </p>
        </header>

        {/* Case Study Carousel */}
        <div aria-labelledby="case-studies-title" className="mb-6 md:mb-8">
          <h3 id="case-studies-title" className="sr-only">Case studies</h3>
          <Carousel
            opts={{ 
              align: "start", 
              loop: true,
              skipSnaps: false,
              dragFree: false
            }}
            plugins={[Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false })]}
            setApi={setApi}
            className="w-full relative"
          >
            <CarouselContent>
              {caseStudies.map((cs) => (
                <CarouselItem key={cs.id} className="basis-full">
                  <SlideContent cs={cs} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="md:inline-flex -left-2 md:-left-4 z-10 bg-background/80 backdrop-blur-sm border-border hover:bg-background" />
            <CarouselNext className="md:inline-flex -right-2 md:-right-4 z-10 bg-background/80 backdrop-blur-sm border-border hover:bg-background" />
          </Carousel>
          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Select slide" aria-live="polite">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === current}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === current ? "w-5 bg-primary" : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                )}
              />
            ))}
          </div>
        </div>

        {/* Insights links */}
        <div aria-labelledby="insights-title">
          <div className="flex items-center justify-between mb-4">
            <h3 id="insights-title" className="text-xl md:text-2xl font-semibold">Insights for independent practices</h3>
            <a href="/blog" className="text-sm text-primary inline-flex items-center gap-1">
              The Intake <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {insights.map((i) => (
              <a
                key={i.title}
                href={i.href}
                className={cn(
                  "rounded-full border border-border bg-background text-foreground px-4 py-3",
                  "hover:bg-muted transition-colors inline-flex items-center justify-between gap-2"
                )}
                aria-label={`${i.title} – read article`}
              >
                <span className="line-clamp-1">{i.title}</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesAndInsights;
