import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TubelightNavBar } from "./TubelightNavBar";
import { Card, CardContent } from "./Card";
import { cn } from "@/lib/utils";
import { 
  Brain, 
  Cog, 
  Link, 
  UserCog, 
  Shield 
} from "lucide-react";

interface AdvantageData {
  id: number;
  name: string;
  iconName?: string;
  customIcon?: string;
  title: string;
  subtitle: string;
  description: string;
  bullets?: string[];
  meansForYou?: string;
  edge: string;
  cta: string;
}

export const AdvantagesSection: React.FC = () => {
  const advantagesData: AdvantageData[] = [
    { 
      id: 0, 
      name: "Medically Wise AI", 
      iconName: "brain", 
      title: "Medically Wise AI", 
      subtitle: "Our Proprietary IPKO™ Engine",
      description: "Tired of AI that needs endless training? At the heart of S10.AI lies our Intelligent Physician Knowledge Orchestrator (IPKO™) engine. Unlike general AI models retrofitted for healthcare, IPKO™ is purpose-built from the ground up with deep medical knowledge and sophisticated machine learning.", 
      meansForYou: "IPKO™ possesses an inherent, structured understanding of complex medical contexts, terminologies, and specialty-specific nuances. It dynamically adapts to your unique dictation style, preferences, and workflow often with minimal to no manual setup.", 
      edge: "Experience superior accuracy, an intuitive user experience, and significantly less time reviewing and editing. Stop training your AI; let our AI understand you.", 
      cta: "Deep Dive into IPKO™" 
    },
    { 
      id: 1, 
      name: "Total Automation", 
      iconName: "cog", 
      title: "Comprehensive Automation", 
      subtitle: "C.R.U.S.H.™ + B.R.A.V.O.™",
      description: "Clinical documentation is only one piece of the puzzle. S10.AI offers a holistic automation strategy to address burnout and inefficiency across your entire practice:", 
      bullets: [
        "C.R.U.S.H. (Clinical Real-time Universal Scribe Helper): Your AI Medical Scribe for meticulous clinical documentation, accurate coding, and seamless in-encounter workflow assistance.", 
        "B.R.A.V.O. (Bot for Real-time Administrative & Virtual Operations): Your AI Staffing Agent that automates the entire patient journey – from intelligent scheduling, automated triage, and pre-visit intake to patient engagement and critical Revenue Cycle Management (RCM) functions."
      ], 
      edge: "This powerful, integrated suite lightens the load for your entire team, delivering true end-to-end practice transformation. Don't just scribe, thrive.", 
      cta: "Explore Full Practice Automation" 
    },
    { 
      id: 2, 
      name: "Data Privacy", 
      customIcon: "shield", 
      title: "Uncompromising Data Privacy", 
      subtitle: "Automatic Data Erasure – Trust, Guaranteed",
      description: "Your patients' trust is sacred, and so is the security of their data. S10.AI is built on an unwavering commitment to data privacy:", 
      meansForYou: "We feature an explicit Automatic Data Erasure policy. Protected Health Information (PHI) is processed for your documentation and then erased after chart completion; it is not stored long-term by S10.AI.", 
      edge: "Critically, we pledge no data retention or use of PHI for general AI model training. This unambiguous commitment offers unparalleled peace of mind, simplifies ethical considerations, and ensures data security you don't have to question.", 
      cta: "Our Data Privacy Commitment" 
    },
    { 
      id: 3, 
      name: "EHR Seamlessness", 
      iconName: "link", 
      title: "Seamless Integration", 
      subtitle: "Universal \"Any EHR\" Compatibility – Your EHR, Supercharged",
      description: "AI tools should simplify, not complicate, your existing setup. S10.AI is engineered for true universal EHR integration:", 
      meansForYou: "Our platform is designed to work seamlessly with any EHR system – yes, even yours. Features like \"autopilot entry\" intelligently populate notes and data directly into your system, providing deep, easily configurable interoperability.", 
      edge: "Say goodbye to cumbersome workarounds and IT headaches. Lower adoption barriers, reduce IT complexity, and ensure a smoother transition to AI-powered efficiency, regardless of your current EHR.", 
      cta: "Check EHR Compatibility" 
    },
    { 
      id: 4, 
      name: "Physician-Centric AI", 
      iconName: "user-cog", 
      title: "Truly Physician-Centric", 
      subtitle: "AI That Learns You – Your Workflow, Your Words, Our AI",
      description: "Experience AI that feels like an extension of yourself, not another system to learn. Our IPKO™ engine powers our \"Physician Workflow Mimicry\":", 
      meansForYou: "S10.AI doesn't just listen; it learns you. It dynamically adapts to your individual dictation patterns, preferred note formats, common orders, and unique clinical style – all without requiring tedious, extensive manual setup.", 
      edge: "Our AI proactively conforms to your established methods. Spend less time configuring and editing, and more time benefiting from an assistant that delivers notes just the way you like them, from the very beginning.", 
      cta: "How S10.AI Learns You" 
    }
  ];
  
  const [activeTab, setActiveTab] = useState(advantagesData[0].name);

  const navBarItems = advantagesData.map(adv => ({
    name: adv.name,
    url: `#advantage-${adv.id}`,
    iconName: adv.iconName,
    customIcon: adv.customIcon,
  }));

  const currentAdvantage = advantagesData.find(adv => adv.name === activeTab);

  const getIcon = (iconName?: string, customIcon?: string, size: number = 24) => {
    if (customIcon === "shield") {
      return <Shield size={size} strokeWidth={1.5} className="text-white" />;
    }
    
    switch(iconName) {
      case "brain":
        return <Brain size={size} strokeWidth={1.5} className="text-white" />;
      case "cog":
        return <Cog size={size} strokeWidth={1.5} className="text-white" />;
      case "link":
        return <Link size={size} strokeWidth={1.5} className="text-white" />;
      case "user-cog":
        return <UserCog size={size} strokeWidth={1.5} className="text-white" />;
      default:
        return null;
    }
  };

  return (
    <section id="advantages" className="py-16 md:py-24 px-4 sm:px-6 bg-black">
      <div className="container mx-auto max-w-5xl"> 
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-medium text-center mb-10 md:mb-16 text-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          The 5 Core Advantages That Set S10.AI Apart
        </motion.h2>

        <TubelightNavBar items={navBarItems} activeTab={activeTab} setActiveTab={setActiveTab} />

        <div id="advantageContentDisplayWrapper" className="mt-8"> 
          <AnimatePresence mode="wait">
            {currentAdvantage && (
              <motion.div
                key={currentAdvantage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="advantage-content-display"
              >
                <Card className="bg-black border border-gray-800/50 shadow-2xl">
                  <CardContent className="relative pt-8 md:pt-10 pb-8 md:pb-10 px-4 sm:px-6 md:px-8">
                    <motion.div 
                      className="flex flex-col items-center text-center mb-8 md:mb-10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <div className="w-16 h-16 flex items-center justify-center mb-5">
                        {getIcon(currentAdvantage.iconName, currentAdvantage.customIcon, 42)}
                      </div>
                      <motion.div className="text-center">
                        <h3 
                          className="text-2xl md:text-3xl font-medium mb-2 text-white"
                        >
                          {currentAdvantage.title.replace("s10.ai", "S10.AI")}
                        </h3>
                        <p className="text-xl text-gray-300">
                          {currentAdvantage.subtitle.replace("s10.ai", "S10.AI")}
                        </p>
                      </motion.div>
                    </motion.div>
                    
                    <motion.div 
                      className="content-container max-w-4xl mx-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <motion.p 
                        className="mb-6 text-gray-300 leading-relaxed text-md md:text-lg text-left"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {currentAdvantage.description.replace("s10.ai", "S10.AI")}
                      </motion.p>
                      
                      {currentAdvantage.bullets && (
                        <motion.ul 
                          className="list-none my-6 text-gray-300 space-y-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          {currentAdvantage.bullets.map((bullet, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start text-sm md:text-base"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                            >
                              <div className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0">
                                {i === 0 ? 
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="text-gray-400">
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                  </svg> : 
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="text-gray-400">
                                    <rect x="3" y="11" width="18" height="10" rx="2" />
                                    <circle cx="12" cy="5" r="2" />
                                    <path d="M12 7v4" />
                                    <line x1="8" y1="16" x2="8" y2="16" />
                                    <line x1="16" y1="16" x2="16" y2="16" />
                                  </svg>
                                }
                              </div>
                              <span>{bullet.replace("s10.ai", "S10.AI")}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                      
                      {currentAdvantage.meansForYou && (
                        <motion.div 
                          className="my-6 p-5 bg-black border border-gray-700/40 rounded-lg shadow-md"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <motion.h4 className="font-medium text-lg mb-3 text-gray-100">
                            What this means for you:
                          </motion.h4>
                          <p className="leading-relaxed text-gray-300 text-sm md:text-base">
                            {currentAdvantage.meansForYou.replace("s10.ai", "S10.AI")}
                          </p>
                        </motion.div>
                      )}
                      
                      <motion.div 
                        className="my-6 p-5 bg-black border border-sky-800/50 rounded-lg shadow-xl"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <motion.h4 className="font-medium text-lg mb-3 text-gray-100 border-b border-sky-800/30 pb-2">
                          The S10.AI Edge:
                        </motion.h4>
                        <p className="leading-relaxed text-gray-300 text-sm md:text-base">
                          {currentAdvantage.edge.replace("s10.ai", "S10.AI")}
                        </p>
                      </motion.div>
                      
                      <motion.div 
                        className="mt-8 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        <motion.a 
                          href="#contact" 
                          className="bg-black border-2 border-white text-white font-medium py-3 px-8 rounded-lg inline-block text-base sm:text-lg transform transition-all duration-300 hover:bg-gray-900"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {currentAdvantage.cta}
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
