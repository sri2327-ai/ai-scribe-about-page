
import type { Metadata } from "next";
import FasterDocumnetBanner from "@/components/CaseStudy/80-faster-documentation-with-osmind-ehr-integration/Section1";
import FasterDocumnetContent from "@/components/CaseStudy/80-faster-documentation-with-osmind-ehr-integration/Section2";
export const metadata: Metadata = {
  title: "S10.AI Case Study",
  description: "Find Answers And General Information Quickly About S10.AI.",
};

export default function Case() {
  return (
    <main>
   <FasterDocumnetBanner/>
   <FasterDocumnetContent/>
    </main>
  );
}
