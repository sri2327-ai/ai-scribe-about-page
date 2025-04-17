
"use client";

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Shield, Lock, Fingerprint } from 'lucide-react';
import styles from '@/styles/RippleEffect.module.css';

interface SecurityIcon {
  id: string;
  component: React.ReactNode;
  name: string;
  top: string;
  left: string;
  size: number;
  delay: number;
}

export const SecurityIconsBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const securityIcons: SecurityIcon[] = [
    { 
      id: 'hipaa', 
      component: <ShieldCheck strokeWidth={1} />, 
      name: 'HIPAA', 
      top: '15%', 
      left: '10%', 
      size: 40, 
      delay: 0 
    },
    { 
      id: 'gdpr', 
      component: <Shield strokeWidth={1} />, 
      name: 'GDPR', 
      top: '25%', 
      left: '85%', 
      size: 50, 
      delay: 0.5 
    },
    { 
      id: 'pipeda', 
      component: <Fingerprint strokeWidth={1} />, 
      name: 'PIPEDA', 
      top: '65%', 
      left: '15%', 
      size: 45, 
      delay: 1
    },
    { 
      id: 'iso', 
      component: <Lock strokeWidth={1} />, 
      name: 'ISO 27001', 
      top: '78%', 
      left: '80%', 
      size: 38, 
      delay: 1.5 
    },
  ];

  useEffect(() => {
    const animateIcons = () => {
      if (!containerRef.current) return;
      
      const icons = containerRef.current.querySelectorAll(`.${styles.securityIcon}`);
      
      icons.forEach((icon) => {
        const randomX = Math.random() * 10 - 5; // -5 to 5
        const randomY = Math.random() * 10 - 5; // -5 to 5
        const duration = 5 + Math.random() * 5; // 5 to 10 seconds
        
        icon.animate(
          [
            { transform: 'translate(0, 0)' },
            { transform: `translate(${randomX}px, ${randomY}px)` },
            { transform: 'translate(0, 0)' }
          ],
          {
            duration: duration * 1000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out'
          }
        );
      });
    };
    
    animateIcons();
    
    return () => {
      if (!containerRef.current) return;
      const icons = containerRef.current.querySelectorAll(`.${styles.securityIcon}`);
      icons.forEach(icon => {
        icon.getAnimations().forEach(anim => anim.cancel());
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {securityIcons.map((icon) => (
        <motion.div
          key={icon.id}
          className={`${styles.securityIcon} group`}
          style={{
            position: 'absolute',
            top: icon.top,
            left: icon.left,
            color: '#fff',
            width: icon.size,
            height: icon.size,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{
            opacity: { delay: icon.delay, duration: 1 },
            scale: { delay: icon.delay, duration: 1 }
          }}
        >
          {icon.component}
          <motion.div 
            className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
            style={{ marginTop: '5px' }}
          >
            {icon.name}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
