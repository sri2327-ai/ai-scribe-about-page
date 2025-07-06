
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Brain, Sparkles, Zap, MessageCircle, X } from 'lucide-react';

const FloatingAICTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
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
    }
  ];

  const handleRedirect = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
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
            flex-direction: column-reverse;
            align-items: flex-start;
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
            margin-bottom: 0;
        }

        .llm-button:hover {
            transform: scale(1.08);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
        }

        /* Initial state for hidden LLM buttons */
        .llm-button.hidden-llm {
            opacity: 0;
            transform: translateY(0);
            pointer-events: none;
            position: absolute;
            bottom: 0;
            left: 0;
        }

        /* State when the stack is open */
        #floating-llm-container.open .llm-button.hidden-llm {
            opacity: 1;
            pointer-events: auto;
        }

        /* Individual positioning for stacked buttons when open */
        #floating-llm-container.open .llm-button.hidden-llm:nth-child(4) {
            transform: translateY(-70px);
        }

        #floating-llm-container.open .llm-button.hidden-llm:nth-child(3) {
            transform: translateY(-140px);
        }

        #floating-llm-container.open .llm-button.hidden-llm:nth-child(2) {
            transform: translateY(-210px);
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

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
            #floating-llm-container {
                bottom: 80px;
                left: 50%;
                transform: translateX(-50%);
                align-items: center;
            }

            .llm-button .tooltip {
                left: 50%;
                transform: translateX(-50%);
                bottom: calc(100% + 10px);
                top: auto;
            }
        }
      `}</style>

      <div id="floating-llm-container" className={isExpanded ? 'open' : ''}>
        {/* AI Assistant Buttons */}
        {aiAssistants.map((assistant, index) => (
          <div
            key={assistant.name}
            className={`llm-button hidden-llm ${assistant.color}`}
            onClick={() => handleRedirect(assistant.url)}
            style={{
              transitionDelay: isExpanded ? `${index * 0.1}s` : '0s'
            }}
          >
            {assistant.icon}
            <div className="tooltip">
              Ask {assistant.name}
            </div>
          </div>
        ))}

        {/* Main Toggle Button */}
        <div
          className="llm-button bg-gradient-to-r from-[#143151] to-[#387E89]"
          onClick={toggleExpanded}
        >
          {isExpanded ? (
            <X className="w-8 h-8 text-white" />
          ) : (
            <MessageCircle className="w-8 h-8 text-white" />
          )}
          <div className="tooltip">
            AI Assistants
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingAICTA;
