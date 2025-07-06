
import React from 'react';

const FloatingAICTADark = () => {
  // Get current page URL dynamically
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://s10.ai/';
  const prompt = encodeURIComponent(`Please read the page from S10.AI at the following link: ${currentUrl}. Summarize the content clearly and concisely, highlighting key features, benefits, and any unique value S10.AI offers on that page. Make sure to include relevant details so I can ask informed questions based on the specific content the customer has shared.`);
  
  const aiAssistants = [
    {
      name: 'ChatGPT',
      icon: <img src="/lovable-uploads/128d9be9-4d18-4262-892a-68adf7b22b6e.png" alt="ChatGPT" className="w-full h-full object-contain" />,
      url: `https://chat.openai.com/?q=${prompt}`,
      color: 'bg-gray-800 hover:bg-gray-700',
    },
    {
      name: 'Claude',
      icon: <img src="/lovable-uploads/c2407cd7-f533-4465-aea9-8836d71f670c.png" alt="Claude" className="w-full h-full object-contain" />,
      url: `https://claude.ai/new?q=${prompt}`,
      color: 'bg-gray-800 hover:bg-gray-700',
    },
    {
      name: 'Gemini',
      icon: <img src="/lovable-uploads/8a96c07b-d50a-4a07-80cd-1d3f13587c14.png" alt="Gemini" className="w-full h-full object-contain" />,
      url: `https://gemini.google.com/app?q=${prompt}`,
      color: 'bg-gray-800 hover:bg-gray-700',
    },
    {
      name: 'Grok',
      icon: <img src="/lovable-uploads/33bd8709-1dcd-44d5-aabd-b7a721dc9928.png" alt="Grok" className="w-full h-full object-contain" />,
      url: `https://x.com/i/grok?q=${prompt}`,
      color: 'bg-gray-800 hover:bg-gray-700',
    }
  ];

  const handleRedirect = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <style>{`
        /* Container for the floating action buttons - Dark theme */
        #floating-llm-container-dark {
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
        }

        .llm-button-dark {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(255, 255, 255, 0.1);
            transition: all 0.2s ease;
            cursor: pointer;
            position: relative;
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 4px;
        }

        .llm-button-dark:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
        }

        /* Tooltip styles - Dark theme with black background */
        .llm-button-dark .tooltip {
            position: absolute;
            left: 45px;
            top: 50%;
            transform: translateY(-50%);
            white-space: nowrap;
            background: #000000;
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
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
            min-width: max-content;
            max-width: 150px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Tooltip arrow - Dark theme */
        .llm-button-dark .tooltip::before {
            content: '';
            position: absolute;
            right: 100%;
            top: 50%;
            transform: translateY(-50%);
            border: 5px solid transparent;
            border-right-color: #000000;
        }

        .llm-button-dark:hover .tooltip {
            opacity: 1;
            visibility: visible;
        }

        /* Icon sizing for all buttons - Dark theme */
        .llm-button-dark img {
            width: 22px;
            height: 22px;
            object-fit: contain;
            border-radius: 3px;
        }

        /* Mobile responsiveness - Dark theme */
        @media (max-width: 768px) {
            #floating-llm-container-dark {
                bottom: 20px;
                left: 15px;
                gap: 6px;
            }
            
            .llm-button-dark {
                width: 30px;
                height: 30px;
                padding: 3px;
            }
            
            .llm-button-dark img {
                width: 20px;
                height: 20px;
            }

            .llm-button-dark .tooltip {
                left: 40px;
                font-size: 10px;
                padding: 5px 8px;
                max-width: 120px;
            }
        }

        @media (max-width: 480px) {
            #floating-llm-container-dark {
                bottom: 15px;
                left: 12px;
                gap: 5px;
            }
            
            .llm-button-dark {
                width: 28px;
                height: 28px;
                padding: 3px;
            }
            
            .llm-button-dark img {
                width: 18px;
                height: 18px;
            }

            .llm-button-dark .tooltip {
                left: 38px;
                font-size: 9px;
                padding: 4px 6px;
                max-width: 100px;
            }
        }

        /* Tablet specific adjustments - Dark theme */
        @media (min-width: 769px) and (max-width: 1024px) {
            .llm-button-dark .tooltip {
                left: 42px;
                max-width: 140px;
            }
        }

        /* Desktop adjustments for larger screens - Dark theme */
        @media (min-width: 1025px) {
            .llm-button-dark .tooltip {
                left: 45px;
                max-width: 160px;
            }
        }

        /* High contrast mode support - Dark theme */
        @media (prefers-contrast: high) {
            .llm-button-dark {
                border: 2px solid;
            }
            
            .llm-button-dark .tooltip {
                border: 2px solid white;
            }
        }

        /* Reduced motion support - Dark theme */
        @media (prefers-reduced-motion: reduce) {
            .llm-button-dark {
                transition: none;
            }
            
            .llm-button-dark:hover {
                transform: none;
            }
        }
      `}</style>

      <div id="floating-llm-container-dark">
        {/* AI Assistant Buttons - Always visible - Dark theme */}
        {aiAssistants.map((assistant) => (
          <div
            key={assistant.name}
            className={`llm-button-dark ${assistant.color}`}
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

export default FloatingAICTADark;
