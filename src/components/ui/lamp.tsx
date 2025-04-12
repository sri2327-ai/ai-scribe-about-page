
"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
  color = "cyan",
}: {
  children: React.ReactNode;
  className?: string;
  color?: "cyan" | "teal";
}) => {
  // Use the proper color based on the prop
  const colorClasses = color === "cyan" 
    ? {
        glow: "bg-cyan-400",
        line: "bg-cyan-400",
        conic: "from-cyan-500 via-transparent to-transparent",
        conicReverse: "from-transparent via-transparent to-cyan-500",
      }
    : {
        glow: "bg-[#1EAEDB]",
        line: "bg-[#1EAEDB]",
        conic: "from-[#1EAEDB] via-transparent to-transparent",
        conicReverse: "from-transparent via-transparent to-[#1EAEDB]",
      };

  return (
    <div
      className={cn(
        "relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* gradient conic shapes */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "40rem" }}
          transition={{ delay: 0.3, duration: 1.2, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={`absolute inset-auto right-1/2 h-72 overflow-visible w-[40rem] bg-gradient-conic ${colorClasses.conic} text-white [--conic-position:from_70deg_at_center_top]`}
        >
          <div className="absolute w-full left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-full left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "40rem" }}
          transition={{ delay: 0.3, duration: 1.2, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={`absolute inset-auto left-1/2 h-72 w-[40rem] bg-gradient-conic ${colorClasses.conicReverse} text-white [--conic-position:from_290deg_at_center_top]`}
        >
          <div className="absolute w-40 h-full right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* shadows and glow */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className={`absolute inset-auto z-50 h-40 w-[36rem] -translate-y-1/2 rounded-full ${colorClasses.glow} opacity-50 blur-3xl`}></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "20rem" }}
          transition={{ delay: 0.3, duration: 1.2, ease: "easeInOut" }}
          className={`absolute inset-auto z-30 h-40 w-64 -translate-y-[6rem] rounded-full ${colorClasses.glow} blur-2xl`}
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "40rem" }}
          transition={{ delay: 0.3, duration: 1.2, ease: "easeInOut" }}
          className={`absolute inset-auto z-50 h-0.5 w-[40rem] -translate-y-[7rem] ${colorClasses.line}`}
        ></motion.div>
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black"></div>
      </div>

      <div className="relative z-50 flex -translate-y-32 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

export function LampSection({
  title,
  children,
  color = "cyan",
}: {
  title: string;
  children: React.ReactNode;
  color?: "cyan" | "teal";
}) {
  return (
    <LampContainer color={color}>
      <motion.h2
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-white to-gray-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl lg:text-7xl"
      >
        {title}
      </motion.h2>
      <div className="mt-10 text-center max-w-3xl">
        {children}
      </div>
    </LampContainer>
  );
}
