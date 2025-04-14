import type { Metadata } from "next";
import BlogCards from "@/components/Blog/Section";


export const metadata: Metadata = {
  title: "S10.AI Blog",
  description: "Find Answers And General Information Quickly About S10.AI.",
};

export default function Blog() {
  return (
    <main>
     <BlogCards/>
    </main>
  );
}
