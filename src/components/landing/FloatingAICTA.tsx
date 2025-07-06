
import React from 'react';
import { MessageSquare } from 'lucide-react';

const FloatingAICTA = () => {
  // Get current page URL dynamically
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://s10.ai/';
  const prompt = encodeURIComponent(`Please read from ${currentUrl} so I can ask questions about it.`);
  
  const aiAssistants = [
    {
      name: 'ChatGPT',
      icon: <img src="/lovable-uploads/128d9be9-4d18-4262-892a-68adf7b22b6e.png" alt="ChatGPT" className="w-full h-full object-contain" />,
      url: `https://chat.openai.com/?q=${prompt}`,
      color: 'bg-white hover:bg-gray-50',
    },
    {
      name: 'Claude',
      icon: <img src="/lovable-uploads/c2407cd7-f533-4465-aea9-8836d71f670c.png" alt="Claude" className="w-full h-full object-contain" />,
      url: `https://claude.ai/new?q=${prompt}`,
      color: 'bg-white hover:bg-gray-50',
    },
    {
      name: 'Gemini',
      icon: <img src="/lovable-uploads/8a96c07b-d50a-4a07-80cd-1d3f13587c14.png" alt="Gemini" className="w-full h-full object-contain" />,
      url: `https://gemini.google.com/app?q=${prompt}`,
      color: 'bg-white hover:bg-gray-50',
    },
    {
      name: 'Grok',
      icon: <img src="/lovable-uploads/33bd8709-1dcd-44d5-aabd-b7a721dc9928.png" alt="Grok" className="w-full h-full object-contain" />,
      url: `https://x.com/i/grok?q=${prompt}`,
      color: 'bg-white hover:bg-gray-50',
    }
  ];

  const handleRedirect = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <style>{`
        /* Container for the floating action buttons */
        #floating-llm-container {
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
        }

        .llm-button {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            transition: all 0.2s ease;
            cursor: pointer;
            position: relative;
            border: 1px solid rgba(0, 0, 0, 0.1);
            padding: 6px;
        }

        .llm-button:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        /* Tooltip styles - Improved positioning */
        .llm-button .tooltip {
            position: fixed;
            left: 75px;
            top: 50%;
            transform: translateY(-50%);
            white-space: nowrap;
            background: linear-gradient(135deg, #143151 0%, #387E89 100%);
            color: white;
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 500;
            opacity: 0;
            visibility: hidden;
            transition: all 0.2s ease;
            pointer-events: none;
            z-index: 1001;
            box-shadow: 0 4px 12px rgba(20, 49, 81, 0.3);
            min-width: max-content;
        }

        /* Tooltip arrow */
        .llm-button .tooltip::before {
            content: '';
            position: absolute;
            right: 100%;
            top: 50%;
            transform: translateY(-50%);
            border: 6px solid transparent;
            border-right-color: #143151;
        }

        .llm-button:hover .tooltip {
            opacity: 1;
            visibility: visible;
        }

        /* Icon sizing for all buttons - Better fit */
        .llm-button img {
            width: 28px;
            height: 28px;
            object-fit: contain;
            border-radius: 4px;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
            #floating-llm-container {
                bottom: 20px;
                left: 15px;
                gap: 8px;
            }
            
            .llm-button {
                width: 38px;
                height: 38px;
                padding: 5px;
            }
            
            .llm-button img {
                width: 26px;
                height: 26px;
            }

            .llm-button .tooltip {
                left: 60px;
                font-size: 11px;
                padding: 6px 10px;
            }
        }

        @media (max-width: 480px) {
            #floating-llm-container {
                bottom: 15px;
                left: 12px;
                gap: 6px;
            }
            
            .llm-button {
                width: 36px;
                height: 36px;
                padding: 4px;
            }
            
            .llm-button img {
                width: 24px;
                height: 24px;
            }

            .llm-button .tooltip {
                left: 55px;
                font-size: 10px;
                padding: 5px 8px;
            }
        }

        /* Tablet specific adjustments */
        @media (min-width: 769px) and (max-width: 1024px) {
            .llm-button .tooltip {
                left: 70px;
            }
        }

        /* Desktop adjustments for larger screens */
        @media (min-width: 1025px) {
            .llm-button .tooltip {
                left: 80px;
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
    </>
  );
};

export default FloatingAICTA;
