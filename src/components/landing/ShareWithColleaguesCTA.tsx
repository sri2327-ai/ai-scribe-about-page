import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Mail, MessageCircle, Copy, CheckCircle, Sparkles, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ShareWithColleaguesCTA = () => {
  const [copiedText, setCopiedText] = useState('');
  const { toast } = useToast();

  const shareText = `🚀 Just discovered S10.AI - revolutionary ambient AI for healthcare! 

✅ 99.9% accurate clinical documentation
✅ Chart in under 60 seconds  
✅ Works with 100+ EHRs (no API needed)
✅ HIPAA-grade security
✅ 50+ specialties supported

This could eliminate documentation burnout completely. Worth checking out: https://s10.ai`;

  const emailSubject = "Found an amazing AI solution for clinical documentation";
  const emailBody = encodeURIComponent(shareText);

  const aiAssistants = [
    {
      name: "ChatGPT",
      icon: "/lovable-uploads/2ddb185a-4a0d-480a-a8cc-9934b8856753.png",
      url: `https://chatgpt.com/?q=${encodeURIComponent("Help me write a compelling message to share S10.AI with my healthcare colleagues. Make it professional but exciting. Here's what S10.AI does: " + shareText)}`,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Claude",
      icon: "/lovable-uploads/e9ad85da-27c0-412a-a0ff-237e4b9a8ef5.png", 
      url: `https://claude.ai/new?q=${encodeURIComponent("Create a persuasive message I can share with my healthcare colleagues about S10.AI. Make it sound natural and highlight the key benefits: " + shareText)}`,
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Gemini",
      icon: "/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png",
      url: `https://gemini.google.com/app?q=${encodeURIComponent("Help me craft a professional message to recommend S10.AI to my healthcare team. Focus on clinical efficiency and patient care benefits: " + shareText)}`,
      color: "from-blue-500 to-purple-600"
    }
  ];

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopiedText('text');
      toast({
        title: "Copied to clipboard!",
        description: "Share message is ready to paste anywhere.",
      });
      setTimeout(() => setCopiedText(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleEmailShare = () => {
    window.open(`mailto:?subject=${emailSubject}&body=${emailBody}`, '_blank');
  };

  const handleSMSShare = () => {
    window.open(`sms:?body=${encodeURIComponent(shareText)}`, '_blank');
  };

  const handleAIAssistant = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-indigo-200/30 to-pink-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Share the Revolution
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Spread the Word About S10.AI
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help your colleagues discover how ambient AI can eliminate documentation burnout. 
            Share S10.AI and transform healthcare together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Quick Share Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <Share2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Quick Share</h3>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6 border-l-4 border-blue-500">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {shareText}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Button
                  onClick={handleCopyText}
                  variant="outline"
                  className="flex flex-col items-center gap-2 h-auto py-4 hover:bg-blue-50 transition-colors"
                >
                  {copiedText === 'text' ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                  <span className="text-xs">{copiedText === 'text' ? 'Copied!' : 'Copy Text'}</span>
                </Button>

                <Button
                  onClick={handleEmailShare}
                  variant="outline"
                  className="flex flex-col items-center gap-2 h-auto py-4 hover:bg-blue-50 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-xs">Email</span>
                </Button>

                <Button
                  onClick={handleSMSShare}
                  variant="outline"
                  className="flex flex-col items-center gap-2 h-auto py-4 hover:bg-blue-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-xs">SMS</span>
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* AI-Powered Personalization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">AI-Powered Personalization</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Let AI help you craft the perfect message for your colleagues. Get personalized, 
                compelling content that highlights the benefits most relevant to your practice.
              </p>

              <div className="space-y-3">
                {aiAssistants.map((assistant, index) => (
                  <motion.button
                    key={assistant.name}
                    onClick={() => handleAIAssistant(assistant.url)}
                    className="w-full flex items-center gap-4 p-4 bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="flex-shrink-0">
                      <img 
                        src={assistant.icon} 
                        alt={assistant.name}
                        className="w-8 h-8 rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-gray-900">
                        Customize with {assistant.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        Create personalized share message
                      </div>
                    </div>
                    
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </motion.button>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 text-gray-600 text-sm">
            <Users className="w-4 h-4" />
            <span>Join thousands of healthcare providers already using S10.AI</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShareWithColleaguesCTA;