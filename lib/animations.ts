// lib/animations.ts
import { Variants } from 'framer-motion';

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const neonPulseVariant: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

export const cardHoverVariant: Variants = {
  hover: {
    y: -10,
    boxShadow: '0 10px 25px -5px rgba(0, 240, 255, 0.4)',
    transition: {
      type: 'spring',
      stiffness: 300
    }
  }
};