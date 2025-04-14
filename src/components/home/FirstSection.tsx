
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const FirstSection = () => {
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
  
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full max-w-7xl px-4 mx-auto py-12">
      <div className="flex flex-col gap-8">
        {/* Top section with heading and description */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - heading */}
          <motion.div
            initial={{ x: -25, y: 50, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1"
          >
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl font-bold">
              Innovative<br />
              Ambient AI<br />
              <span className="text-blue-400">
                Solutions<br />
                For Healthcare
              </span>
            </h1>
          </motion.div>
          
          {/* Right side - description */}
          <motion.div
            initial={{ x: 25, y: 50, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 bg-gray-800/50 rounded-xl p-6 shadow"
          >
            <div className="float-right bg-black/50 flex items-center rounded-xl ml-4">
              <img
                src="/placeholder.svg"
                alt="S10.AI"
                width="90"
                height="90"
                className="rounded-full"
              />
            </div>
            <p className="text-lg text-gray-200">
              From AI medical scribes to patient care AI agents, CRUSH and BRAVO are AI-powered 
              solutions that streamline clinical documentation, minimize administrative burdens, 
              reduce burnout, and save you time—so you can focus on patient care and enhance 
              healthcare automation.
            </p>
          </motion.div>
        </div>
        
        {/* Bottom section with button and logos */}
        <div className="flex flex-wrap bg-gray-800/50 p-6 rounded-2xl rounded-tl-[40px] items-start">
          {/* Demo button */}
          <motion.div
            initial={{ x: 25, y: 30, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex bg-black -mt-2 -ml-2 p-4 rounded-br-[40px] rounded-tl-[40px]"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow">
              <span className="flex items-center justify-center w-7 h-7 rounded-full border-2 border-white transition-all duration-300 group-hover:rotate-[-270deg]">
                <ArrowRight size={16} />
              </span>
              <span className="text-lg font-medium">Book A Demo</span>
            </button>
            <div className="absolute w-0 h-0 top-0 right-[-25px] border-r-[25px] border-r-transparent border-t-[15px] border-t-black"></div>
          </motion.div>
          
          {/* Recommended by text */}
          <div className="ml-4">
            <p className="text-lg font-medium max-w-[250px]">S10.AI Is Recommended by</p>
          </div>
          
          {/* Logo marquee */}
          <div className="flex-1 flex-basis-[300px] overflow-hidden ml-4">
            <div ref={marqueeRef} className="flex animate-marquee">
              {companyLogos.map((logo, index) => (
                <div key={index} className="mx-4">
                  <img
                    src={logo || "/placeholder.svg"}
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
