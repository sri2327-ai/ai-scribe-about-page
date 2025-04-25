
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OptimizedImage from "@/components/ui/optimized-image";
import { useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

// Mock data - replace with actual API calls in production
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
  },
  {
    id: 3,
    title: "AI Is Revolutionizing Medical Practice",
    image: "/Real-Life-Scenario.webp",
    url: "/blog/ai-revolution-in-medicine"
  },
  {
    id: 4,
    title: "Medical Dictation and Scribing Explained",
    image: "/placeholder.svg",
    url: "/blog/medical-dictation-explained"
  }
];

const mockCategories = [
  { id: 1, name: "All" },
  { id: 2, name: "Technology" },
  { id: 3, name: "Healthcare" },
  { id: 4, name: "AI" },
  { id: 5, name: "Medical Practice" }
];

export const BlogCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();
  
  const itemsPerPage = 6;
  const filteredBlogs = selectedCategory === "All" 
    ? mockBlogs 
    : mockBlogs.filter(blog => blog.title.includes(selectedCategory));
  
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  
  // Calculate page range for pagination
  const getPageRange = () => {
    const range = [];
    const maxVisiblePages = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }
    return range;
  };
  
  // Paginate blogs
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const handleBlogClick = (url: string) => {
    navigate(url);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="w-full bg-gradient-to-b from-white to-[#A5CCF3] rounded-lg border-2 border-gray-200 p-4 md:p-6 shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-8">Blog</h1>

          <div className="mb-8 overflow-x-auto">
            <Tabs defaultValue="All" className="w-full">
              <TabsList className="w-full flex-wrap justify-start p-1">
                {mockCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.name}
                    onClick={() => {
                      setSelectedCategory(category.name);
                      setCurrentPage(1);
                    }}
                    className="px-4 py-2 whitespace-nowrap"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedBlogs.map((blog) => (
              <Card 
                key={blog.id}
                className="overflow-hidden hover:-translate-y-1 transition-transform duration-200 cursor-pointer bg-white"
                onClick={() => handleBlogClick(blog.url)}
              >
                <div className="h-[200px] w-full relative">
                  <OptimizedImage
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                    <Clock className="h-4 w-4" />
                    <span>8 min read</span>
                  </div>
                  <h3 className="text-lg font-semibold line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-600 mt-2 line-clamp-2">
                    Medical documentation has long been a challenge for healthcare providers...
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) handlePageChange(currentPage - 1);
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>

                {getPageRange().map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(page);
                      }}
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {totalPages > getPageRange()[getPageRange().length - 1] && (
                  <>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(totalPages);
                        }}
                      >
                        {totalPages}
                      </PaginationLink>
                    </PaginationItem>
                  </>
                )}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) handlePageChange(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </section>
  );
};
