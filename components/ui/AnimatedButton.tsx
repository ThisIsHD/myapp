'use client';

import { motion } from 'framer-motion';

export function AnimatedButton({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return (
    <motion.button
      className={`relative px-8 py-3 rounded-full font-medium text-white bg-gradient-to-r from-cyan-400 to-purple-500 overflow-hidden ${className}`}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 15px rgba(0, 240, 255, 0.5)'
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      <motion.span
        className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"
      />
      {children}
    </motion.button>
  );
}