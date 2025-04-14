import type { Metadata } from "next";
import BlogIndividualBanner from "@/components/Blog/medical-scribe-robots-and-digitalization-of-health-records/Section1";
import BlogIndvualContent from "@/components/Blog/medical-scribe-robots-and-digitalization-of-health-records/Section2";
import RelatedBlogs from "@/components/Blog/medical-scribe-robots-and-digitalization-of-health-records/Section3";
export const metadata: Metadata = {
  title: "S10.AI Blog",
  description: "Find Answers And General Information Quickly About S10.AI.",
};

export default function Blog() {
  return (
    <main>
     <BlogIndividualBanner/>
     <BlogIndvualContent/>
     <RelatedBlogs/>
    </main>
  );
}
