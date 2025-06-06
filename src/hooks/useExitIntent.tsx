
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
  const lastMouseY = useRef(0);
  const lastActivity = useRef(Date.now());

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
    lastActivity.current = Date.now();
    
    if (inactivityTimer.current) {
      clearTimeout(inactivityTimer.current);
    }
    
    if (!hasShown && !hasTriggered.current && enabled) {
      inactivityTimer.current = window.setTimeout(() => {
        const timeSinceLastActivity = Date.now() - lastActivity.current;
        if (timeSinceLastActivity >= inactivityTimeout && !hasTriggered.current) {
          console.log('Inactivity timeout triggered after', timeSinceLastActivity, 'ms');
          hasTriggered.current = true;
          delayTimer.current = window.setTimeout(() => {
            setShouldShow(true);
          }, delay);
        }
      }, inactivityTimeout);
    }
  }, [hasShown, enabled, inactivityTimeout, delay]);

  // Improved mouse leave detection for exit intent
  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Only trigger on rapid upward movement near the top
    const isExitingUp = e.clientY <= 5 && e.movementY < -3;
    const isRapidExit = Math.abs(e.movementY) > 50; // Rapid movement
    const isNearTop = e.clientY <= 20;
    
    const isExitIntent = (isExitingUp || (isRapidExit && isNearTop)) && 
                        !hasShown && 
                        !hasTriggered.current && 
                        !mouseTriggered.current && 
                        enabled;
    
    if (isExitIntent) {
      console.log('Exit intent detected:', { 
        x: e.clientX, 
        y: e.clientY, 
        movementX: e.movementX, 
        movementY: e.movementY,
        isExitingUp,
        isRapidExit,
        isNearTop
      });
      
      mouseTriggered.current = true;
      
      if (delayTimer.current) {
        clearTimeout(delayTimer.current);
      }
      
      hasTriggered.current = true;
      delayTimer.current = window.setTimeout(() => {
        setShouldShow(true);
      }, Math.min(delay, 500)); // Faster response for exit intent
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

  // Handle mouse movement with better tracking
  const handleMouseMove = useCallback((e: MouseEvent) => {
    lastMouseY.current = e.clientY;
    
    // Only reset inactivity if mouse moved significantly
    const movement = Math.abs(e.movementX) + Math.abs(e.movementY);
    if (movement > 2) {
      resetInactivityTimer();
    }
  }, [resetInactivityTimer]);

  // Handle user interactions
  const handleUserInteraction = useCallback(() => {
    resetInactivityTimer();
  }, [resetInactivityTimer]);

  // Handle visibility change to pause/resume timers
  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      if (inactivityTimer.current) {
        clearTimeout(inactivityTimer.current);
      }
    } else {
      resetInactivityTimer();
    }
  }, [resetInactivityTimer]);

  useEffect(() => {
    if (!enabled) return;

    console.log('Setting up exit intent listeners with options:', { threshold, delay, inactivityTimeout });

    // Add event listeners with proper options
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('keydown', handleUserInteraction, { passive: true });
    document.addEventListener('click', handleUserInteraction, { passive: true });
    document.addEventListener('touchstart', handleUserInteraction, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Start inactivity timer
    resetInactivityTimer();

    return () => {
      console.log('Cleaning up exit intent listeners');
      // Clean up event listeners
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

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
    handleUserInteraction,
    handleVisibilityChange,
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
    
    // Clear timers when popup is shown
    if (inactivityTimer.current) {
      clearTimeout(inactivityTimer.current);
    }
    if (delayTimer.current) {
      clearTimeout(delayTimer.current);
    }
  }, []);

  const resetPopup = useCallback(() => {
    console.log('Resetting popup');
    setHasShown(false);
    setShouldShow(false);
    hasTriggered.current = false;
    scrollTriggered.current = false;
    mouseTriggered.current = false;
    sessionStorage.removeItem('exitIntentShown');
    
    // Clear timers
    if (inactivityTimer.current) {
      clearTimeout(inactivityTimer.current);
    }
    if (delayTimer.current) {
      clearTimeout(delayTimer.current);
    }
    
    // Restart inactivity timer if enabled
    if (enabled) {
      resetInactivityTimer();
    }
  }, [enabled, resetInactivityTimer]);

  return {
    shouldShow,
    markAsShown,
    resetPopup,
    hasShown
  };
};
