import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MoreHorizontal, ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import DarkAnimatedHeader from '@/components/landing/DarkAnimatedHeader';
import GradientBarsBackground from '@/components/ui/gradient-bars-background';

interface Resource {
  id: string;
  category: 'infographic' | 'guide' | 'report' | 'workbook' | 'checklist';
  title: string;
  description: string;
  img: string;
  actionText: string;
}

const ResourceLibrary = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showDetailView, setShowDetailView] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    specialty: ''
  });
  const [formMessage, setFormMessage] = useState('');

  // Add keyframe animation for pulse effect
  useEffect(() => {
    const pulseBarKeyframes = `
      @keyframes pulseBar {
        0% { opacity: 0.6; }
        100% { opacity: 1; }
      }
    `;
    
    const style = document.createElement('style');
    style.textContent = pulseBarKeyframes;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const resources: Resource[] = [
    {
      id: '1',
      category: 'infographic',
      title: 'Understanding Data Visualization',
      description: 'A quick visual guide to common data visualization techniques and their best uses.',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=338&fit=crop',
      actionText: 'View Infographic'
    },
    {
      id: '2',
      category: 'guide',
      title: 'Navigating HIPAA Compliance with S10.ai',
      description: 'A practical guide to ensuring your practice meets all HIPAA requirements using S10.ai\'s secure platform.',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=338&fit=crop',
      actionText: 'Read Guide'
    },
    {
      id: '3',
      category: 'report',
      title: 'The State of Telehealth in 2025',
      description: 'An in-depth analysis of telehealth adoption, challenges, and future outlook based on recent data.',
      img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=338&fit=crop',
      actionText: 'Read Report'
    },
    {
      id: '4',
      category: 'workbook',
      title: 'Implementing S10.ai: A Step-by-Step Workbook',
      description: 'Interactive exercises and checklists to guide your S10.ai platform integration smoothly.',
      img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=338&fit=crop',
      actionText: 'Download Workbook'
    },
    {
      id: '5',
      category: 'checklist',
      title: 'Year-End Financial Checklist for Practices',
      description: 'Ensure your medical practice is financially prepared with this comprehensive year-end checklist.',
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=338&fit=crop',
      actionText: 'Get Checklist'
    },
    {
      id: '6',
      category: 'infographic',
      title: 'AI in Daily Life',
      description: 'Explore how AI is subtly integrated into our everyday tools and services.',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=338&fit=crop',
      actionText: 'View Infographic'
    },
    {
      id: '7',
      category: 'guide',
      title: 'Effective Patient Communication',
      description: 'Strategies and tools for enhancing communication with your patients for better outcomes.',
      img: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=338&fit=crop',
      actionText: 'Read Guide'
    },
    {
      id: '8',
      category: 'report',
      title: 'AI Impact on Medical Diagnostics',
      description: 'A comprehensive report on how AI is transforming diagnostic accuracy and speed.',
      img: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=338&fit=crop',
      actionText: 'Read Report'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      infographic: 'text-[#387E89] bg-[#387E89]/10',
      guide: 'text-[#143151] bg-[#143151]/10',
      report: 'text-[#5192AE] bg-[#5192AE]/10',
      workbook: 'text-[#A5CCF3] bg-[#A5CCF3]/20',
      checklist: 'text-pink-600 bg-pink-50'
    };
    return colors[category as keyof typeof colors] || 'text-gray-600 bg-gray-100';
  };

  const getCategoryActionColor = (category: string) => {
    const colors = {
      infographic: 'text-[#387E89] group-hover:text-[#2c6269]',
      guide: 'text-[#143151] group-hover:text-[#0d1f31]',
      report: 'text-[#5192AE] group-hover:text-[#3d6e83]',
      workbook: 'text-[#A5CCF3] group-hover:text-[#7ba8e8]',
      checklist: 'text-pink-600 group-hover:text-pink-700'
    };
    return colors[category as keyof typeof colors] || 'text-gray-600 group-hover:text-gray-700';
  };

  const filteredResources = activeFilter === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeFilter);

  const handleResourceClick = (resource: Resource) => {
    setSelectedResource(resource);
    setShowDetailView(true);
    window.scrollTo(0, 0);
  };

  const handleBackToLibrary = () => {
    setShowDetailView(false);
    setSelectedResource(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormMessage('Thank you! Your request has been submitted.');
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      specialty: ''
    });
    
    setTimeout(() => {
      setFormMessage('');
    }, 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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

          <section className="bg-white py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <button 
                onClick={handleBackToLibrary}
                className="inline-flex items-center text-[#387E89] hover:text-[#2c6269] font-medium mb-10 group text-sm transition-colors"
              >
                <ArrowLeft className="mr-2 w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                Back to Resource Library
              </button>

              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                <div className="lg:w-[55%] text-gray-800">
                  <span className={`text-sm font-semibold uppercase mb-3 block tracking-wider ${getCategoryColor(selectedResource.category).split(' ')[0]}`}>
                    {selectedResource.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                    {selectedResource.title}
                  </h1>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p className="mb-6 leading-relaxed">
                      {selectedResource.description}
                    </p>
                    <ul className="space-y-3 text-base list-none p-0 mb-6">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-[#387E89] mr-3 flex-shrink-0 mt-1" />
                        Streamline your healthcare workflows with AI-powered solutions
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-[#387E89] mr-3 flex-shrink-0 mt-1" />
                        Get powerful insights and reporting to quantify your ROI
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-[#387E89] mr-3 flex-shrink-0 mt-1" />
                        Enjoy seamless integrations to drive efficiency
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:w-[45%]">
                  <Card className="p-6 sm:p-10 bg-gradient-to-br from-gray-50 to-white shadow-xl border border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2 tracking-tight">Complete the form</h2>
                    <p className="text-sm text-gray-600 mb-8">to get your resources and unlock insights.</p>
                    
                    <form onSubmit={handleFormSubmit} className="space-y-6">
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
                          className="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#387E89] focus:border-transparent transition-colors placeholder-gray-400"
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
                          className="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#387E89] focus:border-transparent transition-colors placeholder-gray-400"
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
                          className="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#387E89] focus:border-transparent transition-colors placeholder-gray-400"
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
                          className="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#387E89] focus:border-transparent transition-colors placeholder-gray-400"
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
                          className="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#387E89] focus:border-transparent transition-colors"
                        >
                          <option value="" disabled>Select Specialty</option>
                          <option value="cardiology">Cardiology</option>
                          <option value="dermatology">Dermatology</option>
                          <option value="pediatrics">Pediatrics</option>
                          <option value="general">General Practice</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div className="pt-3">
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white font-semibold h-11 px-6 py-3 rounded-lg shadow-md transition-all duration-300"
                        >
                          Download Resource
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
          <title>S10.AI Resource Library - Guides, Reports & Healthcare Resources</title>
          <meta name="description" content="Explore our collection of articles, guides, case studies, and more to help your healthcare practice succeed with AI solutions." />
          <link rel="canonical" href="https://s10.ai/resource-library" />
        </Helmet>

        {/* Hero Section with Gradient Background */}
        <section className="relative bg-gray-950 text-white py-16 sm:py-20 border-b border-gray-800 overflow-hidden">
          <div className="absolute inset-0 bg-gray-950"></div>
          <GradientBarsBackground />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent"></div>
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white">
              S10.ai Resource Library
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore our collection of articles, guides, case studies, and more to help you succeed.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white sticky top-20 z-30 shadow-sm border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-5">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-left mb-4 md:mb-0 tracking-tight">
                All Resources
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {[
                { key: 'all', label: 'All Types' },
                { key: 'infographic', label: 'Infographic' },
                { key: 'guide', label: 'Guide' },
                { key: 'report', label: 'Report' },
                { key: 'workbook', label: 'Workbook' },
                { key: 'checklist', label: 'Checklist' }
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-4 py-2 text-sm font-medium rounded-md border-2 border-transparent transition-all duration-200 ${
                    activeFilter === filter.key
                      ? 'text-[#387E89] font-semibold border-b-[#387E89] bg-[#387E89]/5'
                      : 'text-gray-600 hover:text-[#387E89] hover:bg-[#387E89]/10'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Grid */}
        <main className="bg-white container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                onClick={() => handleResourceClick(resource)}
                className="group cursor-pointer"
              >
                <Card className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-200 hover:border-[#387E89]">
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
                  <div className="p-5 flex flex-col flex-grow">
                    <span className={`text-xs font-semibold uppercase mb-2 tracking-wider ${getCategoryColor(resource.category)}`}>
                      {resource.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight group-hover:text-[#387E89] transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">
                      {resource.description}
                    </p>
                    <span className={`inline-flex items-center text-sm font-medium group-hover:gap-1.5 transition-all duration-200 self-start mt-auto ${getCategoryActionColor(resource.category)}`}>
                      {resource.actionText}
                      <ChevronRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </span>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {filteredResources.length > 0 && (
            <div className="mt-16 flex justify-center">
              <nav role="navigation" aria-label="pagination" className="mx-auto flex w-full justify-center">
                <ul className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-3">
                  <li>
                    <Link
                      to="#"
                      aria-label="Go to previous page"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 gap-2 text-gray-700 border border-gray-300 bg-white hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="hidden sm:inline">Previous</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      aria-current="page"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 w-10 p-0 border-2 border-[#387E89] bg-[#387E89] text-white hover:bg-[#2c6269]"
                    >
                      1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 w-10 p-0 text-gray-700 border border-gray-300 bg-white hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900"
                    >
                      2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 w-10 p-0 text-gray-700 border border-gray-300 bg-white hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900"
                    >
                      3
                    </Link>
                  </li>
                  <li className="hidden sm:flex">
                    <span className="flex h-10 w-10 items-center justify-center text-gray-500 px-1">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">More pages</span>
                    </span>
                  </li>
                  <li className="hidden sm:inline-block">
                    <Link
                      to="#"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 w-10 p-0 text-gray-700 border border-gray-300 bg-white hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900"
                    >
                      8
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      aria-label="Go to next page"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 gap-2 text-gray-700 border border-gray-300 bg-white hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900"
                    >
                      <span className="hidden sm:inline">Next</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default ResourceLibrary;
