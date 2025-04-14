
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FirstSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const companyLogos = [
    "/HeaderLogo.png",
    "/HeaderLogo.png",
    "/HeaderLogo.png",
    "/HeaderLogo.png",
    "/HeaderLogo.png",
    "/HeaderLogo.png",
    "/HeaderLogo.png",
    "/HeaderLogo.png",
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            initial={isMounted ? { x: -25, y: 50, opacity: 0 } : false}
            animate={isMounted ? { x: 0, y: 0, opacity: 1 } : false}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1"
          >
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold">
              Innovative<br />
              Ambient AI<br />
              <span className="text-tealBlue">
                Solutions<br />
                For Healthcare
              </span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={isMounted ? { x: 25, y: 50, opacity: 0 } : false}
            animate={isMounted ? { x: 0, y: 0, opacity: 1 } : false}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 bg-gray-100 rounded-xl p-6 shadow"
          >
            <div className="float-right bg-white flex items-center rounded-xl ml-4">
              <img
                src="/circleIcon.png"
                alt="circleIcon"
                width="90"
                height="90"
                className="rounded-full"
              />
            </div>
            <p className="text-lg text-gray-700">
              From AI medical scribes to patient care AI agents, CRUSH and BRAVO are AI-powered 
              solutions that streamline clinical documentation, minimize administrative burdens, 
              reduce burnout, and save you time—so you can focus on patient care and enhance 
              healthcare automation.
            </p>
          </motion.div>
        </div>
        
        <div className="flex flex-wrap bg-gray-100 p-6 rounded-2xl rounded-tl-[40px] items-center">
          <motion.div
            initial={isMounted ? { x: 25, y: 30, opacity: 0 } : false}
            animate={isMounted ? { x: 0, y: 0, opacity: 1 } : false}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex bg-white -mt-2 -ml-2 p-4 rounded-br-[40px] rounded-tl-[40px]"
          >
            <Link to="/contactus" className="bg-tealBlue hover:bg-tealBlueBright text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow">
              <span className="flex items-center justify-center w-7 h-7 rounded-full border-2 border-white transition-all duration-300 group-hover:rotate-[-270deg]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </span>
              <span className="text-lg font-medium">Book A Demo</span>
            </Link>
            <div className="absolute w-0 h-0 top-0 right-[-25px] border-r-[25px] border-r-transparent border-t-[15px] border-t-white"></div>
          </motion.div>
          
          <div className="ml-4">
            <p className="text-lg font-medium max-w-[250px]">S10.AI Is Recommended by</p>
          </div>
          
          <div className="flex-1 flex overflow-hidden ml-4">
            <div className="animate-marquee flex">
              {companyLogos.map((logo, index) => (
                <div key={index} className="mx-4">
                  <img
                    src={logo}
                    alt={`logo-${index}`}
                    width="150"
                    height="auto"
                    className="max-w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
