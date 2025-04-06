'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-20 backdrop-blur-md bg-black/20 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">MyPortfolio</h1>
        <div className="space-x-6 text-white text-sm font-medium">
          <Link href="#about">About</Link>
          <Link href="/Projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
}
