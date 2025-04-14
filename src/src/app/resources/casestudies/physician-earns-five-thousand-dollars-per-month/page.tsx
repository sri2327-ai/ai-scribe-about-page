
import type { Metadata } from "next";
import FiveThousandBanner from "@/components/CaseStudy/physician-earns-five-thousand-dollars-per-month/Section1";
import FiveThousandContent from "@/components/CaseStudy/physician-earns-five-thousand-dollars-per-month/Section2";
export const metadata: Metadata = {
  title: "S10.AI Case Study",
  description: "Find Answers And General Information Quickly About S10.AI.",
};

export default function Case() {
  return (
    <main>
   <FiveThousandBanner/>
   <FiveThousandContent/>
    </main>
  );
}
