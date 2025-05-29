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
  MessageSquare,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const DarkAnimatedHeader = () => {
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

  const handleMouseEnter = (dropdownType: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdownType);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  // Dark theme floating particles
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-gradient-to-r from-white/10 to-[#387E89]/20 rounded-full"
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            opacity: [0.1, 0.3, 0.1],
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

  // Solutions dropdown with improved descriptions and UX
  const solutionsDropdown = {
    items: [
      {
        title: 'CRUSH',
        description: 'AI Medical Scribe Assistant & Documentation',
        icon: <Brain className="w-6 h-6 text-[#387E89]" />,
        href: '/crush-ai',
        bgColor: 'bg-black/95 backdrop-blur-xl border border-gray-600/50 hover:border-[#387E89]/50',
        illustration: (
          <div className="absolute top-2 right-2 opacity-20">
            <Stethoscope className="w-8 h-8 text-[#387E89]" />
          </div>
        )
      },
      {
        title: 'BRAVO',
        description: 'AI Staffing Agent & Automation',
        icon: <Zap className="w-6 h-6 text-[#5192AE]" />,
        href: '/bravo',
        bgColor: 'bg-black/95 backdrop-blur-xl border border-gray-600/50 hover:border-[#5192AE]/50',
        illustration: (
          <div className="absolute top-2 right-2 opacity-20">
            <Users className="w-8 h-8 text-[#5192AE]" />
          </div>
        )
      },
      {
        title: 'Custom AI Agents',
        description: 'Tailored AI Solutions',
        label: 'New',
        icon: <Cpu className="w-6 h-6 text-[#A5CCF3]" />,
        href: '/custom-ai-agent',
        bgColor: 'bg-black/95 backdrop-blur-xl border border-gray-600/50 hover:border-[#A5CCF3]/50',
        illustration: (
          <div className="absolute top-2 right-2 opacity-20">
            <Award className="w-8 h-8 text-[#A5CCF3]" />
          </div>
        )
      }
    ]
  };

  const aboutDropdown = {
    items: [
      {
        title: 'S10.AI Story',
        description: 'Our mission and team',
        icon: <Building className="w-5 h-5 text-white" />,
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
        icon: <Stethoscope className="w-5 h-5 text-white" />,
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

  const resourcesDropdown = {
    items: [
      {
        title: 'Resource Library',
        description: 'Clinical guides & documentation',
        icon: <BookOpen className="w-5 h-5 text-white" />,
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
        icon: <MessageSquare className="w-5 h-5 text-white" />,
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
          initial={{ opacity: 0, y: -15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 z-50"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <Card 
            className={`p-6 shadow-2xl border-0 backdrop-blur-2xl ${
              type === 'solutions' 
                ? 'min-w-[700px] max-w-[750px]' 
                : 'min-w-[480px] max-w-[520px]'
            }`} 
            style={{
              backdropFilter: 'blur(24px)',
              background: 'rgba(0, 0, 0, 0.95)',
              boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1) inset, 0 4px 16px rgba(56, 126, 137, 0.2)'
            }}
          >
            {type === 'solutions' ? (
              <div className="grid grid-cols-1 gap-5">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    AI Solutions
                  </h3>
                  <p className="text-sm text-gray-300">Choose your healthcare AI companion</p>
                </div>
                {items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, ease: "easeOut" }}
                  >
                    <Link to={item.href} className="block group">
                      <Card className={`p-6 transition-all duration-300 border-0 ${item.bgColor} hover:scale-[1.03] relative overflow-hidden group-hover:shadow-2xl`}>
                        {item.illustration}
                        <div className="flex items-start gap-4 relative z-10">
                          <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-600/40 group-hover:border-current group-hover:shadow-lg transition-all duration-300">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-bold text-xl transition-colors duration-300 text-white group-hover:text-white">
                                {item.title}
                              </h3>
                              {item.label && (
                                <span className="px-3 py-1 bg-gradient-to-r from-[#387E89]/30 to-[#5192AE]/30 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#387E89]/50 animate-pulse">
                                  {item.label}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <ArrowRight className="w-6 h-6 text-gray-400 group-hover:translate-x-2 group-hover:text-current transition-all duration-300" />
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-2">
                <div className="mb-5 pb-4 border-b border-gray-700/60">
                  <h3 className="text-lg font-bold text-white">
                    {type === 'about' ? 'Company' : 'Resources'}
                  </h3>
                </div>
                {items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06, ease: "easeOut" }}
                  >
                    <Link 
                      to={item.href}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group border border-transparent hover:border-white/10"
                    >
                      <div className="group-hover:scale-125 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white group-hover:text-[#387E89] transition-colors duration-300">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                          {item.description}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#387E89] group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </motion.div>
                ))}
                
                {/* CTA Section */}
                {cta && (
                  <>
                    <div className="border-t border-gray-700/60 my-4"></div>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: items.length * 0.06 + 0.15, ease: "easeOut" }}
                      className="pt-2"
                    >
                      <Link 
                        to={cta.href}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#143151]/40 to-[#387E89]/40 hover:from-[#143151]/60 hover:to-[#387E89]/60 transition-all duration-300 group border border-[#387E89]/50 hover:border-[#387E89]/70 hover:shadow-xl"
                      >
                        <div className="p-3 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <div className="text-white">
                            {cta.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-white group-hover:text-[#387E89] transition-colors duration-300">
                            {cta.title}
                          </div>
                          <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                            {cta.description}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-[#387E89] group-hover:translate-x-2 transition-transform duration-300" />
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
          <button className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 ${
            isActive 
              ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white shadow-xl scale-105' 
              : 'text-white hover:text-[#387E89] hover:bg-white/15 hover:scale-105'
          }`}>
            {label}
            <motion.div
              animate={{ rotate: isActive ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>
        ) : (
          <Link 
            to={href!}
            className="px-5 py-3 rounded-full font-semibold text-white hover:text-[#387E89] hover:bg-white/15 hover:scale-105 transition-all duration-300"
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

  // Mobile section component with improved UX and scrolling
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
      <div className="border-b border-gray-800/60 last:border-b-0">
        <button
          onClick={() => setActiveMobileSection(isActive ? null : sectionKey)}
          className="w-full flex items-center justify-between p-5 text-left hover:bg-white/15 transition-all duration-300"
        >
          <span className="font-bold text-white text-lg">{title}</span>
          <motion.div
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
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
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
              style={{
                backdropFilter: 'blur(24px)',
                background: 'rgba(0, 0, 0, 0.98)',
              }}
            >
              <div className="max-h-80 overflow-y-auto p-5 space-y-3 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                {sectionKey === 'solutions' ? (
                  // Solutions mobile view with cards
                  <div className="space-y-4">
                    {items.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="block group"
                      >
                        <Card className={`p-5 transition-all duration-300 border-0 ${item.bgColor} hover:scale-[1.02] relative overflow-hidden group-hover:shadow-xl`}>
                          {item.illustration}
                          <div className="flex items-start gap-4 relative z-10">
                            <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-600/40 group-hover:bg-gray-700/80 transition-colors duration-300">
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-bold text-white group-hover:text-current transition-colors duration-300">
                                  {item.title}
                                </h3>
                                {item.label && (
                                  <span className="px-2 py-1 bg-gradient-to-r from-[#387E89]/20 to-[#5192AE]/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-[#387E89]/30">
                                    {item.label}
                                  </span>
                                )}
                              </div>
                              <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                                {item.description}
                              </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 group-hover:text-current transition-all duration-300" />
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
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/15 transition-all duration-300 group border border-transparent hover:border-white/10"
                      >
                        <div className="group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-white group-hover:text-[#387E89] transition-colors duration-300">
                            {item.title}
                          </div>
                          <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                    
                    {/* Mobile CTA Section */}
                    {cta && (
                      <>
                        <div className="border-t border-gray-700/50 my-4"></div>
                        <Link 
                          to={cta.href}
                          className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#143151]/40 to-[#387E89]/40 hover:from-[#143151]/60 hover:to-[#387E89]/60 transition-all duration-300 group border border-[#387E89]/50 hover:shadow-xl"
                        >
                          <div className="p-3 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <div className="text-white">
                              {cta.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-white group-hover:text-[#387E89] transition-colors duration-300">
                              {cta.title}
                            </div>
                            <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                              {cta.description}
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-[#387E89] group-hover:translate-x-1 transition-transform duration-300" />
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
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-2xl shadow-2xl border-b border-gray-800/60"
        style={{
          backdropFilter: 'blur(24px)',
          background: 'rgba(0, 0, 0, 0.98)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05) inset'
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
                  <div className="text-xs text-gray-300 -mt-1">Clinical AI Solutions</div>
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
                className="font-semibold text-white hover:text-[#387E89] hover:bg-white/15 hover:scale-105 transition-all duration-300 border border-white/50 hover:border-white/70"
                asChild
              >
                <Link to="#" className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Quick Tour
                </Link>
              </Button>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white font-semibold px-6 py-2 rounded-full shadow-2xl border border-[#387E89]/30 hover:shadow-[#387E89]/25"
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
              className="lg:hidden p-2 text-white hover:text-[#387E89] hover:bg-white/15 rounded-lg transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden border-t border-gray-800/60"
              style={{
                backdropFilter: 'blur(24px)',
                background: 'rgba(0, 0, 0, 0.98)',
              }}
            >
              <div className="max-w-7xl mx-auto">
                
                {/* Call Sales Button - Mobile Only */}
                <div className="p-4 border-b border-gray-800/60" style={{
                  background: 'rgba(56, 126, 137, 0.1)',
                  backdropFilter: 'blur(12px)'
                }}>
                  <a 
                    href="tel:+16314886390" 
                    className="flex items-center justify-center gap-3 w-full p-4 bg-gradient-to-r from-[#143151] to-[#387E89] text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Call Sales: +1 631 4886 390
                  </a>
                </div>

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

                <div className="border-b border-gray-800/60">
                  <Link 
                    to="/pricing" 
                    className="block p-5 font-bold text-white hover:bg-white/15 transition-all duration-300"
                  >
                    Pricing
                  </Link>
                </div>

                <div className="p-5 space-y-4" style={{
                  background: 'rgba(20, 49, 81, 0.6)',
                  backdropFilter: 'blur(12px)'
                }}>
                  <Button 
                    variant="outline" 
                    className="w-full border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link to="#" className="flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Quick Tour
                    </Link>
                  </Button>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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

      <div className="h-20" />
    </>
  );
};

export default DarkAnimatedHeader;
