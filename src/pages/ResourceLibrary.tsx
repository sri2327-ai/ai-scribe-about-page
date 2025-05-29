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

  // Add keyframe animation for pulse effect with pink gradients
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
      infographic: 'text-pink-600 bg-pink-100',
      guide: 'text-purple-600 bg-purple-100',
      report: 'text-rose-600 bg-rose-100',
      workbook: 'text-fuchsia-600 bg-fuchsia-100',
      checklist: 'text-pink-700 bg-pink-50'
    };
    return colors[category as keyof typeof colors] || 'text-gray-600 bg-gray-100';
  };

  const getCategoryActionColor = (category: string) => {
    const colors = {
      infographic: 'text-pink-600 group-hover:text-pink-700',
      guide: 'text-purple-600 group-hover:text-purple-700',
      report: 'text-rose-600 group-hover:text-rose-700',
      workbook: 'text-fuchsia-600 group-hover:text-fuchsia-700',
      checklist: 'text-pink-700 group-hover:text-pink-800'
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
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
          <Helmet>
            <title>{selectedResource.title} - S10.AI Resource Library</title>
            <meta name="description" content={selectedResource.description} />
          </Helmet>

          <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <button 
                onClick={handleBackToLibrary}
                className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium mb-10 group text-sm transition-colors"
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
                        <Check className="w-5 h-5 text-pink-600 mr-3 flex-shrink-0 mt-1" />
                        Streamline your healthcare workflows with AI-powered solutions
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-pink-600 mr-3 flex-shrink-0 mt-1" />
                        Get powerful insights and reporting to quantify your ROI
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-pink-600 mr-3 flex-shrink-0 mt-1" />
                        Enjoy seamless integrations to drive efficiency
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:w-[45%]">
                  <Card className="p-6 sm:p-10 bg-gradient-to-br from-white via-pink-50 to-purple-50 shadow-xl border border-pink-200">
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
                          className="w-full px-4 py-3 text-gray-800 bg-white border border-pink-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors placeholder-gray-400"
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
                          className="w-full px-4 py-3 text-gray-800 bg-white border border-pink-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors placeholder-gray-400"
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
                          className="w-full px-4 py-3 text-gray-800 bg-white border border-pink-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors placeholder-gray-400"
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
                          className="w-full px-4 py-3 text-gray-800 bg-white border border-pink-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors placeholder-gray-400"
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
                          className="w-full px-4 py-3 text-gray-800 bg-white border border-pink-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
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
                          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold h-11 px-6 py-3 rounded-lg shadow-md transition-all duration-300"
                        >
                          Download Resource
                        </Button>
                      </div>
                      
                      <div className="text-xs text-gray-500 text-center">
                        By submitting, I acknowledge S10.ai may use my information as per its{' '}
                        <Link to="#" className="text-pink-600 hover:underline">Privacy Policy</Link>.
                      </div>
                    </form>
                    
                    {formMessage && (
                      <div className="mt-4 text-sm text-pink-600 font-medium text-center">
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
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
        <Helmet>
          <title>S10.AI Resource Library - Guides, Reports & Healthcare Resources</title>
          <meta name="description" content="Explore our collection of articles, guides, case studies, and more to help your healthcare practice succeed with AI solutions." />
          <link rel="canonical" href="https://s10.ai/resource-library" />
        </Helmet>

        {/* Hero Section with Pink Gradient Background */}
        <section className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 text-white py-16 sm:py-20 border-b border-pink-800 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900"></div>
          <GradientBarsBackground />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-pink-900/60 to-transparent"></div>
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white leading-tight">
              S10.AI Resource Library
            </h1>
            <p className="text-lg sm:text-xl text-pink-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of articles, guides, case studies, and more to help your healthcare practice succeed with AI solutions.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-20 z-30 shadow-sm border-b border-pink-200">
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
                      ? 'text-pink-600 font-semibold border-b-pink-600 bg-pink-50'
                      : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Grid */}
        <main className="bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                onClick={() => handleResourceClick(resource)}
                className="group cursor-pointer"
              >
                <Card className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-pink-200 hover:border-pink-400">
                  <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden">
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight group-hover:text-pink-600 transition-colors">
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

          {/* Modern Pagination */}
          {filteredResources.length > 0 && (
            <div className="mt-16 flex justify-center">
              <nav role="navigation" aria-label="pagination" className="mx-auto flex w-full justify-center">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-pink-200">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 w-9 rounded-full hover:bg-pink-100 hover:text-pink-700 transition-colors"
                    aria-label="Go to previous page"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    variant="default"
                    size="sm"
                    className="h-9 w-9 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md hover:from-pink-600 hover:to-purple-700"
                    aria-current="page"
                  >
                    1
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 w-9 rounded-full hover:bg-pink-100 hover:text-pink-700 transition-colors"
                  >
                    2
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 w-9 rounded-full hover:bg-pink-100 hover:text-pink-700 transition-colors"
                  >
                    3
                  </Button>
                  
                  <div className="flex h-9 w-9 items-center justify-center">
                    <MoreHorizontal className="h-4 w-4 text-pink-400" />
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 w-9 rounded-full hover:bg-pink-100 hover:text-pink-700 transition-colors"
                  >
                    8
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 w-9 rounded-full hover:bg-pink-100 hover:text-pink-700 transition-colors"
                    aria-label="Go to next page"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
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
