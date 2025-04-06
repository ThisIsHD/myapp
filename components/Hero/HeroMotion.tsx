'use client';

import { motion } from 'framer-motion';
import { neonPulseVariant, staggerContainer } from '@/lib/animations';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import Navbar from '@/components/Navbar/Navbar';

export default function HeroMotion() {
  return (
    <motion.section 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {/* ✅ Transparent Navbar */}
      <Navbar />

      {/* ✅ Neon Grid Background */}
      <div className="absolute inset-0 bg-grid-neon opacity-10 z-0" />

      {/* ✅ Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* ✅ Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Image-Overlay.jpeg" // ⬅️ Replace with your actual image path
          alt="Hero Overlay"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* ✅ Hero Content */}
      <motion.div className="text-center z-10">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
          variants={neonPulseVariant}
        >
          Hello, I'm Himadri
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl max-w-2xl mx-auto text-white-300"
          variants={neonPulseVariant}
        >
          Creative developer building immersive digital experiences
        </motion.p>
        
        <motion.div
          variants={neonPulseVariant}
          className="mt-12"
        >
          <AnimatedButton>
            View My Work
          </AnimatedButton>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
