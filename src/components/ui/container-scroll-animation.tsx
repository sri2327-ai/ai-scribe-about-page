
"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div
      className="flex items-center justify-center relative p-2 md:p-10"
      ref={containerRef}
    >
      <div
        className="py-5 md:py-10 w-full relative"
      >
        <Header titleComponent={titleComponent} />
        <Card>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ titleComponent }: { titleComponent: string | React.ReactNode }) => {
  return (
    <div className="div max-w-5xl mx-auto text-center">
      {titleComponent}
    </div>
  );
};

export const Card = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="max-w-5xl -mt-8 mx-auto h-auto min-h-[25rem] md:min-h-[35rem] w-full">
      <div className="h-full w-full overflow-hidden flex items-center justify-center bg-white rounded-xl shadow-lg border border-gray-100">
        {children}
      </div>
    </div>
  );
};

