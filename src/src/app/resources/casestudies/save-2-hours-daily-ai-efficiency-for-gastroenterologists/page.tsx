
import type { Metadata } from "next";
import Save2HoursDaliyBanner from "@/components/CaseStudy/save-2-hours-daily-ai-efficiency-for-gastroenterologists/Section1";
import Save2HoursDaliyContent from "@/components/CaseStudy/save-2-hours-daily-ai-efficiency-for-gastroenterologists/Section2";
export const metadata: Metadata = {
  title: "S10.AI Case Study",
  description: "Find Answers And General Information Quickly About S10.AI.",
};

export default function Case() {
  return (
    <main>
   <Save2HoursDaliyBanner/>
   <Save2HoursDaliyContent/>
    </main>
  );
}
