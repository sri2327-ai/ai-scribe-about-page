
import type { Metadata } from "next";
import CrushIntakeBanner from "@/components/CaseStudy/crush-intake-q-transforming-dr-strotman-practice/Section1";
import CrushIntakeContent from "@/components/CaseStudy/crush-intake-q-transforming-dr-strotman-practice/Section2";
export const metadata: Metadata = {
  title: "S10.AI Case Study",
  description: "Find Answers And General Information Quickly About S10.AI.",
};

export default function Case() {
  return (
    <main>
   <CrushIntakeBanner/>
   <CrushIntakeContent/>
    </main>
  );
}
