
import type { Metadata } from "next";
import AccuracyinNordicBanner from "@/components/CaseStudy/100-accuracy-in-nordic-languages-fast-documentation/Section1";
import AccuracyinNordicContent from "@/components/CaseStudy/100-accuracy-in-nordic-languages-fast-documentation/Section2"
export const metadata: Metadata = {
  title: "S10.AI Case Study",
  description: "Find Answers And General Information Quickly About S10.AI.",
};

export default function Case() {
  return (
    <main>
    <AccuracyinNordicBanner/>
    <AccuracyinNordicContent/>
    </main>
  );
}
