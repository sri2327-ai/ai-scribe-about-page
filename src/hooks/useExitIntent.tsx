
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
  const inactivityTimer = useRef<number>();
  const delayTimer = useRef<number>();

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
      inactivityTimer.current = window.setTimeout(() => {
        console.log('Inactivity timeout triggered');
        setShouldShow(true);
      }, inactivityTimeout);
    }
  }, [hasShown, enabled, inactivityTimeout]);

  // Handle mouse leave (exit intent) - improved detection
  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // More reliable exit intent detection
    const isLeavingTop = e.clientY <= 5;
    const isLeavingLeft = e.clientX <= 5;
    const isLeavingRight = e.clientX >= window.innerWidth - 5;
    const isExiting = isLeavingTop || isLeavingLeft || isLeavingRight;
    
    if (isExiting && !hasShown && enabled) {
      console.log('Exit intent detected - mouse position:', { x: e.clientX, y: e.clientY });
      if (delayTimer.current) {
        clearTimeout(delayTimer.current);
      }
      
      delayTimer.current = window.setTimeout(() => {
        setShouldShow(true);
      }, delay);
    }
  }, [hasShown, enabled, delay]);

  // Handle scroll (excessive scroll)
  const handleScroll = useCallback(() => {
    if (!hasShown && enabled) {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Calculate scroll percentage more accurately
      const scrolled = (scrollTop / (scrollHeight - windowHeight)) * 100;
      
      if (scrolled >= threshold) {
        console.log('Scroll threshold reached:', scrolled + '%');
        if (delayTimer.current) {
          clearTimeout(delayTimer.current);
        }
        
        delayTimer.current = window.setTimeout(() => {
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

  // Handle click (reset inactivity)
  const handleClick = useCallback(() => {
    resetInactivityTimer();
  }, [resetInactivityTimer]);

  useEffect(() => {
    if (!enabled) return;

    console.log('Setting up exit intent listeners with options:', { threshold, delay, inactivityTimeout });

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('keypress', handleKeyPress);
    document.addEventListener('click', handleClick, { passive: true });

    // Start inactivity timer
    resetInactivityTimer();

    return () => {
      console.log('Cleaning up exit intent listeners');
      // Clean up event listeners
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('keypress', handleKeyPress);
      document.removeEventListener('click', handleClick);

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
    handleClick,
    resetInactivityTimer
  ]);

  const markAsShown = useCallback(() => {
    console.log('Marking popup as shown');
    setHasShown(true);
    setShouldShow(false);
    sessionStorage.setItem('exitIntentShown', 'true');
  }, []);

  const resetPopup = useCallback(() => {
    console.log('Resetting popup');
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
