import React from "react";
import { YouTubeFacade } from "@/components/ui/youtube-facade";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProviderInterviewSectionProps {
  variant?: 'light' | 'dark';
  title?: string;
  description?: string;
  subtitle?: string;
  videoId?: string;
}

/**
 * ProviderInterviewSection
 * Modern, responsive section with a video (left) and content (right).
 * Uses YouTubeFacade for click-to-load YouTube embeds.
 */
const ProviderInterviewSection: React.FC<ProviderInterviewSectionProps> = ({
  variant = 'light',
  title = 'Guided by Experience. Driven by Vision',
  description = 'Former IBM leader, John Reece brings decades of expertise in healthcare technology and AI innovation, guiding S10.AI’s medical scribes and intelligent agents to deliver accuracy, efficiency, and real-world impact.',
  subtitle = 'Board Advisor – John Reece',
  videoId = 'ysz5S6PUM-U',
}) => {
  return (
    <section aria-labelledby="provider-interview-title" className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto py-10 md:py-14">
      <article
        className={`relative overflow-hidden rounded-3xl shadow-xl supports-[backdrop-filter]:backdrop-blur-xl ${
          variant === 'dark' ? 'bg-black/30' : 'bg-gradient-to-br from-background to-card/90'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Video */}
          <div id="provider-interview-video" className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-auto md:h-full">
            <div className="h-full w-full">
              <YouTubeFacade
                videoId={videoId}
                title="Board Advisor Interview – John Reece"
                thumbnailQuality="sddefault"
                posterUrl="/lovable-uploads/57586e42-0a19-4af9-9ec2-b9a08f865298.png"
                playPosition="bottom-left"
                className="h-full w-full"
                imageClassName="object-cover object-center md:object-top"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-center gap-4 ${variant === 'dark' ? 'text-white' : ''}`}>
            <header>
              <h2 id="provider-interview-title" className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                {title}
              </h2>
            </header>

            <p className={`text-base md:text-lg leading-relaxed ${variant === 'dark' ? 'text-white/80' : 'text-muted-foreground'}`}>
              {description}
            </p>

            <p className={`text-sm ${variant === 'dark' ? 'text-white/60' : 'text-muted-foreground'}`}>{subtitle}</p>

            {/* Actions */}
            <div className="mt-2 flex items-center gap-3">
              <Button
                className="bg-gradient-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary/60 text-primary-foreground shadow-md group"
                onClick={() => {
                  const el = document.getElementById('provider-interview-video');
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Watch Interview
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProviderInterviewSection;
