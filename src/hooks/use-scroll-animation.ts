
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return {
    ref,
    animate: {
      opacity: isInView ? 1 : 0,
      y: isInView ? 0 : 50,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    initial: { opacity: 0, y: 50 }
  };
};
