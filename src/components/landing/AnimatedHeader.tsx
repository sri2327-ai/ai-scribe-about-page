
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
  Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const AnimatedHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();

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
  }, [location]);

  // Animated background particles
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-teal-400/30 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
        />
      ))}
    </div>
  );

  // Solutions dropdown content
  const solutionsDropdown = {
    items: [
      {
        title: 'CRUSH.AI',
        description: 'AI Medical Scribe & Documentation',
        icon: <Brain className="w-6 h-6 text-blue-500" />,
        href: '/crush-ai',
        gradient: 'from-blue-500 to-cyan-500'
      },
      {
        title: 'BRAVO',
        description: 'AI Staffing Agent & Automation',
        icon: <Zap className="w-6 h-6 text-purple-500" />,
        href: '/bravo',
        gradient: 'from-purple-500 to-pink-500'
      },
      {
        title: 'Custom AI Agents',
        description: 'Tailored AI Solutions',
        icon: <Cpu className="w-6 h-6 text-green-500" />,
        href: '/custom-ai-agent',
        gradient: 'from-green-500 to-emerald-500'
      }
    ]
  };

  // About dropdown content
  const aboutDropdown = {
    items: [
      {
        title: 'About',
        description: 'Our mission and team',
        icon: <Building className="w-5 h-5 text-gray-600" />,
        href: '/about'
      },
      {
        title: 'Technology',
        description: 'Advanced AI architecture',
        icon: <Microscope className="w-5 h-5 text-gray-600" />,
        href: '/technology'
      },
      {
        title: 'S10.AI Advantages',
        description: 'Why choose us',
        icon: <TrendingUp className="w-5 h-5 text-gray-600" />,
        href: '/advantages'
      },
      {
        title: 'Integrations',
        description: 'EHR & platform connections',
        icon: <Layers className="w-5 h-5 text-gray-600" />,
        href: '/integration'
      },
      {
        title: 'Specialty',
        description: 'Medical specialty solutions',
        icon: <Stethoscope className="w-5 h-5 text-gray-600" />,
        href: '/specialty'
      }
    ]
  };

  // Resources dropdown content
  const resourcesDropdown = {
    items: [
      {
        title: 'Blog',
        description: 'Latest insights & updates',
        icon: <FileText className="w-5 h-5 text-gray-600" />,
        href: '/blog'
      },
      {
        title: 'FAQs',
        description: 'Common questions answered',
        icon: <HelpCircle className="w-5 h-5 text-gray-600" />,
        href: '/faq'
      },
      {
        title: 'Case Studies',
        description: 'Success stories & results',
        icon: <Shield className="w-5 h-5 text-gray-600" />,
        href: '/case-study'
      },
      {
        title: 'Customers',
        description: 'Customer testimonials',
        icon: <Users className="w-5 h-5 text-gray-600" />,
        href: '/customer'
      }
    ]
  };

  const DropdownMenu = ({ 
    items, 
    isOpen, 
    type 
  }: { 
    items: any[], 
    isOpen: boolean, 
    type: 'solutions' | 'about' | 'resources' 
  }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50"
        >
          <Card className={`p-6 shadow-2xl border-0 backdrop-blur-lg ${
            type === 'solutions' 
              ? 'bg-gradient-to-br from-white/95 via-blue-50/90 to-purple-50/90 min-w-[600px]' 
              : 'bg-white/95 min-w-[400px]'
          }`}>
            {type === 'solutions' ? (
              <div className="grid grid-cols-1 gap-4">
                {items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={item.href} className="block group">
                      <Card className={`p-4 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-r ${item.gradient} hover:scale-105`}>
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-white text-lg mb-1">
                              {item.title}
                            </h3>
                            <p className="text-white/90 text-sm">
                              {item.description}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-2">
                {items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link 
                      to={item.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      {item.icon}
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-blue-600">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
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
        onMouseEnter={() => hasDropdown && setActiveDropdown(dropdownType!)}
        onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
      >
        {hasDropdown ? (
          <button className={`flex items-center gap-1 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
            isActive 
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
              : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
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
            className="px-4 py-2 rounded-full font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
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
              <DropdownMenu items={aboutDropdown.items} isOpen={isActive} type="about" />
            )}
            {dropdownType === 'resources' && (
              <DropdownMenu items={resourcesDropdown.items} isOpen={isActive} type="resources" />
            )}
          </>
        )}
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
            ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
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
                      boxShadow: [
                        '0 0 20px rgba(59, 130, 246, 0.5)',
                        '0 0 30px rgba(147, 51, 234, 0.5)',
                        '0 0 20px rgba(59, 130, 246, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"
                  >
                    <Sparkles className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    S10.AI
                  </div>
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
                className="font-semibold text-gray-700 hover:text-blue-600"
                asChild
              >
                <Link to="#" className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Quick Tour
                </Link>
              </Button>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg"
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
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50"
            >
              <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
                
                {/* Mobile Solutions */}
                <div className="space-y-3">
                  <div className="font-semibold text-gray-900 text-lg">Solutions</div>
                  {solutionsDropdown.items.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {item.icon}
                      <div>
                        <div className="font-medium text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-500">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="space-y-2">
                    <Link to="/pricing" className="block py-2 font-medium text-gray-900">Pricing</Link>
                    <Link to="/about" className="block py-2 font-medium text-gray-900">About</Link>
                    <Link to="/technology" className="block py-2 font-medium text-gray-900">Technology</Link>
                    <Link to="/blog" className="block py-2 font-medium text-gray-900">Blog</Link>
                    <Link to="/contact" className="block py-2 font-medium text-gray-900">Contact</Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-full"
                    asChild
                  >
                    <Link to="/contact">Get Started</Link>
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
