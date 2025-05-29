import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";
import styles from "@/styles/header.module.css";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

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

              <NavLink
                to="/crush-ai"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? activeNavLinkClass : navLinkClass
                }
                title="AI Medical Scribe Assistant & Documentation"
              >
                CRUSH
              </NavLink>

              <NavLink
                to="/bravo"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? activeNavLinkClass : navLinkClass
                }
              >
                BRAVO
              </NavLink>

              <NavLink
                to="/custom-ai-agent"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? activeNavLinkClass : navLinkClass
                }
              >
                Custom AI
              </NavLink>
              
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

            <NavLink
              to="/crush-ai"
              onClick={closeMenu}
              className="block px-6 py-4 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              CRUSH
            </NavLink>

            <NavLink
              to="/bravo"
              onClick={closeMenu}
              className="block px-6 py-4 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              BRAVO
            </NavLink>

            <NavLink
              to="/custom-ai-agent"
              onClick={closeMenu}
              className="block px-6 py-4 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              Custom AI
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
