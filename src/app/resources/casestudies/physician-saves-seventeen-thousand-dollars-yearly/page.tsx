
import type { Metadata } from "next";
import SeventeenThousandBanner from "@/components/CaseStudy/physician-saves-seventeen-thousand-dollars-yearly/Section1";
import SeventeenThousandContent from "@/components/CaseStudy/physician-saves-seventeen-thousand-dollars-yearly/Section2";
export const metadata: Metadata = {
  title: "S10.AI Case Study",
  description: "Find Answers And General Information Quickly About S10.AI.",
};

export default function Case() {
  return (
    <main>
   <SeventeenThousandBanner/>
   <SeventeenThousandContent/>
    </main>
  );
}
