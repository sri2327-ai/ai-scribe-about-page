
import { useState, useEffect, useCallback, useRef } from 'react';

interface UseExitIntentOptions {
  threshold?: number; // scroll percentage to trigger
  delay?: number; // delay before showing popup
  inactivityTimeout?: number; // milliseconds of inactivity
  enabled?: boolean;
}

export const useExitIntent = (options: UseExitIntentOptions = {}) => {
  const {
    threshold = 70,
    delay = 3000,
    inactivityTimeout = 30000,
    enabled = true
  } = options;

  const [shouldShow, setShouldShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const inactivityTimer = useRef<NodeJS.Timeout>();
  const delayTimer = useRef<NodeJS.Timeout>();

  // Check if popup was already shown in this session
  useEffect(() => {
    const shown = sessionStorage.getItem('exitIntentShown');
    if (shown === 'true') {
      setHasShown(true);
    }
  }, []);

  // Reset inactivity timer
  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimer.current) {
      clearTimeout(inactivityTimer.current);
    }
    
    if (!hasShown && enabled) {
      inactivityTimer.current = setTimeout(() => {
        setShouldShow(true);
      }, inactivityTimeout);
    }
  }, [hasShown, enabled, inactivityTimeout]);

  // Handle mouse leave (exit intent)
  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (
      e.clientY <= 0 && 
      e.relatedTarget === null && 
      !hasShown && 
      enabled
    ) {
      if (delayTimer.current) {
        clearTimeout(delayTimer.current);
      }
      
      delayTimer.current = setTimeout(() => {
        setShouldShow(true);
      }, delay);
    }
  }, [hasShown, enabled, delay]);

  // Handle scroll (excessive scroll)
  const handleScroll = useCallback(() => {
    if (!hasShown && enabled) {
      const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      
      if (scrolled >= threshold) {
        if (delayTimer.current) {
          clearTimeout(delayTimer.current);
        }
        
        delayTimer.current = setTimeout(() => {
          setShouldShow(true);
        }, delay);
      }
    }
    
    // Reset inactivity timer on scroll
    resetInactivityTimer();
  }, [hasShown, enabled, threshold, delay, resetInactivityTimer]);

  // Handle mouse movement (reset inactivity)
  const handleMouseMove = useCallback(() => {
    resetInactivityTimer();
  }, [resetInactivityTimer]);

  // Handle key press (reset inactivity)
  const handleKeyPress = useCallback(() => {
    resetInactivityTimer();
  }, [resetInactivityTimer]);

  useEffect(() => {
    if (!enabled) return;

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('keypress', handleKeyPress);
    document.addEventListener('click', resetInactivityTimer);

    // Start inactivity timer
    resetInactivityTimer();

    return () => {
      // Clean up event listeners
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('keypress', handleKeyPress);
      document.removeEventListener('click', resetInactivityTimer);

      // Clear timers
      if (inactivityTimer.current) {
        clearTimeout(inactivityTimer.current);
      }
      if (delayTimer.current) {
        clearTimeout(delayTimer.current);
      }
    };
  }, [
    enabled,
    handleMouseLeave,
    handleScroll,
    handleMouseMove,
    handleKeyPress,
    resetInactivityTimer
  ]);

  const markAsShown = useCallback(() => {
    setHasShown(true);
    setShouldShow(false);
    sessionStorage.setItem('exitIntentShown', 'true');
  }, []);

  const resetPopup = useCallback(() => {
    setHasShown(false);
    setShouldShow(false);
    sessionStorage.removeItem('exitIntentShown');
  }, []);

  return {
    shouldShow,
    markAsShown,
    resetPopup,
    hasShown
  };
};
