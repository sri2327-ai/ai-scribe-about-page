import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MoreHorizontal, Check, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import DarkAnimatedHeader from '@/components/landing/DarkAnimatedHeader';
import GradientBarsBackground from '@/components/ui/gradient-bars-background';

interface Resource {
  id: string;
  category: string;
  title: string;
  description: string;
  img: string;
  actionText: string;
  pdfUrl?: string;
}

interface FilterOption {
  key: string;
  label: string;
}

interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

const ResourceLibrary = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showDetailView, setShowDetailView] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [resources, setResources] = useState<Resource[]>([]);
  const [filters, setFilters] = useState<FilterOption[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [pagination, setPagination] = useState<PaginationData>({
    currentPage: 1,
    totalPages: 67,
    totalItems: 670,
    itemsPerPage: 10
  });
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    specialty: ''
  });
  const [formMessage, setFormMessage] = useState('');
  const [downloadCount, setDownloadCount] = useState(12547);
  const { toast } = useToast();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Animate download count
  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Simulate API calls
  const fetchFilters = async () => {
    // Mock API call for filters
    const mockFilters = [
      { key: 'all', label: 'All Types' },
      { key: 'infographic', label: 'Infographic' },
      { key: 'guide', label: 'Guide' },
      { key: 'report', label: 'Report' },
      { key: 'workbook', label: 'Workbook' },
      { key: 'checklist', label: 'Checklist' },
      { key: 'template', label: 'Template' }
    ];
    setFilters(mockFilters);
  };

  const fetchResources = async (filter: string, page: number) => {
    setLoading(true);
    try {
      // Mock API call for resources
      const mockResources: Resource[] = [
        {
          id: '1',
          category: 'infographic',
          title: 'Understanding Data Visualization',
          description: 'A quick visual guide to common data visualization techniques and their best uses.',
          img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=338&fit=crop',
          actionText: 'View Infographic',
          pdfUrl: '/mock-infographic.pdf'
        },
        {
          id: '2',
          category: 'guide',
          title: 'Navigating HIPAA Compliance with S10.ai',
          description: 'A practical guide to ensuring your practice meets all HIPAA requirements using S10.ai\'s secure platform.',
          img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=338&fit=crop',
          actionText: 'Read Guide',
          pdfUrl: '/mock-guide.pdf'
        },
        {
          id: '3',
          category: 'report',
          title: 'The State of Telehealth in 2025',
          description: 'An in-depth analysis of telehealth adoption, challenges, and future outlook based on recent data.',
          img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=338&fit=crop',
          actionText: 'Read Report',
          pdfUrl: '/mock-report.pdf'
        },
        {
          id: '4',
          category: 'workbook',
          title: 'Implementing S10.ai: A Step-by-Step Workbook',
          description: 'Interactive exercises and checklists to guide your S10.ai platform integration smoothly.',
          img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=338&fit=crop',
          actionText: 'Download Workbook',
          pdfUrl: '/mock-workbook.pdf'
        },
        {
          id: '5',
          category: 'checklist',
          title: 'Year-End Financial Checklist for Practices',
          description: 'Ensure your medical practice is financially prepared with this comprehensive year-end checklist.',
          img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=338&fit=crop',
          actionText: 'Get Checklist',
          pdfUrl: '/mock-checklist.pdf'
        },
        {
          id: '6',
          category: 'template',
          title: 'Patient Onboarding Template',
          description: 'Streamline your patient intake process with our comprehensive onboarding template.',
          img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=338&fit=crop',
          actionText: 'Download Template',
          pdfUrl: '/mock-template.pdf'
        },
        {
          id: '7',
          category: 'guide',
          title: 'Effective Patient Communication',
          description: 'Strategies and tools for enhancing communication with your patients for better outcomes.',
          img: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=338&fit=crop',
          actionText: 'Read Guide',
          pdfUrl: '/mock-communication-guide.pdf'
        },
        {
          id: '8',
          category: 'report',
          title: 'AI Impact on Medical Diagnostics',
          description: 'A comprehensive report on how AI is transforming diagnostic accuracy and speed.',
          img: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=338&fit=crop',
          actionText: 'Read Report',
          pdfUrl: '/mock-diagnostics-report.pdf'
        }
      ];

      // Filter resources based on active filter
      const filteredData = filter === 'all' 
        ? mockResources 
        : mockResources.filter(resource => resource.category === filter);

      setResources(filteredData);
      
      // Update pagination based on filtered results
      setPagination({
        currentPage: page,
        totalPages: Math.ceil(filteredData.length / 8) || 1,
        totalItems: filteredData.length,
        itemsPerPage: 8
      });
    } catch (error) {
      console.error('Error fetching resources:', error);
      toast({
        title: "Error",
        description: "Failed to load resources. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilters();
    fetchResources(activeFilter, 1);
  }, []);

  useEffect(() => {
    fetchResources(activeFilter, 1);
    setShowMobileFilters(false); // Close mobile filters when filter changes
  }, [activeFilter]);

  const getCategoryColor = (category: string) => {
    const colors = {
      infographic: 'text-[#387E89] bg-[#387E89]/10',
      guide: 'text-[#143151] bg-[#143151]/10',
      report: 'text-[#5192AE] bg-[#5192AE]/10',
      workbook: 'text-[#A5CCF3] bg-[#A5CCF3]/20',
      checklist: 'text-pink-600 bg-pink-50',
      template: 'text-purple-600 bg-purple-50'
    };
    return colors[category as keyof typeof colors] || 'text-gray-600 bg-gray-100';
  };

  const getCategoryActionColor = (category: string) => {
    const colors = {
      infographic: 'text-[#387E89] group-hover:text-[#2c6269]',
      guide: 'text-[#143151] group-hover:text-[#0d1f31]',
      report: 'text-[#5192AE] group-hover:text-[#3d6e83]',
      workbook: 'text-[#A5CCF3] group-hover:text-[#7ba8e8]',
      checklist: 'text-pink-600 group-hover:text-pink-700',
      template: 'text-purple-600 group-hover:text-purple-700'
    };
    return colors[category as keyof typeof colors] || 'text-gray-600 group-hover:text-gray-700';
  };

  const handleResourceClick = (resource: Resource) => {
    setSelectedResource(resource);
    setShowDetailView(true);
    window.scrollTo(0, 0);
  };

  const handleDownload = async (resource: Resource) => {
    try {
      setLoading(true);
      
      // Simulate download process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real implementation, you would initiate the actual download here
      // window.open(resource.pdfUrl, '_blank');
      
      toast({
        title: "Download Successful!",
        description: `${resource.title} has been downloaded successfully.`,
        variant: "default",
      });
      
      // Close the detail view after successful download
      setShowDetailView(false);
      setSelectedResource(null);
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error downloading the resource. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedResource) {
      handleDownload(selectedResource);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pagination.totalPages) {
      fetchResources(activeFilter, page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollFilters = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 120;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const renderPaginationButton = (page: number | string, isActive = false, onClick?: () => void) => (
    <button
      key={page}
      onClick={onClick}
      disabled={!onClick}
      className={`
        min-w-[36px] sm:min-w-[40px] h-[36px] sm:h-[40px] px-2 sm:px-3 rounded-lg border text-sm font-medium transition-all duration-200
        ${isActive 
          ? 'bg-black text-white border-black' 
          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
        }
        ${!onClick ? 'cursor-default' : 'cursor-pointer'}
      `}
    >
      {page}
    </button>
  );

  const renderPagination = () => {
    const { currentPage, totalPages } = pagination;
    
    if (totalPages <= 1) return null;
    
    const pages = [];
    const isMobile = window.innerWidth < 640;
    const maxVisiblePages = isMobile ? 3 : 7;

    // Mobile pagination - show fewer pages
    if (isMobile) {
      // Always show first page
      pages.push(renderPaginationButton(1, currentPage === 1, () => handlePageChange(1)));

      if (totalPages > 2) {
        if (currentPage > 2) {
          pages.push(renderPaginationButton('...'));
        }

        // Show current page if it's not first or last
        if (currentPage > 1 && currentPage < totalPages) {
          pages.push(renderPaginationButton(currentPage, true));
        }

        if (currentPage < totalPages - 1) {
          pages.push(renderPaginationButton('...'));
        }

        // Always show last page
        pages.push(renderPaginationButton(totalPages, currentPage === totalPages, () => handlePageChange(totalPages)));
      }
    } else {
      // Desktop pagination - show more pages
      pages.push(renderPaginationButton(1, currentPage === 1, () => handlePageChange(1)));

      const startPage = Math.max(2, currentPage - 2);
      const endPage = Math.min(totalPages - 1, currentPage + 2);

      if (startPage > 2) {
        pages.push(renderPaginationButton('...'));
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(renderPaginationButton(i, currentPage === i, () => handlePageChange(i)));
      }

      if (endPage < totalPages - 1) {
        pages.push(renderPaginationButton('...'));
      }

      if (totalPages > 1) {
        pages.push(renderPaginationButton(totalPages, currentPage === totalPages, () => handlePageChange(totalPages)));
      }
    }

    return (
      <div className="flex items-center justify-center gap-1 sm:gap-2 mt-12 sm:mt-16 px-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex items-center gap-1">
          {pages}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    );
  };

  if (showDetailView && selectedResource) {
    return (
      <>
        <DarkAnimatedHeader />
        <div className="min-h-screen bg-white">
          <Helmet>
            <title>{selectedResource.title} - S10.AI Resource Library</title>
            <meta name="description" content={selectedResource.description} />
          </Helmet>

          <section className="bg-white py-8 sm:py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                <div className="lg:w-[55%] text-gray-800">
                  <span className={`text-xs sm:text-sm font-semibold uppercase mb-3 block tracking-wider ${getCategoryColor(selectedResource.category).split(' ')[0]}`}>
                    {selectedResource.category}
                  </span>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
                    {selectedResource.title}
                  </h1>
                  <div className="prose prose-sm sm:prose-lg text-gray-700 max-w-none">
                    <p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {selectedResource.description}
                    </p>
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base list-none p-0 mb-4 sm:mb-6">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#387E89] mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-1" />
                        <span className="text-sm sm:text-base">Streamline your healthcare workflows with AI-powered solutions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#387E89] mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-1" />
                        <span className="text-sm sm:text-base">Get powerful insights and reporting to quantify your ROI</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#387E89] mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-1" />
                        <span className="text-sm sm:text-base">Enjoy seamless integrations to drive efficiency</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:w-[45%]">
                  <Card className="p-4 sm:p-6 lg:p-10 bg-gradient-to-br from-gray-50 to-white shadow-xl border border-gray-200">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 tracking-tight">Complete the form</h2>
                    <p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8">to get your resources and unlock insights.</p>
                    
                    <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
                      <div>
                        <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-1.5">Full name*</Label>
                        <Input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          placeholder="e.g., Jane Doe"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#387E89] focus:border-transparent transition-colors placeholder-gray-400"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="companyName" className="text-sm font-medium text-gray-700 mb-1.5">Company name*</Label>
                        <Input
                          type="text"
                          id="companyName"
                          name="companyName"
                          required
                          placeholder="e.g., S10 Healthcare"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#387E89] focus:border-transparent transition-colors placeholder-gray-400"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1.5">Email*</Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="e.g., jane.doe@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#387E89] focus:border-transparent transition-colors placeholder-gray-400"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1.5">Phone*</Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="e.g., (555) 123-4567"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#387E89] focus:border-transparent transition-colors placeholder-gray-400"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="specialty" className="text-sm font-medium text-gray-700 mb-1.5">Specialty*</Label>
                        <select
                          id="specialty"
                          name="specialty"
                          required
                          value={formData.specialty}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#387E89] focus:border-transparent transition-colors"
                        >
                          <option value="" disabled>Select Specialty</option>
                          <option value="cardiology">Cardiology</option>
                          <option value="dermatology">Dermatology</option>
                          <option value="pediatrics">Pediatrics</option>
                          <option value="general">General Practice</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div className="pt-2 sm:pt-3">
                        <Button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white font-semibold h-10 sm:h-11 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                          {loading ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Downloading...
                            </>
                          ) : (
                            <>
                              <Download className="w-4 h-4" />
                              Download Resource
                            </>
                          )}
                        </Button>
                      </div>
                      
                      <div className="text-xs text-gray-500 text-center">
                        By submitting, I acknowledge S10.ai may use my information as per its{' '}
                        <Link to="#" className="text-[#387E89] hover:underline">Privacy Policy</Link>.
                      </div>
                    </form>
                    
                    {formMessage && (
                      <div className="mt-4 text-sm text-[#387E89] font-medium text-center">
                        {formMessage}
                      </div>
                    )}
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  return (
    <>
      <DarkAnimatedHeader />
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Resource Library - Healthcare Guides, Templates & Tools | S10.AI</title>
          <meta name="description" content="Access our comprehensive collection of healthcare guides, templates, checklists, and workbooks to optimize your practice with AI-powered solutions." />
          <link rel="canonical" href="https://s10.ai/resource-library" />
        </Helmet>

        {/* Hero Section with Gradient Background */}
        <section className="relative bg-white py-12 sm:py-16 lg:py-20 border-b border-gray-200 overflow-hidden">
          <div className="absolute inset-0 bg-white"></div>
          <GradientBarsBackground />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Animated Hero Pill */}
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-[#387E89]/10 to-[#143151]/10 border border-[#387E89]/20 rounded-full text-xs sm:text-sm text-[#143151] font-medium mb-4 sm:mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="transition-all duration-1000">
                {downloadCount.toLocaleString()}+ healthcare professionals have downloaded our resources
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-gray-900 leading-tight">
              Resource Library
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Access our comprehensive collection of healthcare guides, templates, checklists, and workbooks designed to optimize your practice with AI-powered solutions.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-6 sm:py-8 bg-white sticky top-16 sm:top-20 z-30 shadow-sm border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-5">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 text-left mb-3 sm:mb-0 tracking-tight">
                All Resources
              </h2>
              {loading && (
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
                  Loading...
                </div>
              )}
            </div>
            
            {/* Mobile and Desktop Filters - Same Design */}
            <div className="flex items-center w-full">
              {/* Left Arrow - Hidden on desktop when not needed */}
              <button
                onClick={() => scrollFilters('left')}
                className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 transition-colors sm:hidden"
                aria-label="Scroll filters left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Filters Container */}
              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide gap-2 sm:gap-3 flex-1 sm:flex-none"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                      activeFilter === filter.key
                        ? 'text-white bg-[#387E89] shadow-md'
                        : 'text-gray-600 bg-gray-100 hover:bg-gray-200 hover:text-[#387E89]'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
              
              {/* Right Arrow - Hidden on desktop when not needed */}
              <button
                onClick={() => scrollFilters('right')}
                className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 transition-colors sm:hidden"
                aria-label="Scroll filters right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Resource Grid */}
        <main className="bg-white container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {Array.from({ length: 8 }).map((_, index) => (
                <Card key={index} className="animate-pulse">
                  <div className="aspect-video bg-gray-200 rounded-t-xl" />
                  <div className="p-4 sm:p-5 space-y-3">
                    <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/3" />
                    <div className="h-4 sm:h-5 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 sm:h-4 bg-gray-200 rounded w-full" />
                    <div className="h-3 sm:h-4 bg-gray-200 rounded w-2/3" />
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  onClick={() => handleResourceClick(resource)}
                  className="group cursor-pointer"
                >
                  <Card className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-200 hover:border-[#387E89] transform hover:-translate-y-1">
                    <div className="aspect-video bg-slate-100 overflow-hidden">
                      <img
                        src={resource.img}
                        alt={resource.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&h=338&fit=crop';
                        }}
                      />
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col flex-grow">
                      <span className={`text-xs font-semibold uppercase mb-2 tracking-wider px-2 py-1 rounded-full ${getCategoryColor(resource.category)}`}>
                        {resource.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 leading-tight group-hover:text-[#387E89] transition-colors line-clamp-2">
                        {resource.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-4 flex-grow leading-relaxed line-clamp-3">
                        {resource.description}
                      </p>
                      <span className={`inline-flex items-center text-xs sm:text-sm font-medium group-hover:gap-1.5 transition-all duration-200 self-start mt-auto ${getCategoryActionColor(resource.category)}`}>
                        {resource.actionText}
                        <ChevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          )}

          {/* Modern Pagination */}
          {resources.length > 0 && !loading && renderPagination()}
        </main>
      </div>
    </>
  );
};

export default ResourceLibrary;
