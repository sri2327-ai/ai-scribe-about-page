

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
      tooltip: 'Chat with ChatGPT on S10.AI'
    },
    {
      name: 'Claude',
      icon: <img src="/lovable-uploads/c2407cd7-f533-4465-aea9-8836d71f670c.png" alt="Claude" className="w-full h-full object-cover rounded-full" />,
      url: `https://claude.ai/new?q=${prompt}`,
      color: 'bg-white hover:bg-gray-50',
      tooltip: 'Chat with Claude on S10.AI'
    },
    {
      name: 'Gemini',
      icon: <img src="/lovable-uploads/8a96c07b-d50a-4a07-80cd-1d3f13587c14.png" alt="Gemini" className="w-full h-full object-cover rounded-full" />,
      url: `https://gemini.google.com/app?text=${prompt}`,
      color: 'bg-white hover:bg-gray-50',
      tooltip: 'Chat with Gemini on S10.AI'
    },
    {
      name: 'Grok',
      icon: <img src="/lovable-uploads/33bd8709-1dcd-44d5-aabd-b7a721dc9928.png" alt="Grok" className="w-full h-full object-cover rounded-full" />,
      url: `https://x.com/i/grok?text=${prompt}`,
      color: 'bg-white hover:bg-gray-50',
      tooltip: 'Chat with Grok on S10.AI'
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
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '10px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}
    >
      {aiAssistants.map((assistant) => (
        <div
          key={assistant.name}
          className={`relative group ${assistant.color}`}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            cursor: 'pointer',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            padding: '4px',
            transition: 'all 0.2s ease'
          }}
          onClick={() => handleRedirect(assistant.url)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
          }}
        >
          {assistant.icon}
          
          <div
            className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-[1001] min-w-max"
            style={{
              boxShadow: '0 4px 12px rgba(20, 49, 81, 0.3)',
              maxWidth: '200px'
            }}
          >
            {assistant.tooltip}
            <div
              className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0"
              style={{
                borderTop: '5px solid transparent',
                borderBottom: '5px solid transparent',
                borderRight: '5px solid #143151'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingAICTA;

