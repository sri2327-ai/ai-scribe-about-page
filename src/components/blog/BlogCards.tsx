
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const mockBlogs = [
  {
    id: 1,
    title: "Virtual Medical Scribe Robots",
    image: "/ImprovePatientCare.webp",
    url: "/blog/virtual-medical-scribe"
  },
  {
    id: 2,
    title: "AI Medical Scribe Company",
    image: "/Psychotherapy-Documentation.png",
    url: "/blog/ai-medical-scribe"
  }
];

const mockCategories = [
  { id: 1, name: "All" },
  { id: 2, name: "Technology" },
  { id: 3, name: "Healthcare" }
];

export const BlogCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="w-full bg-gradient-to-b from-white to-[#A5CCF3] rounded-lg border-2 border-gray-200 p-6 shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-8">Blog</h1>

          <Tabs defaultValue="All" className="w-full mb-8">
            <TabsList className="w-full justify-start">
              {mockCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockBlogs.map((blog) => (
              <Card 
                key={blog.id}
                className="overflow-hidden hover:-translate-y-1 transition-transform duration-200 cursor-pointer bg-white"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                </div>
              </Card>
            ))}
          </div>

          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};
