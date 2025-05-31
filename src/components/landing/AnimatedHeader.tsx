import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles, 
  Zap, 
  Brain, 
  Stethoscope,
  Shield,
  Building,
  FileText,
  HelpCircle,
  Users,
  Play,
  Mail,
  ArrowRight,
  Cpu,
  TrendingUp,
  Globe,
  Microscope,
  Layers,
  Award,
  BookOpen,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const AnimatedHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveMobileSection(null);
  }, [location]);

  // Enhanced hover handlers for better UX
  const handleMouseEnter = (dropdownType: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdownType);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  // Animated background particles with brand colors
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-gradient-to-r from-[#143151]/20 to-[#387E89]/20 rounded-full"
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.8,
          }}
          style={{
            left: `${15 + i * 20}%`,
            top: `${30 + i * 8}%`,
          }}
        />
      ))}
    </div>
  );

  // Solutions dropdown content with mild pink shades
  const solutionsDropdown = {
    items: [
      {
        title: 'CRUSH',
        description: 'AI Medical Scribe & Documentation',
        icon: <Brain className="w-6 h-6 text-[#143151]" />,
        href: '/crush-ai',
        bgColor: 'bg-gradient-to-br from-pink-50/60 to-rose-50/60 backdrop-blur-sm border border-pink-100/30',
        illustration: (
          <div className="absolute top-2 right-2 opacity-10">
            <Stethoscope className="w-8 h-8 text-[#143151]" />
          </div>
        )
      },
      {
        title: 'BRAVO',
        description: 'AI Staffing Agent & Automation',
        icon: <Zap className="w-6 h-6 text-[#387E89]" />,
        href: '/bravo',
        bgColor: 'bg-gradient-to-br from-pink-50/50 to-blue-50/50 backdrop-blur-sm border border-pink-100/20',
        illustration: (
          <div className="absolute top-2 right-2 opacity-10">
            <Users className="w-8 h-8 text-[#387E89]" />
          </div>
        )
      },
      {
        title: 'Custom AI Agents',
        description: 'Tailored AI Solutions',
        label: 'New',
        icon: <Cpu className="w-6 h-6 text-[#5192AE]" />,
        href: '/custom-ai-agent',
        bgColor: 'bg-gradient-to-br from-rose-50/50 to-pink-50/50 backdrop-blur-sm border border-rose-100/20',
        illustration: (
          <div className="absolute top-2 right-2 opacity-10">
            <Award className="w-8 h-8 text-[#5192AE]" />
          </div>
        )
      }
    ]
  };

  // About dropdown content with corrected labels
  const aboutDropdown = {
    items: [
      {
        title: 'S10.AI Story',
        description: 'Our mission and team',
        icon: <Building className="w-5 h-5 text-[#143151]" />,
        href: '/about'
      },
      {
        title: 'Trust & Technology',
        description: 'Advanced AI architecture',
        icon: <Microscope className="w-5 h-5 text-[#387E89]" />,
        href: '/technology'
      },
      {
        title: 'S10.AI Advantages',
        description: 'Why choose us',
        icon: <TrendingUp className="w-5 h-5 text-[#5192AE]" />,
        href: '/advantages'
      },
      {
        title: 'Integrations',
        description: 'EHR & platform connections',
        icon: <Layers className="w-5 h-5 text-[#A5CCF3]" />,
        href: '/integration'
      },
      {
        title: 'Specialty',
        description: 'Medical specialty solutions',
        icon: <Stethoscope className="w-5 h-5 text-[#143151]" />,
        href: '/specialty'
      }
    ],
    cta: {
      title: 'See S10.AI in Action',
      description: 'Watch how we transform healthcare workflows',
      icon: <Play className="w-4 h-4" />,
      href: '#'
    }
  };

  // Resources dropdown content with Resource Library added
  const resourcesDropdown = {
    items: [
      {
        title: 'Resource Library',
        description: 'Clinical guides & documentation',
        icon: <BookOpen className="w-5 h-5 text-[#143151]" />,
        href: '/resource-library'
      },
      {
        title: 'Blog',
        description: 'Latest insights & updates',
        icon: <BookOpen className="w-5 h-5 text-[#387E89]" />,
        href: '/blog'
      },
      {
        title: 'FAQs',
        description: 'Common questions answered',
        icon: <HelpCircle className="w-5 h-5 text-[#5192AE]" />,
        href: '/faq'
      },
      {
        title: 'Case Studies',
        description: 'Success stories & results',
        icon: <FileText className="w-5 h-5 text-[#A5CCF3]" />,
        href: '/case-study'
      },
      {
        title: 'Customers',
        description: 'Customer testimonials',
        icon: <MessageSquare className="w-5 h-5 text-[#143151]" />,
        href: '/customer'
      }
    ],
    cta: {
      title: 'Explore Our Solutions',
      description: 'Interactive tour of CRUSH & BRAVO',
      icon: <Play className="w-4 h-4" />,
      href: '#'
    }
  };

  // DropdownMenu component definition
  const DropdownMenu = ({ 
    items, 
    isOpen, 
    type,
    cta 
  }: { 
    items: any[], 
    isOpen: boolean, 
    type: 'solutions' | 'about' | 'resources',
    cta?: any 
  }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Card 
            className={`p-6 shadow-2xl border-0 backdrop-blur-xl ${
              type === 'solutions' 
                ? 'min-w-[600px]' 
                : 'min-w-[400px]'
            }`} 
            style={{
              backdropFilter: 'blur(20px)',
              background: 'rgba(255, 255, 255, 0.95)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2) inset'
            }}
          >
            {type === 'solutions' ? (
              <div className="grid grid-cols-1 gap-4">
                <div className="mb-2">
                  <h3 className="text-sm font-semibold text-[#143151] mb-1">AI Solutions</h3>
                  <p className="text-xs text-gray-600">Choose your healthcare AI companion</p>
                </div>
                {items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={item.href} className="block group">
                      <Card className={`p-4 hover:shadow-xl transition-all duration-300 border-0 ${item.bgColor} hover:scale-[1.02] relative overflow-hidden`}>
                        {item.illustration}
                        <div className="flex items-start gap-4 relative z-10">
                          <div className="p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-[#143151] text-lg">
                                {item.title}
                              </h3>
                              {item.label && (
                                <span className="px-2 py-1 bg-[#143151]/10 backdrop-blur-sm text-[#143151] text-xs font-medium rounded-full border border-[#143151]/20">
                                  {item.label}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-700 text-sm">
                              {item.description}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-1">
                <div className="mb-3 pb-2 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-[#143151]">
                    {type === 'about' ? 'Company' : 'Resources'}
                  </h3>
                </div>
                {items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link 
                      to={item.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F9FF] transition-all duration-200 group"
                    >
                      <div className="group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-[#143151] group-hover:text-[#387E89] transition-colors">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
                
                {/* CTA Section */}
                {cta && (
                  <>
                    <div className="border-t border-gray-100 my-2"></div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: items.length * 0.05 + 0.1 }}
                      className="pt-2"
                    >
                      <Link 
                        to={cta.href}
                        className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 hover:from-[#143151]/10 hover:to-[#387E89]/10 transition-all duration-200 group border border-[#387E89]/20"
                      >
                        <div className="p-2 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg group-hover:scale-110 transition-transform">
                          <div className="text-white">
                            {cta.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-[#143151] group-hover:text-[#387E89] transition-colors">
                            {cta.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {cta.description}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#387E89] group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </>
                )}
              </div>
            )}
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // NavItem component definition
  const NavItem = ({ 
    label, 
    hasDropdown = false, 
    dropdownType, 
    href 
  }: { 
    label: string, 
    hasDropdown?: boolean, 
    dropdownType?: string, 
    href?: string 
  }) => {
    const isActive = activeDropdown === dropdownType;
    
    return (
      <div 
        className="relative"
        onMouseEnter={() => hasDropdown && handleMouseEnter(dropdownType!)}
        onMouseLeave={() => hasDropdown && handleMouseLeave()}
      >
        {hasDropdown ? (
          <button className={`flex items-center gap-1 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
            isActive 
              ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white shadow-lg' 
              : 'text-[#143151] hover:text-[#387E89] hover:bg-[#F5F9FF]'
          }`}>
            {label}
            <motion.div
              animate={{ rotate: isActive ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>
        ) : (
          <Link 
            to={href!}
            className="px-4 py-2 rounded-full font-medium text-[#143151] hover:text-[#387E89] hover:bg-[#F5F9FF] transition-all duration-300"
          >
            {label}
          </Link>
        )}
        
        {hasDropdown && (
          <>
            {dropdownType === 'solutions' && (
              <DropdownMenu items={solutionsDropdown.items} isOpen={isActive} type="solutions" />
            )}
            {dropdownType === 'about' && (
              <DropdownMenu items={aboutDropdown.items} isOpen={isActive} type="about" cta={aboutDropdown.cta} />
            )}
            {dropdownType === 'resources' && (
              <DropdownMenu items={resourcesDropdown.items} isOpen={isActive} type="resources" cta={resourcesDropdown.cta} />
            )}
          </>
        )}
      </div>
    );
  };

  // Mobile section component with CTA support
  const MobileSectionToggle = ({ 
    title, 
    items, 
    sectionKey,
    cta 
  }: { 
    title: string, 
    items: any[], 
    sectionKey: string,
    cta?: any 
  }) => {
    const isActive = activeMobileSection === sectionKey;
    
    return (
      <div className="border-b border-gray-100 last:border-b-0">
        <button
          onClick={() => setActiveMobileSection(isActive ? null : sectionKey)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-[#F5F9FF] transition-colors"
        >
          <span className="font-semibold text-[#143151] text-lg">{title}</span>
          <motion.div
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-5 h-5 text-[#387E89]" />
          </motion.div>
        </button>
        
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
              style={{
                backdropFilter: 'blur(20px)',
                background: 'rgba(245, 249, 255, 0.9)',
              }}
            >
              <div className="p-4 space-y-2">
                {sectionKey === 'solutions' ? (
                  // Solutions mobile view with cards
                  <div className="space-y-3">
                    {items.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="block group"
                      >
                        <Card className={`p-4 transition-all duration-300 border-0 ${item.bgColor} hover:scale-[1.02] relative overflow-hidden`}>
                          {item.illustration}
                          <div className="flex items-start gap-3 relative z-10">
                            <div className="p-2 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20">
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-bold text-[#143151]">
                                  {item.title}
                                </h3>
                                {item.label && (
                                  <span className="px-2 py-1 bg-[#143151]/10 backdrop-blur-sm text-[#143151] text-xs font-medium rounded-full border border-[#143151]/20">
                                    {item.label}
                                  </span>
                                )}
                              </div>
                              <p className="text-gray-700 text-sm">
                                {item.description}
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                ) : (
                  // Other sections mobile view
                  <>
                    {items.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/80 backdrop-blur-sm transition-colors group"
                      >
                        <div className="group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-medium text-[#143151] group-hover:text-[#387E89]">
                            {item.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                    
                    {/* Mobile CTA Section */}
                    {cta && (
                      <>
                        <div className="border-t border-gray-200 my-3"></div>
                        <Link 
                          to={cta.href}
                          className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5 hover:from-[#143151]/10 hover:to-[#387E89]/10 transition-all duration-200 group border border-[#387E89]/20"
                        >
                          <div className="p-2 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg group-hover:scale-110 transition-transform">
                            <div className="text-white">
                              {cta.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-[#143151] group-hover:text-[#387E89] transition-colors">
                              {cta.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {cta.description}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#387E89] group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
        style={{
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        }}
      >
        <FloatingParticles />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <Link to="/" className="flex items-center space-x-3">
                <div className="relative">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative"
                  >
                    <motion.img
                      src="/lovable-uploads/b1fccf69-2584-4150-987a-fb09324403f4.png"
                      alt="S10.AI Logo"
                      className="h-12 w-auto"
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#143151]/20 to-[#387E89]/20 rounded-lg"
                      animate={{
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-xs text-gray-500 -mt-1">Clinical AI Solutions</div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <NavItem label="Solutions" hasDropdown dropdownType="solutions" />
              <NavItem label="About" hasDropdown dropdownType="about" />
              <NavItem label="Resources" hasDropdown dropdownType="resources" />
              <NavItem label="Pricing" href="/pricing" />
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="font-semibold text-[#143151] hover:text-[#387E89] hover:bg-[#F5F9FF]"
                asChild
              >
                <Link to="#" className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Quick Tour
                </Link>
              </Button>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white font-semibold px-6 py-2 rounded-full shadow-lg"
                  asChild
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contact Us
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#143151] hover:text-[#387E89] transition-colors"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200/50"
              style={{
                backdropFilter: 'blur(20px)',
                background: 'rgba(255, 255, 255, 0.98)',
              }}
            >
              <div className="max-w-7xl mx-auto">
                
                {/* Mobile Solutions Section */}
                <MobileSectionToggle 
                  title="Solutions" 
                  items={solutionsDropdown.items} 
                  sectionKey="solutions" 
                />

                {/* Mobile About Section */}
                <MobileSectionToggle 
                  title="About" 
                  items={aboutDropdown.items} 
                  sectionKey="about" 
                  cta={aboutDropdown.cta}
                />

                {/* Mobile Resources Section */}
                <MobileSectionToggle 
                  title="Resources" 
                  items={resourcesDropdown.items} 
                  sectionKey="resources" 
                  cta={resourcesDropdown.cta}
                />

                {/* Mobile Direct Links */}
                <div className="border-b border-gray-100">
                  <Link 
                    to="/pricing" 
                    className="block p-4 font-semibold text-[#143151] hover:bg-[#F5F9FF] transition-colors"
                  >
                    Pricing
                  </Link>
                </div>

                {/* Mobile CTA Section */}
                <div className="p-4 space-y-3" style={{
                  background: 'rgba(245, 249, 255, 0.6)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white"
                    asChild
                  >
                    <Link to="#" className="flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Quick Tour
                    </Link>
                  </Button>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white font-semibold"
                    asChild
                  >
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer to prevent content from being hidden behind fixed header */}
      <div className="h-20" />
    </>
  );
};

export default AnimatedHeader;
