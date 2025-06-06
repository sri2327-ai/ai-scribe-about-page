
import { useState, useEffect, useCallback, useRef } from 'react';

interface UseExitIntentOptions {
  threshold?: number; // scroll percentage to trigger
  delay?: number; // delay before showing popup
  inactivityTimeout?: number; // milliseconds of inactivity
  enabled?: boolean;
}

export const useExitIntent = (options: UseExitIntentOptions = {}) => {
  const {
    threshold = 60,
    delay = 2000,
    inactivityTimeout = 25000,
    enabled = true
  } = options;

  const [shouldShow, setShouldShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const inactivityTimer = useRef<number>();
  const delayTimer = useRef<number>();
  const hasTriggered = useRef(false);
  const scrollTriggered = useRef(false);
  const mouseTriggered = useRef(false);

  // Check if popup was already shown in this session
  useEffect(() => {
    const shown = sessionStorage.getItem('exitIntentShown');
    if (shown === 'true') {
      setHasShown(true);
      hasTriggered.current = true;
    }
  }, []);

  // Reset inactivity timer
  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimer.current) {
      clearTimeout(inactivityTimer.current);
    }
    
    if (!hasShown && !hasTriggered.current && enabled) {
      inactivityTimer.current = window.setTimeout(() => {
        console.log('Inactivity timeout triggered');
        if (!hasTriggered.current) {
          hasTriggered.current = true;
          delayTimer.current = window.setTimeout(() => {
            setShouldShow(true);
          }, delay);
        }
      }, inactivityTimeout);
    }
  }, [hasShown, enabled, inactivityTimeout, delay]);

  // Handle mouse leave (exit intent) - improved detection
  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Only trigger on actual exit intent (mouse leaving through top of viewport)
    const isLeavingTop = e.clientY <= 10 && e.movementY < 0;
    const isLeavingLeft = e.clientX <= 10 && e.movementX < 0;
    const isLeavingRight = e.clientX >= window.innerWidth - 10 && e.movementX > 0;
    
    const isExitIntent = isLeavingTop || isLeavingLeft || isLeavingRight;
    
    if (isExitIntent && !hasShown && !hasTriggered.current && !mouseTriggered.current && enabled) {
      console.log('Exit intent detected:', { x: e.clientX, y: e.clientY, movementX: e.movementX, movementY: e.movementY });
      mouseTriggered.current = true;
      
      if (delayTimer.current) {
        clearTimeout(delayTimer.current);
      }
      
      hasTriggered.current = true;
      delayTimer.current = window.setTimeout(() => {
        setShouldShow(true);
      }, Math.min(delay, 1000)); // Faster response for exit intent
    }
  }, [hasShown, enabled, delay]);

  // Handle scroll (excessive scroll)
  const handleScroll = useCallback(() => {
    if (!hasShown && !hasTriggered.current && !scrollTriggered.current && enabled) {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Calculate scroll percentage more accurately
      const maxScrollTop = scrollHeight - windowHeight;
      const scrolled = maxScrollTop > 0 ? (scrollTop / maxScrollTop) * 100 : 0;
      
      if (scrolled >= threshold) {
        console.log('Scroll threshold reached:', Math.round(scrolled) + '%');
        scrollTriggered.current = true;
        
        if (delayTimer.current) {
          clearTimeout(delayTimer.current);
        }
        
        hasTriggered.current = true;
        delayTimer.current = window.setTimeout(() => {
          setShouldShow(true);
        }, delay);
      }
    }
    
    // Reset inactivity timer on scroll
    resetInactivityTimer();
  }, [hasShown, enabled, threshold, delay, resetInactivityTimer]);

  // Handle mouse movement (reset inactivity)
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Only reset inactivity timer, don't interfere with exit detection
    if (e.clientY > 50) { // Only reset if not at the top edge
      resetInactivityTimer();
    }
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

    // Add event listeners with proper options
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('keypress', handleKeyPress, { passive: true });
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
    hasTriggered.current = true;
    scrollTriggered.current = false;
    mouseTriggered.current = false;
    sessionStorage.setItem('exitIntentShown', 'true');
  }, []);

  const resetPopup = useCallback(() => {
    console.log('Resetting popup');
    setHasShown(false);
    setShouldShow(false);
    hasTriggered.current = false;
    scrollTriggered.current = false;
    mouseTriggered.current = false;
    sessionStorage.removeItem('exitIntentShown');
  }, []);

  return {
    shouldShow,
    markAsShown,
    resetPopup,
    hasShown
  };
};
