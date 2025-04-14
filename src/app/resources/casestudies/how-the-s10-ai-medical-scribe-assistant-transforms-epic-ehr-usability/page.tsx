
import type { Metadata } from "next";
import EPICehrUsabilityBanner from "@/components/CaseStudy/how-the-s10-ai-medical-scribe-assistant-transforms-epic-ehr-usability/Section1";
import EPICehrUsabilityContent from "@/components/CaseStudy/how-the-s10-ai-medical-scribe-assistant-transforms-epic-ehr-usability/Section2";
export const metadata: Metadata = {
  title: "S10.AI Case Study",
  description: "Find Answers And General Information Quickly About S10.AI.",
};

export default function Case() {
  return (
    <main>
   <EPICehrUsabilityBanner/>
   <EPICehrUsabilityContent/>
    </main>
  );
}
