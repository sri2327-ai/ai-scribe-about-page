
import type { Metadata } from "next";
import ImprovingPatinetCareBanner from "@/components/CaseStudy/improving-patient-care-with-s10-ai-ai-medical-scribe/Section1";
import ImprovingPatinetCareContent from "@/components/CaseStudy/improving-patient-care-with-s10-ai-ai-medical-scribe/Section2";
export const metadata: Metadata = {
  title: "S10.AI Case Study",
  description: "Find Answers And General Information Quickly About S10.AI.",
};

export default function Case() {
  return (
    <main>
   <ImprovingPatinetCareBanner/>
   <ImprovingPatinetCareContent/>
    </main>
  );
}
