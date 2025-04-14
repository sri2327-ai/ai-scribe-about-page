
import type { Metadata } from "next";
import FamilyMedicineBanner from "@/components/CaseStudy/family-medicine-practitioner-in-canada-moved-to-s10-ai-from-gpt4/Section1";
import FamilyMedicineContent from "@/components/CaseStudy/family-medicine-practitioner-in-canada-moved-to-s10-ai-from-gpt4/Section2";
export const metadata: Metadata = {
  title: "S10.AI Case Study",
  description: "Find Answers And General Information Quickly About S10.AI.",
};

export default function Case() {
  return (
    <main>
   <FamilyMedicineBanner/>
   <FamilyMedicineContent/>
    </main>
  );
}
