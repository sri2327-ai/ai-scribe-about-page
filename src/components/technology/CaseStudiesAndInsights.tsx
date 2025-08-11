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
      "I now have all the functionality I need in one system… it has been the best experience.",
    author: "Practice Owner",
    org: "Psychiatric Care",
    posterUrl: "/lovable-uploads/e3cd847c-a393-4441-9ec8-c60b0ca1b578.png", // Provided by user
    videoId: "ysz5S6PUM-U",
  },
  {
    id: "patient-care",
    type: "image" as const,
    title: "Improved Patient Care and Clinician Satisfaction",
    quote:
      "Documentation time reduced 60%, enabling more face time with patients.",
    image: "/case-studies/patient-care.svg",
    cta: { href: "/case-studies", label: "Read full case study" },
  },
  {
    id: "revenue-growth",
    type: "image" as const,
    title: "Revenue Growth with Streamlined Coding",
    quote: "Cleaner notes, better codes, 15% uplift in reimbursements.",
    image: "/case-studies/revenue-growth.svg",
    cta: { href: "/case-studies", label: "Read full case study" },
  },
  {
    id: "cost-savings",
    type: "image" as const,
    title: "Cost Savings via Automation",
    quote: "Saved hundreds of hours by automating routine admin work.",
    image: "/case-studies/cost-savings-improved.svg",
    cta: { href: "/case-studies", label: "Read full case study" },
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
  return (
    <article className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch rounded-3xl bg-card/90 shadow-xl ring-1 ring-border/60 p-4 sm:p-6 md:p-8 animate-fade-in md:h-[420px] lg:h-[460px]">
      <div className="relative overflow-hidden rounded-2xl aspect-[16/10] sm:aspect-[4/3] md:aspect-auto md:h-full">
        {cs.type === "video" ? (
          <YouTubeFacade
            videoId={(cs as any).videoId}
            title={cs.title}
            posterUrl={(cs as any).posterUrl}
            className="h-full w-full"
            imageClassName="object-cover"
            playPosition="bottom-left"
          />
        ) : (
          <OptimizedImage
            src={(cs as any).image}
            alt={cs.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 line-clamp-2">
            {cs.title}
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-4">
            {cs.quote}
          </p>
        </div>
        <div className="mt-6">
          {cs.type === "video" ? (
            <p className="text-sm text-muted-foreground">Watch the story</p>
          ) : (
            cs.cta && (
              <Button variant="outline" className="rounded-full group">
                {cs.cta.label}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            )
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
    <section aria-labelledby="tech-cs-insights-title" className="py-12 md:py-16 bg-gradient-to-b from-background via-muted/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <header className="mb-6 md:mb-10">
          <h2 id="tech-cs-insights-title" className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Real outcomes from modern AI workflows
          </h2>
          <p className="mt-2 text-muted-foreground">
            Explore case studies and timely insights for independent healthcare practices.
          </p>
        </header>

        {/* Case Study Carousel */}
        <div aria-labelledby="case-studies-title" className="mb-8 md:mb-12">
          <h3 id="case-studies-title" className="sr-only">Case studies</h3>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: true })]}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {caseStudies.map((cs) => (
                <CarouselItem key={cs.id} className="basis-full">
                  <SlideContent cs={cs} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:inline-flex" />
            <CarouselNext className="hidden md:inline-flex" />
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
                  "h-2.5 rounded-full transition-all",
                  i === current ? "w-6 bg-primary" : "w-2.5 bg-muted-foreground/40 hover:bg-muted-foreground/60"
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
