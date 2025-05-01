
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ContainerScrollProps {
  titleComponent: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  /** The speed of the scroll effect. Higher values mean slower scrolling. Default is 0.5. */
  speed?: number;
}

export const ContainerScroll: React.FC<ContainerScrollProps> = ({
  titleComponent,
  children,
  className = '',
  speed = 0.5,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, speed * 100]
  );

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
    return undefined;
  }, []);

  return (
    <div
      className={`relative w-full overflow-hidden bg-black ${className}`}
      ref={containerRef}
    >
      {isMounted && (
        <div className="sticky top-0 flex h-screen w-full items-center justify-center">
          <div className="relative w-full">
            {/* Title component with parallax effect */}
            <motion.div style={{ y: transform }} className="w-full">
              {titleComponent}
            </motion.div>
          </div>
        </div>
      )}
      {/* Creates the height for the scroll progress */}
      {containerHeight && <div style={{ height: containerHeight + 'px' }} />}
      <div className="absolute top-0 left-0 w-full">
        {children}
      </div>
    </div>
  );
};
