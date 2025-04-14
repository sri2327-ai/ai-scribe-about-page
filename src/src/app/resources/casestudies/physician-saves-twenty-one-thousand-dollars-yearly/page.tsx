
import type { Metadata } from "next";
import TwentyoneThousandBanner from "@/components/CaseStudy/physician-saves-twenty-one-thousand-dollars-yearly/Section1";
import TwentyoneThousandContent from "@/components/CaseStudy/physician-saves-twenty-one-thousand-dollars-yearly/Section2";
export const metadata: Metadata = {
  title: "S10.AI Case Study",
  description: "Find Answers And General Information Quickly About S10.AI.",
};

export default function Case() {
  return (
    <main>
   <TwentyoneThousandBanner/>
   <TwentyoneThousandContent/>
    </main>
  );
}
