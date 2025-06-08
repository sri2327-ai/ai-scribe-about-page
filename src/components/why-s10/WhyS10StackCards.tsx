
import React, { useEffect, useRef, useState } from "react";

const WhyS10StackCards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  // More responsive timing function with shorter duration
  const cardStyle = {
    height: '60vh',
    maxHeight: '600px',
    borderRadius: '20px',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };

  useEffect(() => {
    // Create intersection observer to detect when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 } // Start observing when 10% of element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Optimized scroll handler using requestAnimationFrame
    const handleScroll = () => {
      if (!ticking.current) {
        lastScrollY.current = window.scrollY;
        
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 2;
          
          // Calculate the scroll progress
          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
          }
          
          // Determine which card should be visible based on progress
          if (progress >= 0.66) {
            setActiveCardIndex(2);
          } else if (progress >= 0.33) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(0);
          }
          
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Card visibility based on active index instead of direct scroll progress
  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;

  return (
    <div 
      ref={sectionRef} 
      className="relative" 
      style={{ height: '300vh' }}
    >
      <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-white" id="why-s10ai">
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col max-w-7xl">
          <div className="mb-2 md:mb-3">
            <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary opacity-0 animate-fade-in" style={{
                animationDelay: "0.1s"
              }}>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white mr-2 text-xs font-bold">02</span>
                <span>Clinical & Operational Excellence</span>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2 text-gray-900">
              Complete Healthcare Transformation
            </h2>
          </div>
          
          <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">
            {/* First Card - Clinician Focus */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isFirstCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 10,
                transform: `translateY(${isFirstCardVisible ? '90px' : '200px'}) scale(0.9)`,
                opacity: isFirstCardVisible ? 0.9 : 0
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-primary/40 to-primary/80"
                style={{
                  backgroundImage: "linear-gradient(135deg, #1EAEDB 0%, #0FA0CE 100%)",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  backgroundBlendMode: "overlay"
                }}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">For the Clinician</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                    Streamline Documentation & Boost Well-being
                  </h3>
                  <p className="text-white/90 text-lg">
                    The Joy of Focused Medicine - CRUSH listens to natural patient conversations and instantly drafts pristine, specialty-specific clinical notes.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Second Card - Practice Focus */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isSecondCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 20,
                transform: `translateY(${isSecondCardVisible ? activeCardIndex === 1 ? '55px' : '45px' : '200px'}) scale(0.95)`,
                opacity: isSecondCardVisible ? 1 : 0,
                pointerEvents: isSecondCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-secondary/40 to-secondary/80"
                style={{
                  backgroundImage: "linear-gradient(135deg, #0FA0CE 0%, #1EAEDB 100%)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay"
                }}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">For the Practice</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                    Automate Your Front Office & Improve Financials
                  </h3>
                  <p className="text-white/90 text-lg">
                    The Power of a Resilient Operation - BRAVO works 24/7 as your automated front-office engine, creating seamless efficiency.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Third Card - Patient Care */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isThirdCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 30,
                transform: `translateY(${isThirdCardVisible ? activeCardIndex === 2 ? '15px' : '0' : '200px'}) scale(1)`,
                opacity: isThirdCardVisible ? 1 : 0,
                pointerEvents: isThirdCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-gray-800/40 to-gray-900/80"
                style={{
                  backgroundImage: "linear-gradient(135deg, #374151 0%, #1f2937 100%)",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom center",
                  backgroundBlendMode: "overlay"
                }}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">The Ultimate Goal</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                    It All Leads to One Thing: <span className="text-primary">Delivering Better Patient Care</span>
                  </h3>
                  <p className="text-white/90 text-lg">
                    When clinicians are unburdened and operations are frictionless, patients get the focused, timely, and attentive care they deserve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyS10StackCards;
