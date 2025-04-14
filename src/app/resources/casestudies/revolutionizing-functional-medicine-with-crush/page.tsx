
import type { Metadata } from "next";
import RevolutionizingBanner from "@/components/CaseStudy/revolutionizing-functional-medicine-with-crush/Section1";
import RevolutionizingContent from "@/components/CaseStudy/revolutionizing-functional-medicine-with-crush/Section2";
export const metadata: Metadata = {
  title: "S10.AI Case Study",
  description: "Find Answers And General Information Quickly About S10.AI.",
};

export default function Case() {
  return (
    <main>
   <RevolutionizingBanner/>
   <RevolutionizingContent/>
    </main>
  );
}
