import React, { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockCategories = [
  { category_id: 1, categoryName: "General" },
  { category_id: 2, categoryName: "Product" },
  { category_id: 3, categoryName: "Support" },
  { category_id: 4, categoryName: "Pricing" },
  { category_id: 5, categoryName: "Integration" }
];

const mockFaqs = [
  { 
    category_id: 1, 
    support_title: "What is S10.AI?",
    short_description: "S10.AI is an advanced healthcare AI platform that helps clinicians streamline their workflow by automating documentation, providing medical insights, and enhancing patient care through cutting-edge artificial intelligence technology."
  },
  {
    category_id: 1,
    support_title: "How do I get started?",
    short_description: "Sign up for an account on our website and our team will guide you through the onboarding process. We'll help you set up the platform, train your staff, and integrate it with your existing systems for a seamless experience."
  },
  {
    category_id: 2,
    support_title: "What features are included?",
    short_description: "Our platform includes AI-powered documentation, clinical decision support, voice recognition, EHR integration, and customizable templates tailored to your specialty."
  },
  {
    category_id: 2,
    support_title: "Is there a mobile app?",
    short_description: "Yes, we offer mobile apps for iOS and Android devices that provide a seamless experience on the go."
  },
  {
    category_id: 3,
    support_title: "How can I contact support?",
    short_description: "You can reach our support team 24/7 via chat, email, or phone. We're always here to help you get the most out of our platform."
  },
  {
    category_id: 4,
    support_title: "What pricing plans are available?",
    short_description: "We offer flexible pricing plans designed to fit practices of all sizes. Contact our sales team for a customized quote that meets your needs."
  },
  {
    category_id: 5,
    support_title: "Which EHR systems do you integrate with?",
    short_description: "We integrate with all major EHR systems including Epic, Cerner, Athenahealth, and many more. Our team can help you set up custom integrations if needed."
  }
];

export default function Section1() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSearch, setShowSearch] = useState(false);

  const handleTabChange = (value: string) => {
    const categoryId = parseInt(value);
    setSelectedCategoryId(categoryId);
  };

  const filteredFaqs = mockFaqs.filter(faq => {
    const matchesCategory = faq.category_id === selectedCategoryId;
    const matchesSearch = searchQuery === "" || 
      faq.support_title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.short_description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 px-4 md:px-6 flex justify-center">
      <div className="w-full max-w-6xl bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg border-2 border-gray-200 p-6 md:p-8 shadow-lg">
        <div className="relative mb-8">
          {showSearch ? (
            <div className="relative w-full transition-all duration-300">
              <Input
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-10 pr-10 text-lg"
                placeholder="Search FAQs..."
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <button
                onClick={() => {
                  setShowSearch(false);
                  setSearchQuery("");
                }}
                className="absolute right-3 top-3.5"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">
                Frequently Asked Questions
              </h1>
              <button
                onClick={() => setShowSearch(true)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        <div className="overflow-x-auto pb-2">
          <Tabs defaultValue="1" onValueChange={handleTabChange} className="w-full">
            <TabsList className="w-full flex-wrap justify-start bg-transparent space-x-1 space-y-1">
              {mockCategories.map((category) => (
                <TabsTrigger
                  key={category.category_id}
                  value={category.category_id.toString()}
                  className="px-4 py-2 whitespace-nowrap"
                >
                  {category.categoryName}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-8 space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center p-8">
              <p className="text-gray-500">No FAQs found matching your search.</p>
            </div>
          ) : (
            <Accordion type="single" collapsible className="w-full">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={index.toString()}
                  className="bg-white mb-4 rounded-lg overflow-hidden border border-gray-200"
                >
                  <AccordionTrigger className="text-lg font-medium text-left py-4 px-6 hover:no-underline hover:bg-gray-50">
                    {faq.support_title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 px-6 pt-2 pb-4">
                    {faq.short_description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-6">Still have questions? We're here to help!</p>
          <Button 
            className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white hover:opacity-90 px-8 py-4 text-lg"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Our Support Team
          </Button>
        </div>
      </div>
    </section>
  );
}
