'use client';

import { motion } from 'framer-motion';
import { neonPulseVariant, staggerContainer } from '@/lib/animations';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import Navbar from '@/components/Navbar/Navbar';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroMotion() {
  const greetings = ['হ্যালো, আমি হিমাদ্রি', 'नमस्ते, मैं हिमाद्री हूँ', "Hello, I'm Himadri"];
  const [currentText, setCurrentText] = useState('');
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentGreeting = greetings[greetingIndex];

    if (charIndex < currentGreeting.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + currentGreeting[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 100); // Typing speed

      return () => clearTimeout(timeout);
    } else {
      // Wait before switching to next language
      const pause = setTimeout(() => {
        setCurrentText('');
        setCharIndex(0);
        setGreetingIndex((greetingIndex + 1) % greetings.length);
      }, 2000); // Pause after full text

      return () => clearTimeout(pause);
    }
  }, [charIndex, greetingIndex]);

  return (
    <motion.section 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <Navbar />

      <div className="absolute inset-0 bg-grid-neon opacity-10 z-0" />
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Image-Overlay.jpeg"
          alt="Hero Overlay"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <motion.div className="text-center z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
          variants={neonPulseVariant}
        >
          {currentText}
          <span className="animate-pulse">|</span> {/* blinking cursor */}
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl max-w-2xl mx-auto text-white/100"
          variants={neonPulseVariant}
        >
          Creative developer building immersive digital experiences
        </motion.p>
        
        <motion.div variants={neonPulseVariant} className="mt-12">
          <Link href="/Projects">
            <AnimatedButton>
              View My Work
            </AnimatedButton>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
