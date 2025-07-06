
import React from 'react';
import { Brain, Sparkles, Zap, MessageSquare } from 'lucide-react';

const FloatingAICTA = () => {
  // Get current page URL dynamically
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://s10.ai/';
  const prompt = encodeURIComponent(`Please read from ${currentUrl} so I can ask questions about it.`);
  
  const aiAssistants = [
    {
      name: 'ChatGPT',
      icon: <Brain className="w-8 h-8" />,
      url: `https://chat.openai.com/?q=${prompt}`,
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      name: 'Claude',
      icon: <Sparkles className="w-8 h-8" />,
      url: `https://claude.ai/new?q=${prompt}`,
      color: 'bg-orange-500 hover:bg-orange-600',
    },
    {
      name: 'Gemini',
      icon: <Zap className="w-8 h-8" />,
      url: `https://gemini.google.com/app?q=${prompt}`,
      color: 'bg-gray-600 hover:bg-gray-700',
    },
    {
      name: 'Grok',
      icon: <MessageSquare className="w-8 h-8" />,
      url: `https://x.com/i/grok?q=${prompt}`,
      color: 'bg-black hover:bg-gray-800',
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
            gap: 12px;
        }

        .llm-button {
            width: 50px;
            height: 50px;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            transition: transform 0.3s ease-out, opacity 0.3s ease-out, box-shadow 0.2s ease-in-out;
            cursor: pointer;
            position: relative;
        }

        .llm-button:hover {
            transform: scale(1.08);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
        }

        /* Tooltip styles */
        .llm-button .tooltip {
            position: absolute;
            left: calc(100% + 10px);
            white-space: nowrap;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 0.85rem;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
            pointer-events: none;
        }

        .llm-button:hover .tooltip {
            opacity: 1;
            visibility: visible;
        }

        /* Icon sizing for all buttons */
        .llm-button svg {
            width: 32px;
            height: 32px;
        }

        /* Keep left positioning for all screen sizes */
        @media (max-width: 768px) {
            #floating-llm-container {
                bottom: 20px;
                left: 20px;
            }
        }

        @media (max-width: 480px) {
            #floating-llm-container {
                bottom: 20px;
                left: 15px;
            }
            
            .llm-button {
                width: 45px;
                height: 45px;
            }
            
            .llm-button svg {
                width: 28px;
                height: 28px;
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
