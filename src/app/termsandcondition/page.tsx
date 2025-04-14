import TermsAndCondition from "@/components/Terms/Section1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S10.AI Terms And Conditions",
  description: "Schedule A Demo",
};

export default function Terms() {
  return (
    <main>
      <TermsAndCondition />
    </main>
  );
}
