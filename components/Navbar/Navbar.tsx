'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-20 bg-black/30 backdrop-blur-lg border-b border-white/10 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* 🖋️ Stylish Signature Name */}
        <h1 className="text-3xl font-bold text-white font-[cursive] tracking-wide italic">
          Himadri Dey
        </h1>

        {/* 🧭 Navigation Links */}
        <div className="space-x-8 text-white text-sm font-semibold">
          <Link
            href="#about"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/Projects"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="#services"
            className="hover:text-pink-400 transition-colors duration-300"
          >
            Services
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
