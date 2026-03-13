
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";
import styles from "@/styles/header.module.css";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Phone, ChevronDown, FileText, Languages, Zap, PhoneCall, Calendar, Bot, Stethoscope, Video } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinkClass =
  "px-3 py-2 rounded-full font-medium hover:bg-tealBlueBright/10 hover:text-tealBlueBright transition-colors";
const activeNavLinkClass =
  "px-3 py-2 rounded-full font-medium text-tealBlueBright bg-tealBlueBright/10";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        setIsScrolled(window.scrollY > headerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location, setIsSidebarOpen]);

  const closeMenu = () => {
    setIsSidebarOpen(false);
  };

  const headerClasses = classNames(
    "fixed top-0 left-0 w-full z-50 transition-shadow duration-300",
    isScrolled ? "bg-white/90 backdrop-blur shadow-md" : "bg-transparent",
    styles.header_main
  );

  return (
    <header className={classNames(headerClasses)} ref={headerRef}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className={classNames(styles.header_logo)}>
            <img
              src="/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png"
              alt="S10.AI Logo"
              className={classNames(styles.header_logo_img)}
            />
          </Link>
        </div>

        <div className="flex-1 hidden md:block">
          <div className="flex justify-center">
            <nav className={classNames("flex space-x-1", isScrolled && styles.glassmorphism, "px-4 py-2")}>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? activeNavLinkClass : navLinkClass
                }
              >
                About
              </NavLink>

              <DropdownMenu>
                <DropdownMenuTrigger className="px-3 py-2 rounded-full font-medium hover:bg-tealBlueBright/10 hover:text-tealBlueBright transition-colors focus:outline-none flex items-center gap-1">
                  Solutions
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-[860px] bg-white border border-gray-200 shadow-2xl rounded-xl p-0 z-[9999] overflow-hidden"
                  sideOffset={8}
                  align="center"
                >
                  {/* Top row: Solutions + Who we're for */}
                  <div className="grid grid-cols-3 gap-0 border-b border-gray-100">
                    {/* Solutions column */}
                    <div className="p-5 border-r border-gray-100">
                      <h3 className="font-semibold text-xs uppercase tracking-widest text-gray-400 mb-3">Solutions</h3>
                      <div className="space-y-1">
                        <DropdownMenuItem asChild>
                          <Link to="/crush-ai" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50 transition-colors w-full text-left focus:bg-blue-50 focus:outline-none group">
                            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                              <Stethoscope className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 text-sm">CRUSH</div>
                              <div className="text-xs text-gray-500">AI Medical Scribe</div>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/bravo" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-purple-50 transition-colors w-full text-left focus:bg-purple-50 focus:outline-none group">
                            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                              <PhoneCall className="w-4 h-4 text-purple-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 text-sm">BRAVO</div>
                              <div className="text-xs text-gray-500">AI Phone Agent</div>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/custom-ai-agent" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-teal-50 transition-colors w-full text-left focus:bg-teal-50 focus:outline-none group">
                            <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-200 transition-colors">
                              <Bot className="w-4 h-4 text-teal-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 text-sm">Custom AI Agents</div>
                              <div className="text-xs text-gray-500">Tailored AI Solutions</div>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/cheer" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-green-50 transition-colors w-full text-left focus:bg-green-50 focus:outline-none group">
                            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                              <Video className="w-4 h-4 text-green-600" />
                            </div>
                            <div className="flex items-center gap-2">
                              <div>
                                <div className="font-semibold text-gray-900 text-sm flex items-center gap-1.5">
                                  Telemedicine Platform
                                  <span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">New</span>
                                </div>
                                <div className="text-xs text-gray-500">CHEER — Virtual care, anytime</div>
                              </div>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      </div>
                    </div>

                    {/* Who we're for column */}
                    <div className="p-5 border-r border-gray-100">
                      <h3 className="font-semibold text-xs uppercase tracking-widest text-gray-400 mb-3">Who we're for</h3>
                      <div className="space-y-1">
                        {[
                          { label: "New clinics & startups", desc: "Launch quickly. Automate admin." },
                          { label: "Independent clinicians", desc: "Work smart. Stay patient-focused." },
                          { label: "Group practices", desc: "Grow efficiently. Build loyalty." },
                          { label: "Specialty care", desc: "Tailored workflows. Better outcomes.", to: "/specialty" },
                          { label: "Virtual care", desc: "Consistent visits. Engage patients." },
                          { label: "Hospitals & health systems", desc: "Scale capacity. Align teams." },
                        ].map(({ label, desc, to }) => (
                          <DropdownMenuItem key={label} asChild>
                            <Link to={to || "/customer"} className="block p-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left focus:bg-gray-50 focus:outline-none">
                              <div className="font-medium text-gray-900 text-sm">{label}</div>
                              <div className="text-xs text-gray-500">{desc}</div>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </div>

                    {/* Popular Features column — segregated by solution */}
                    <div className="p-5 bg-gray-50">
                      <h3 className="font-semibold text-xs uppercase tracking-widest text-gray-400 mb-3">Popular Features</h3>
                      <div className="space-y-3">
                        {/* CRUSH features */}
                        <div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">CRUSH</span>
                          </div>
                          <div className="space-y-1 pl-3.5">
                            <DropdownMenuItem asChild>
                              <Link to="/crush-ai" className="flex items-center gap-2 p-1.5 rounded-md hover:bg-blue-50 transition-colors w-full text-left focus:bg-blue-50 focus:outline-none">
                                <FileText className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">Ambient Documentation</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link to="/ai-accuracy" className="flex items-center gap-2 p-1.5 rounded-md hover:bg-blue-50 transition-colors w-full text-left focus:bg-blue-50 focus:outline-none">
                                <Zap className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">AI Accuracy Engine</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link to="/specialty" className="flex items-center gap-2 p-1.5 rounded-md hover:bg-blue-50 transition-colors w-full text-left focus:bg-blue-50 focus:outline-none">
                                <Stethoscope className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">80+ Specialty Templates</span>
                              </Link>
                            </DropdownMenuItem>
                          </div>
                        </div>

                        <div className="border-t border-gray-200"></div>

                        {/* BRAVO features */}
                        <div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <span className="text-xs font-bold text-purple-600 uppercase tracking-wide">BRAVO</span>
                          </div>
                          <div className="space-y-1 pl-3.5">
                            <DropdownMenuItem asChild>
                              <Link to="/bravo" className="flex items-center gap-2 p-1.5 rounded-md hover:bg-purple-50 transition-colors w-full text-left focus:bg-purple-50 focus:outline-none">
                                <PhoneCall className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">24/7 AI Phone Calls</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link to="/bravo" className="flex items-center gap-2 p-1.5 rounded-md hover:bg-purple-50 transition-colors w-full text-left focus:bg-purple-50 focus:outline-none">
                                <Calendar className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">Smart Scheduling</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link to="/bravo" className="flex items-center gap-2 p-1.5 rounded-md hover:bg-purple-50 transition-colors w-full text-left focus:bg-purple-50 focus:outline-none">
                                <Languages className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">60+ Languages</span>
                              </Link>
                            </DropdownMenuItem>
                          </div>
                        </div>

                        <div className="border-t border-gray-200"></div>

                        {/* Custom AI features */}
                        <div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                            <span className="text-xs font-bold text-teal-600 uppercase tracking-wide">Custom AI</span>
                          </div>
                          <div className="space-y-1 pl-3.5">
                            <DropdownMenuItem asChild>
                              <Link to="/custom-ai-agent" className="flex items-center gap-2 p-1.5 rounded-md hover:bg-teal-50 transition-colors w-full text-left focus:bg-teal-50 focus:outline-none">
                                <Bot className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">Custom Workflows</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link to="/integration" className="flex items-center gap-2 p-1.5 rounded-md hover:bg-teal-50 transition-colors w-full text-left focus:bg-teal-50 focus:outline-none">
                                <Zap className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">EHR Integrations</span>
                              </Link>
                            </DropdownMenuItem>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="px-3 py-2 rounded-full font-medium hover:bg-tealBlueBright/10 hover:text-tealBlueBright transition-colors focus:outline-none flex items-center gap-1">
                  Specialties
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-[800px] bg-white border border-gray-200 shadow-xl rounded-lg p-6 z-[9999]"
                  sideOffset={8}
                  align="center"
                >
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-4">By Role</h3>
                      <div className="space-y-2">
                        <DropdownMenuItem asChild>
                          <Link
                            to="/specialty"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left focus:bg-gray-50 focus:outline-none"
                          >
                            <div className="font-medium text-gray-900">Specialists</div>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            to="/specialty"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left focus:bg-gray-50 focus:outline-none"
                          >
                            <div className="font-medium text-gray-900">Nurses</div>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            to="/specialty"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left focus:bg-gray-50 focus:outline-none"
                          >
                            <div className="font-medium text-gray-900">Allied Health</div>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            to="/specialty"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left focus:bg-gray-50 focus:outline-none"
                          >
                            <div className="font-medium text-gray-900">Trainees</div>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            to="/specialty"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left focus:bg-gray-50 focus:outline-none"
                          >
                            <div className="font-medium text-gray-900">Administrators / Executives</div>
                          </Link>
                        </DropdownMenuItem>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-4">By Specialty</h3>
                      <div className="space-y-2 max-h-80 overflow-y-auto">
                        <DropdownMenuItem asChild>
                          <Link
                            to="/specialty"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left focus:bg-gray-50 focus:outline-none"
                          >
                            <div className="font-medium text-gray-900">Family Medicine</div>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            to="/specialty"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left focus:bg-gray-50 focus:outline-none"
                          >
                            <div className="font-medium text-gray-900">Cardiology</div>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            to="/specialty"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left focus:bg-gray-50 focus:outline-none"
                          >
                            <div className="font-medium text-gray-900">Orthopedics</div>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            to="/specialty"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left focus:bg-gray-50 focus:outline-none"
                          >
                            <div className="font-medium text-gray-900">Internal Medicine</div>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            to="/specialty"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left focus:bg-gray-50 focus:outline-none"
                          >
                            <div className="font-medium text-gray-900">Pediatrics</div>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            to="/specialty"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left focus:bg-gray-50 focus:outline-none"
                          >
                            <div className="font-medium text-gray-900">ENT</div>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            to="/specialty"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left focus:bg-gray-50 focus:outline-none"
                          >
                            <div className="font-medium text-gray-900">Oncology</div>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            to="/specialty"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left focus:bg-gray-50 focus:outline-none"
                          >
                            <div className="font-medium text-gray-900">Psychiatry</div>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            to="/specialty"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left focus:bg-gray-50 focus:outline-none"
                          >
                            <div className="font-medium text-gray-900">Dentistry</div>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            to="/specialty"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors w-full text-left focus:bg-gray-50 focus:outline-none"
                          >
                            <div className="font-medium text-gray-900">Veterinary Medicine</div>
                          </Link>
                        </DropdownMenuItem>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-lg text-gray-900">Success Stories</h3>
                        <Link
                          to="/case-studies"
                          className="text-sm text-tealBlueBright hover:text-tealBlueBright/80 font-medium"
                        >
                          View all →
                        </Link>
                      </div>
                      <div className="space-y-3">
                        <DropdownMenuItem asChild>
                          <Link
                            to="/case-studies/family-medicine"
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors w-full text-left focus:bg-gray-50 focus:outline-none"
                          >
                            <img 
                              src="/public/lovable-uploads/e821a788-6061-4aa5-b3c1-2fed12387b14.png" 
                              alt="Family Medicine Success"
                              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                            />
                            <div>
                              <div className="font-medium text-gray-900 text-sm">Family Medicine Practice</div>
                              <div className="text-xs text-gray-600">50% time savings with AI scribe</div>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            to="/case-studies/functional-medicine"
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors w-full text-left focus:bg-gray-50 focus:outline-none"
                          >
                            <img 
                              src="/public/lovable-uploads/ba0495cd-1f3d-4b15-8fa6-bfd3655f8e9c.png" 
                              alt="Functional Medicine Success"
                              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                            />
                            <div>
                              <div className="font-medium text-gray-900 text-sm">Functional Medicine Clinic</div>
                              <div className="text-xs text-gray-600">Enhanced patient care quality</div>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            to="/case-studies/gastroenterology"
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors w-full text-left focus:bg-gray-50 focus:outline-none"
                          >
                            <img 
                              src="/public/lovable-uploads/2ddb185a-4a0d-480a-a8cc-9934b8856753.png" 
                              alt="Gastroenterology Success"
                              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                            />
                            <div>
                              <div className="font-medium text-gray-900 text-sm">Gastroenterology Practice</div>
                              <div className="text-xs text-gray-600">Streamlined documentation</div>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <NavLink
                to="/advantages"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? activeNavLinkClass : navLinkClass
                }
              >
                Advantages
              </NavLink>

              <div className="relative inline-block">
                <NavLink
                  to="/pricing"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? activeNavLinkClass : navLinkClass
                  }
                >
                  Pricing
                </NavLink>
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 text-xs px-1.5 py-0.5 bg-red-500 text-white animate-pulse z-10 min-w-max"
                >
                  New
                </Badge>
              </div>

              <NavLink
                to="/roi-calculator"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? activeNavLinkClass : navLinkClass
                }
              >
                ROI Calculator
              </NavLink>
            </nav>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/contact"
            className={classNames(
              "bg-tealBlue hover:bg-tealBlueBright text-white font-medium py-2.5 px-6 rounded-full transition-colors"
            )}
          >
            Contact Us
          </Link>
        </div>

        <div className="md:hidden">
          <motion.button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          
          {/* Call Sales Button - Mobile Only */}
          <div className="p-4 border-b border-gray-200 bg-tealBlue/5">
            <a 
              href="tel:+16314886390" 
              className="flex items-center justify-center gap-3 w-full p-4 bg-tealBlue text-white font-bold rounded-xl shadow-lg hover:bg-tealBlueBright hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Sales: +1 631 4886 390
            </a>
          </div>

          <div className="flex flex-col">
            <NavLink
              to="/about"
              onClick={closeMenu}
              className="block px-6 py-4 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              About
            </NavLink>

            <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
              <h4 className="font-semibold text-gray-900">Solutions</h4>
            </div>
            <NavLink
              to="/crush-ai"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              CRUSH - AI Medical Scribe
            </NavLink>
            <NavLink
              to="/bravo"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              BRAVO - AI Staffing Agent
            </NavLink>
            <NavLink
              to="/custom-ai-agent"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Custom AI - Tailored Solutions
            </NavLink>

            <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
              <h4 className="font-semibold text-gray-900">Who we're for</h4>
            </div>
            <NavLink
              to="/customer"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              New clinics & startups
            </NavLink>
            <NavLink
              to="/customer"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Independent clinicians
            </NavLink>
            <NavLink
              to="/customer"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Group practices
            </NavLink>
            <NavLink
              to="/specialty"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Specialty care
            </NavLink>
            <NavLink
              to="/customer"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Virtual care
            </NavLink>
            <NavLink
              to="/customer"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Hospitals & health systems
            </NavLink>

            <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
              <h4 className="font-semibold text-gray-900">Specialties</h4>
            </div>
            
            <div className="px-6 py-2 bg-gray-100 border-b border-gray-200">
              <h5 className="font-medium text-gray-800 text-sm">By Role</h5>
            </div>
            <NavLink
              to="/specialty"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Specialists
            </NavLink>
            <NavLink
              to="/specialty"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Nurses
            </NavLink>
            <NavLink
              to="/specialty"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Allied Health
            </NavLink>
            <NavLink
              to="/specialty"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Trainees
            </NavLink>
            <NavLink
              to="/specialty"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Administrators / Executives
            </NavLink>

            <div className="px-6 py-2 bg-gray-100 border-b border-gray-200">
              <h5 className="font-medium text-gray-800 text-sm">By Specialty</h5>
            </div>
            <NavLink
              to="/specialty"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Family Medicine
            </NavLink>
            <NavLink
              to="/specialty"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Cardiology
            </NavLink>
            <NavLink
              to="/specialty"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Orthopedics
            </NavLink>
            <NavLink
              to="/specialty"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Internal Medicine
            </NavLink>
            <NavLink
              to="/specialty"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Pediatrics
            </NavLink>
            <NavLink
              to="/specialty"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              ENT
            </NavLink>
            <NavLink
              to="/specialty"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Oncology
            </NavLink>
            <NavLink
              to="/specialty"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Psychiatry
            </NavLink>
            <NavLink
              to="/specialty"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Dentistry
            </NavLink>
            <NavLink
              to="/specialty"
              onClick={closeMenu}
              className="block px-8 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Veterinary Medicine
            </NavLink>

            <NavLink
              to="/advantages"
              onClick={closeMenu}
              className="block px-6 py-4 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Advantages
            </NavLink>

            <div className="relative">
              <NavLink
                to="/pricing"
                onClick={closeMenu}
                className="block px-6 py-4 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
              >
                Pricing
                <Badge 
                  variant="destructive" 
                  className="ml-2 text-xs px-1.5 py-0.5 bg-red-500 text-white animate-pulse"
                >
                  New
                </Badge>
              </NavLink>
            </div>

            <NavLink
              to="/roi-calculator"
              onClick={closeMenu}
              className="block px-6 py-4 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              ROI Calculator
            </NavLink>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block px-6 py-4 text-center bg-tealBlue text-white font-medium hover:bg-tealBlueBright transition-colors m-4 rounded-full"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
