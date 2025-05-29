import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MoreHorizontal, Check, Download, ExternalLink } from 'lucide-react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setFormMessage('🎉 Success! Your resource will be sent to your email shortly.');
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      specialty: ''
    });
    setIsSubmitting(false);
    
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

          <section className="bg-white py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="lg:w-[55%] text-gray-800">
                  <div className="mb-6">
                    <span className={`inline-flex items-center text-xs font-semibold uppercase px-3 py-1 rounded-full tracking-wider ${getCategoryColor(selectedResource.category)}`}>
                      {selectedResource.category}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                    {selectedResource.title}
                  </h1>
                  
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p className="text-lg mb-8 leading-relaxed text-gray-600">
                      {selectedResource.description}
                    </p>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">What you'll get:</h3>
                      <ul className="space-y-3 text-base list-none p-0">
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
                </div>

                <div className="lg:w-[45%]">
                  <Card className="sticky top-24 p-6 sm:p-8 bg-white shadow-2xl border-0 rounded-2xl">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#387E89] to-[#5192AE] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Download className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Resource</h2>
                      <p className="text-sm text-gray-600">Fill out the form below to download instantly</p>
                    </div>
                    
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2 block">Full name*</Label>
                          <Input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                            placeholder="Jane Doe"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full h-12 px-4 text-gray-800 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#387E89] focus:border-transparent transition-all duration-200 placeholder-gray-400"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="companyName" className="text-sm font-medium text-gray-700 mb-2 block">Company*</Label>
                          <Input
                            type="text"
                            id="companyName"
                            name="companyName"
                            required
                            placeholder="Healthcare Inc."
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="w-full h-12 px-4 text-gray-800 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#387E89] focus:border-transparent transition-all duration-200 placeholder-gray-400"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">Email*</Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="jane@healthcare.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 text-gray-800 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#387E89] focus:border-transparent transition-all duration-200 placeholder-gray-400"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">Phone*</Label>
                          <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full h-12 px-4 text-gray-800 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#387E89] focus:border-transparent transition-all duration-200 placeholder-gray-400"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="specialty" className="text-sm font-medium text-gray-700 mb-2 block">Specialty*</Label>
                          <select
                            id="specialty"
                            name="specialty"
                            required
                            value={formData.specialty}
                            onChange={handleInputChange}
                            className="w-full h-12 px-4 text-gray-800 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#387E89] focus:border-transparent transition-all duration-200"
                          >
                            <option value="" disabled>Select Specialty</option>
                            <option value="cardiology">Cardiology</option>
                            <option value="dermatology">Dermatology</option>
                            <option value="pediatrics">Pediatrics</option>
                            <option value="general">General Practice</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white font-semibold h-12 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center">
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Processing...
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <Download className="w-4 h-4 mr-2" />
                              Download {selectedResource.category}
                            </div>
                          )}
                        </Button>
                      </div>
                      
                      <div className="text-xs text-gray-500 text-center pt-2">
                        By submitting, I agree to S10.ai's{' '}
                        <Link to="#" className="text-[#387E89] hover:underline">Privacy Policy</Link>.
                      </div>
                    </form>
                    
                    {formMessage && (
                      <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl">
                        <div className="text-sm text-green-700 font-medium text-center">
                          {formMessage}
                        </div>
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
        <section className="relative bg-white py-16 sm:py-20 border-b border-gray-200 overflow-hidden">
          <div className="absolute inset-0 bg-white"></div>
          <GradientBarsBackground />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900 leading-tight">
              S10.AI Resource Library
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of articles, guides, case studies, and more to help you succeed.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white sticky top-20 z-30 shadow-sm border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-left mb-4 md:mb-0 tracking-tight">
                All Resources
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
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
                  className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeFilter === filter.key
                      ? 'text-white bg-gradient-to-r from-[#387E89] to-[#5192AE] shadow-lg'
                      : 'text-gray-600 bg-gray-100 hover:bg-gray-200 hover:text-gray-900'
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                onClick={() => handleResourceClick(resource)}
                className="group cursor-pointer"
              >
                <Card className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100 hover:border-[#387E89] hover:-translate-y-2">
                  <div className="aspect-video bg-slate-100 overflow-hidden relative">
                    <img
                      src={resource.img}
                      alt={resource.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&h=338&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className={`inline-flex items-center text-xs font-semibold uppercase px-3 py-1 rounded-full tracking-wider mb-3 ${getCategoryColor(resource.category)}`}>
                      {resource.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#387E89] transition-colors line-clamp-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed line-clamp-3">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center text-sm font-semibold transition-all duration-200 ${getCategoryActionColor(resource.category)}`}>
                        {resource.actionText}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#387E89] transition-colors duration-200" />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Enhanced Pagination */}
          {filteredResources.length > 0 && (
            <div className="mt-20 flex justify-center">
              <nav role="navigation" aria-label="pagination" className="mx-auto flex w-full justify-center">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-lg border border-gray-200/60 rounded-2xl px-3 py-3 shadow-xl">
                  <button
                    className="inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-300 h-11 px-4 gap-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50 hover:scale-105"
                    aria-label="Go to previous page"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>
                  
                  <div className="flex items-center gap-2 px-2">
                    <button
                      className="inline-flex items-center justify-center rounded-xl text-sm font-bold h-11 w-11 bg-gradient-to-r from-[#387E89] to-[#5192AE] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      aria-current="page"
                    >
                      1
                    </button>
                    <button className="inline-flex items-center justify-center rounded-xl text-sm font-medium h-11 w-11 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 hover:scale-105">
                      2
                    </button>
                    <button className="inline-flex items-center justify-center rounded-xl text-sm font-medium h-11 w-11 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 hover:scale-105">
                      3
                    </button>
                    <div className="hidden sm:flex items-center justify-center h-11 w-11 text-gray-400">
                      <MoreHorizontal className="h-4 w-4" />
                    </div>
                    <button className="hidden sm:inline-flex items-center justify-center rounded-xl text-sm font-medium h-11 w-11 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 hover:scale-105">
                      8
                    </button>
                  </div>
                  
                  <button
                    className="inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-300 h-11 px-4 gap-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:scale-105"
                    aria-label="Go to next page"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </nav>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default ResourceLibrary;
