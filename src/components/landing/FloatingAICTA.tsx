
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare } from 'lucide-react';

const FloatingAICTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Get current page URL dynamically
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://s10.ai/';
  const prompt = encodeURIComponent(`Please read the page from S10.AI at the following link: ${currentUrl}. Summarize the content clearly and concisely, highlighting key features, benefits, and any unique value S10.AI offers on that page. Make sure to include relevant details so I can ask informed questions based on the specific content the customer has shared.`);
  
  const aiAssistants = [
    {
      name: 'ChatGPT',
      icon: <img src="/lovable-uploads/128d9be9-4d18-4262-892a-68adf7b22b6e.png" alt="ChatGPT" className="w-full h-full object-cover rounded-full" />,
      url: `https://chat.openai.com/?q=${prompt}`,
      color: 'bg-white hover:bg-gray-50',
    },
    {
      name: 'Claude',
      icon: <img src="/lovable-uploads/c2407cd7-f533-4465-aea9-8836d71f670c.png" alt="Claude" className="w-full h-full object-cover rounded-full" />,
      url: `https://claude.ai/new?q=${prompt}`,
      color: 'bg-white hover:bg-gray-50',
    },
    {
      name: 'Gemini',
      icon: <img src="/lovable-uploads/8a96c07b-d50a-4a07-80cd-1d3f13587c14.png" alt="Gemini" className="w-full h-full object-cover rounded-full" />,
      url: `https://gemini.google.com/app?q=${prompt}`,
      color: 'bg-white hover:bg-gray-50',
    },
    {
      name: 'Grok',
      icon: <img src="/lovable-uploads/33bd8709-1dcd-44d5-aabd-b7a721dc9928.png" alt="Grok" className="w-full h-full object-cover rounded-full" />,
      url: `https://grok.com/?q=${prompt}`,
      color: 'bg-white hover:bg-gray-50',
    }
  ];

  // Lazy loading with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay loading to avoid blocking initial render
          setTimeout(() => setIsLoaded(true), 100);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.01
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleRedirect = (url: string) => {
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to open URL:', error);
    }
  };

  // Don't render anything until visible
  if (!isVisible) {
    return <div ref={containerRef} style={{ position: 'fixed', bottom: 0, left: 0, width: 1, height: 1, opacity: 0, pointerEvents: 'none' }} />;
  }

  return (
    <>
      {isLoaded && (
        <style>{`
          /* Container for the floating action buttons */
          #floating-llm-container {
              position: fixed;
              bottom: 20px;
              left: 10px;
              z-index: 1000;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 8px;
              will-change: transform;
          }

          .llm-button {
              width: 38px;
              height: 38px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
              transition: all 0.2s ease;
              cursor: pointer;
              position: relative;
              border: 1px solid rgba(0, 0, 0, 0.1);
              padding: 4px;
              contain: paint layout;
          }

          .llm-button:hover {
              transform: scale(1.1);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          }

          /* Tooltip styles - Fixed positioning */
          .llm-button .tooltip {
              position: absolute;
              left: 50px;
              top: 50%;
              transform: translateY(-50%);
              white-space: nowrap;
              background: linear-gradient(135deg, #143151 0%, #387E89 100%);
              color: white;
              padding: 6px 10px;
              border-radius: 6px;
              font-size: 11px;
              font-weight: 500;
              opacity: 0;
              visibility: hidden;
              transition: all 0.2s ease;
              pointer-events: none;
              z-index: 1001;
              box-shadow: 0 4px 12px rgba(20, 49, 81, 0.3);
              min-width: max-content;
              max-width: 150px;
          }

          /* Tooltip arrow */
          .llm-button .tooltip::before {
              content: '';
              position: absolute;
              right: 100%;
              top: 50%;
              transform: translateY(-50%);
              border: 5px solid transparent;
              border-right-color: #143151;
          }

          .llm-button:hover .tooltip {
              opacity: 1;
              visibility: visible;
          }

          /* Icon sizing for all buttons */
          .llm-button img {
              width: 28px;
              height: 28px;
              object-fit: cover;
              border-radius: 50%;
          }

          /* Mobile responsiveness */
          @media (max-width: 768px) {
              #floating-llm-container {
                  bottom: 20px;
                  left: 8px;
                  gap: 6px;
              }
              
              .llm-button {
                  width: 36px;
                  height: 36px;
                  padding: 3px;
              }
              
              .llm-button img {
                  width: 26px;
                  height: 26px;
              }

              .llm-button .tooltip {
                  left: 45px;
                  font-size: 10px;
                  padding: 5px 8px;
                  max-width: 120px;
              }
          }

          @media (max-width: 480px) {
              #floating-llm-container {
                  bottom: 15px;
                  left: 5px;
                  gap: 5px;
              }
              
              .llm-button {
                  width: 34px;
                  height: 34px;
                  padding: 3px;
              }
              
              .llm-button img {
                  width: 24px;
                  height: 24px;
              }

              .llm-button .tooltip {
                  left: 40px;
                  font-size: 9px;
                  padding: 4px 6px;
                  max-width: 100px;
              }
          }

          /* Tablet specific adjustments */
          @media (min-width: 769px) and (max-width: 1024px) {
              .llm-button .tooltip {
                  left: 47px;
                  max-width: 140px;
              }
          }

          /* Desktop adjustments for larger screens */
          @media (min-width: 1025px) {
              .llm-button .tooltip {
                  left: 50px;
                  max-width: 160px;
              }
          }

          /* High contrast mode support */
          @media (prefers-contrast: high) {
              .llm-button {
                  border: 2px solid;
              }
              
              .llm-button .tooltip {
                  border: 1px solid white;
              }
          }

          /* Reduced motion support */
          @media (prefers-reduced-motion: reduce) {
              .llm-button {
                  transition: none;
              }
              
              .llm-button:hover {
                  transform: none;
              }
          }
        `}</style>
      )}

      {isLoaded && (
        <div id="floating-llm-container">
          {/* AI Assistant Buttons - Always visible */}
          {aiAssistants.map((assistant) => (
            <div
              key={assistant.name}
              className={`llm-button ${assistant.color}`}
              onClick={() => handleRedirect(assistant.url)}
              role="button"
              tabIndex={0}
              aria-label={`Ask ${assistant.name} about this page`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleRedirect(assistant.url);
                }
              }}
            >
              {assistant.icon}
              <div className="tooltip">
                Ask {assistant.name}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FloatingAICTA;
