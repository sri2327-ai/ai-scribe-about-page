
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, X as CloseIcon, ChevronDown } from "lucide-react";

const mockCategories = [
  { category_id: 1, categoryName: "General" },
  { category_id: 2, categoryName: "Product" },
  { category_id: 3, categoryName: "Support" }
];

const mockFaqs = [
  { 
    category_id: 1, 
    support_title: "What is S10.AI?",
    short_description: "S10.AI is an advanced healthcare AI platform that helps clinicians streamline their workflow."
  },
  {
    category_id: 1,
    support_title: "How do I get started?",
    short_description: "Sign up for an account and our team will guide you through the onboarding process."
  }
];

export default function Section1() {
  const [tabValue, setTabValue] = useState(0);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [categories] = useState(mockCategories);
  const [faqs] = useState(mockFaqs);

  const handleTabChange = (value: string) => {
    const newValue = parseInt(value);
    setTabValue(newValue);
    const selectedCategory = categories[newValue];
    setSelectedCategoryId(selectedCategory?.category_id);
  };

  const handleToggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="py-12 px-4 md:px-6 flex justify-center">
      <div className="w-full max-w-4xl bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg border-2 border-gray-200 p-6 md:p-8 shadow-lg">
        <div className="relative mb-8">
          {showSearch ? (
            <div className="relative w-full transition-all duration-300">
              <Input
                autoFocus
                className="w-full h-12 pl-10 text-lg"
                placeholder="Looking for something?"
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <button
                onClick={() => setShowSearch(false)}
                className="absolute right-3 top-3.5"
              >
                <CloseIcon className="h-5 w-5 text-gray-400" />
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

        <Tabs defaultValue="0" className="w-full">
          <TabsList className="w-full justify-start mb-6 bg-transparent">
            {categories.map((category, index) => (
              <TabsTrigger
                key={category.category_id}
                value={index.toString()}
                onClick={() => handleTabChange(index.toString())}
                className="px-4 py-2"
              >
                {category.categoryName}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-b border-gray-200 bg-transparent shadow-none hover:bg-white/50 transition-colors cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.support_title}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 transform transition-transform ${
                      expanded === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {expanded === index && (
                  <p className="mt-3 text-gray-600">{faq.short_description}</p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
