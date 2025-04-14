
import type { Metadata } from "next";
import CaseStudyLandingPage from "@/components/CaseStudy/Section1";
import CaseStudies from "@/components/CaseStudy/Section2";

export const metadata: Metadata = {
  title: "S10.AI Case Study",
  description: "Find Answers And General Information Quickly About S10.AI.",
};

export default function Case() {
  return (
    <main>
      <CaseStudyLandingPage />
      <CaseStudies/>
    </main>
  );
}
