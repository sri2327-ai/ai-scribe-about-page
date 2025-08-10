import React from "react";
import { YouTubeFacade } from "@/components/ui/youtube-facade";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
      <article className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-background to-card/90 supports-[backdrop-filter]:backdrop-blur-xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Video */}
          <div id="provider-interview-video" className="relative aspect-[16/9] md:aspect-auto md:h-full">
            <div className="h-full w-full">
              <YouTubeFacade
                videoId={VIDEO_ID}
                title="Board Advisor Interview – John Reece"
                thumbnailQuality="sddefault"
                posterUrl="/lovable-uploads/57586e42-0a19-4af9-9ec2-b9a08f865298.png"
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

            <p className="text-sm text-muted-foreground">Board Advisor – John Reece</p>

            {/* Actions */}
            <div className="mt-2 flex items-center gap-3">
              <Button
                className="bg-gradient-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary/60 text-primary-foreground shadow-md group"
                onClick={() => {
                  const el = document.getElementById("provider-interview-video");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
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
