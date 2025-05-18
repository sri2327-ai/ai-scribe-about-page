
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Brain, Cog, Link, UserCog, Shield } from "lucide-react";

interface NavItem {
  name: string;
  url?: string;
  iconName?: string;
  customIcon?: string;
}

interface TubelightNavBarProps {
  items: NavItem[];
  className?: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const TubelightNavBar: React.FC<TubelightNavBarProps> = ({ 
  items, 
  className, 
  activeTab, 
  setActiveTab 
}) => {
  const isMobile = useIsMobile();
  
  // Helper function to get the appropriate icon based on iconName or customIcon
  const getIcon = (iconName?: string, customIcon?: string) => {
    if (customIcon === "shield") {
      return <Shield className="w-5 h-5" strokeWidth={1.5} />;
    }
    
    switch (iconName) {
      case "brain":
        return <Brain className="w-5 h-5" strokeWidth={1.5} />;
      case "cog":
        return <Cog className="w-5 h-5" strokeWidth={1.5} />;
      case "link":
        return <Link className="w-5 h-5" strokeWidth={1.5} />;
      case "user-cog":
        return <UserCog className="w-5 h-5" strokeWidth={1.5} />;
      default:
        return null;
    }
  };
  
  return (
    <div
      className={cn(
        "relative flex justify-center my-6 sm:my-8 md:my-12", 
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-center gap-1.5 xs:gap-2 bg-black/60 border border-gray-700/50 backdrop-blur-xl py-2 xs:py-3 px-2 xs:px-3 rounded-full shadow-2xl max-w-full overflow-x-auto scrollbar-hide">
        <AnimatePresence>
          {items.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <motion.button 
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-xs sm:text-sm font-medium px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 sm:py-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50 whitespace-nowrap",
                  isActive ? "text-white" : "text-gray-300 hover:text-gray-100" 
                )}
                style={{ WebkitTapHighlightColor: "transparent" }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center">
                  {isMobile ? ( 
                    <span className="flex items-center justify-center">
                      {getIcon(item.iconName, item.customIcon)}
                    </span>
                  ) : ( 
                    <span>{item.name}</span>
                  )}
                </div>
                
                {isActive && (
                  <motion.div
                    layoutId="tubelight-lamp-advantages" 
                    className="absolute inset-0 w-full rounded-full -z-10 tubelight-active-bg"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-10 h-2 tubelight-glow-main rounded-t-full opacity-90">
                      <div className="absolute w-16 h-10 tubelight-glow-blur1 rounded-full blur-xl -top-4 -left-3 opacity-80" />
                      <div className="absolute w-12 h-8 tubelight-glow-blur2 rounded-full blur-lg -top-3 opacity-70" />
                    </div>
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
