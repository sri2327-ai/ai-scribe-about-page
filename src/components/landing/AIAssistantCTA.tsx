
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Sparkles, Brain, Zap } from 'lucide-react';

const AIAssistantCTA = () => {
  const prompt = encodeURIComponent("Please read from https://s10.ai/ so I can ask questions about it.");
  
  const aiAssistants = [
    {
      name: 'ChatGPT',
      description: 'Ask ChatGPT about S10.AI',
      icon: <Brain className="w-6 h-6" />,
      url: `https://chat.openai.com/?q=${prompt}`,
      gradient: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      hoverShadow: 'hover:shadow-green-200/50'
    },
    {
      name: 'Claude',
      description: 'Chat with Claude about S10.AI',
      icon: <Sparkles className="w-6 h-6" />,
      url: `https://claude.ai/new?q=${prompt}`,
      gradient: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      hoverShadow: 'hover:shadow-orange-200/50'
    },
    {
      name: 'Gemini',
      description: 'Explore with Gemini about S10.AI',
      icon: <Zap className="w-6 h-6" />,
      url: `https://gemini.google.com/app?q=${prompt}`,
      gradient: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      hoverShadow: 'hover:shadow-gray-200/50'
    }
  ];

  const handleRedirect = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#143151] mb-6">
              Ask AI About{' '}
              <span className="bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">
                S10.AI
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant answers about our AI healthcare solutions from your favorite AI assistant
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {aiAssistants.map((assistant, index) => (
            <motion.div
              key={assistant.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className={`p-8 ${assistant.bgColor} ${assistant.borderColor} border-2 ${assistant.hoverShadow} hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-transparent via-current to-transparent opacity-10"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${assistant.gradient} text-white mb-6 shadow-lg`}
                  >
                    {assistant.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-[#143151] mb-3">
                    {assistant.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 text-base">
                    {assistant.description}
                  </p>
                  
                  <Button
                    onClick={() => handleRedirect(assistant.url)}
                    className={`w-full bg-gradient-to-r ${assistant.gradient} hover:shadow-lg hover:scale-105 transition-all duration-300 text-white font-semibold py-3 px-6 rounded-full group-hover:shadow-xl`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Ask {assistant.name}
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-8 h-8 text-current" />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            These links will open your chosen AI assistant with a prompt to learn about S10.AI, 
            allowing you to ask detailed questions about our healthcare AI solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AIAssistantCTA;
