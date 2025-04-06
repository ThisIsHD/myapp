// components/Projects/ProjectCard.tsx
'use client';

import { motion } from 'framer-motion';
import { cardHoverVariant } from '@/lib/animations';

export default function ProjectCard({ title, description, tags }: { 
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <motion.div
      className="bg-primary border border-opacity-20 border-cyan-400 rounded-xl p-6 h-full"
      variants={cardHoverVariant}
      whileHover="hover"
      initial="hidden"
      animate="show"
    >
      <h3 className="text-2xl font-bold mb-2 text-cyan-400">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag}
            className="px-3 py-1 bg-cyan-900 bg-opacity-40 text-cyan-300 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}