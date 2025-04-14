
import type { Metadata } from "next";
import CrushsaveBanner from "@/components/CaseStudy/crush-saves-2-hours-daily-for-multi-provider-practices/Section1";
import CrushsaveContent from "@/components/CaseStudy/crush-saves-2-hours-daily-for-multi-provider-practices/Section2";
export const metadata: Metadata = {
  title: "S10.AI Case Study",
  description: "Find Answers And General Information Quickly About S10.AI.",
};

export default function Case() {
  return (
    <main>
   <CrushsaveBanner/>
   <CrushsaveContent/>
    </main>
  );
}
