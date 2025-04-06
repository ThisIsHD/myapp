// components/Skills/SkillRadar.tsx
'use client';

import { motion } from 'framer-motion';

export default function SkillRadar({ skills }: { skills: { name: string; level: number }[] }) {
  return (
    <div className="relative w-full max-w-md aspect-square mx-auto">
      {/* Radar grid */}
      <div className="absolute inset-0 border border-cyan-400 border-opacity-30 rounded-full" />
      <div className="absolute inset-1/4 border border-cyan-400 border-opacity-30 rounded-full" />
      
      {/* Skills */}
      {skills.map((skill, i) => {
        const angle = (i * 360) / skills.length;
        const radius = (skill.level / 100) * 45;
        const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
        const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
        
        return (
          <motion.div
            key={skill.name}
            className="absolute w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        );
      })}
    </div>
  );
}