
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FingerprintScannerIcon } from "./FingerprintScannerIcon";
import { useIsMobile } from "@/hooks/use-mobile";

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
  
  return (
    <div
      className={cn(
        "relative flex justify-center my-8 sm:my-12", 
        className
      )}
    >
      <div className="flex items-center gap-1 sm:gap-2 bg-black/60 border border-gray-700/50 backdrop-blur-xl py-2 px-2 rounded-full shadow-2xl">
        <AnimatePresence>
          {items.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <motion.button 
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-xs sm:text-sm font-medium px-4 py-2.5 sm:px-5 sm:py-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50",
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
                    item.customIcon === "fingerprint" ? 
                    <FingerprintScannerIcon className={cn("w-5 h-5", isActive ? "text-white" : "text-gray-300")} size="" /> : 
                    <i className={cn(item.iconName, "text-xl w-5 h-5 flex items-center justify-center", isActive ? "text-white" : "text-gray-300")}></i>
                  ) : ( 
                    <>
                      {item.customIcon === "fingerprint" && <FingerprintScannerIcon className={cn("w-5 h-5 mr-2", isActive ? "text-white" : "text-gray-300")} size="" />}
                      {item.iconName && !item.customIcon && <i className={cn(item.iconName, "text-xl mr-2", isActive ? "text-white" : "text-gray-300")}></i>}
                      <span>{item.name}</span>
                    </>
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
