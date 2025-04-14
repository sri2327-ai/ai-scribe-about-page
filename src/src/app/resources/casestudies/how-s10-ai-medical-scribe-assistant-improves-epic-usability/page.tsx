
import type { Metadata } from "next";
import EPICUsabilityBanner from "@/components/CaseStudy/how-s10-ai-medical-scribe-assistant-improves-epic-usability/Section1";
import EPICUsabilityContent from "@/components/CaseStudy/how-s10-ai-medical-scribe-assistant-improves-epic-usability/Section2";
export const metadata: Metadata = {
  title: "S10.AI Case Study",
  description: "Find Answers And General Information Quickly About S10.AI.",
};

export default function Case() {
  return (
    <main>
   <EPICUsabilityBanner/>
   <EPICUsabilityContent/>
    </main>
  );
}
