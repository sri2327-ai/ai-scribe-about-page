import React from "react";
import { YouTubeFacade } from "@/components/ui/youtube-facade";
import { Button } from "@/components/ui/button";
import { Play, ArrowUpRight } from "lucide-react";

/**
 * ProviderInterviewSection
 * A modern, responsive card showcasing a video on the left and content on the right.
 * Uses YouTubeFacade for lightweight embed until user clicks play.
 */
const ProviderInterviewSection: React.FC = () => {
  // TODO: replace with the real interview video ID
  const VIDEO_ID = "ysz5S6PUM-U"; // placeholder sample video ID

  return (
    <section aria-labelledby="provider-interview-title" className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto py-10 md:py-14">
      <article className="bg-card text-foreground border border-border rounded-3xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Video */}
          <div className="relative aspect-[16/9] md:aspect-auto md:h-full">
            <div className="h-full w-full">
              <YouTubeFacade
                videoId={VIDEO_ID}
                title="Board Advisor Interview – John Reece"
                thumbnailQuality="sddefault"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center gap-4">
            <header>
              <h2 id="provider-interview-title" className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Guided by Experience. Driven by Vision
              </h2>
            </header>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Former IBM leader, John Reece brings decades of expertise in healthcare technology and AI innovation, guiding S10.AI’s medical scribes and intelligent agents to deliver accuracy, efficiency, and real-world impact.
            </p>

            {/* Advisor details */}
            <div className="flex items-center gap-4">
              <img
                src="/lovable-uploads/e821a788-6061-4aa5-b3c1-2fed12387b14.png"
                alt="Board Advisor John Reece portrait"
                loading="lazy"
                className="h-12 w-12 rounded-full ring-2 ring-border object-cover"
              />
              <div className="text-sm">
                <div className="font-semibold">Board Advisor – John Reece</div>
                <div className="text-muted-foreground">Watch Interview</div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-2 flex items-center gap-3">
              <Button
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-md"
                onClick={() => {
                  // Scroll to the video area so users can click play
                  const el = document.getElementById("provider-interview-title");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Interview
              </Button>

              <a
                href="#provider-interview-title"
                className="story-link inline-flex items-center gap-1 text-sm text-primary"
              >
                Learn more <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProviderInterviewSection;
