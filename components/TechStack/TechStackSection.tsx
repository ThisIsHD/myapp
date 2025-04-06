'use client';

import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';
import { motion } from 'framer-motion';

import {
  FaPython, FaNodeJs, FaReact, FaVuejs, FaGitAlt, FaDocker, FaJava, FaGithub, FaLinkedin, FaAngular,
} from 'react-icons/fa';

import {
  SiMongodb, SiPostgresql, SiExpress, SiFastapi, SiDjango, SiJavascript, SiTypescript, SiTailwindcss,
  SiNextdotjs, SiXampp, SiGooglecloud, SiJquery, SiC, SiCplusplus, SiPostman, SiDotnet, SiFlask,
  SiVite, SiStreamlit,
} from 'react-icons/si';

type Tech = {
  icon: JSX.Element;
  name: string;
  level: number;
  tooltip: string;
};

type CategoryType = 'Frontend' | 'Backend' | 'Tools' | 'Languages';

const categories: Record<CategoryType, Tech[]> = {
  Frontend: [
    { icon: <FaReact color="#61dafb" />, name: 'React', level: 90, tooltip: 'JavaScript library for building UIs' },
    { icon: <SiNextdotjs color="#000000" />, name: 'Next.js', level: 85, tooltip: 'React framework for SSR & SSG' },
    { icon: <FaVuejs color="#42b883" />, name: 'Vue.js', level: 75, tooltip: 'Progressive JavaScript framework' },
    { icon: <SiTailwindcss color="#38bdf8" />, name: 'Tailwind CSS', level: 90, tooltip: 'Utility-first CSS framework' },
    { icon: <SiVite color="#646cff" />, name: 'Vite', level: 80, tooltip: 'Frontend build tool for fast development' },
    { icon: <FaAngular color="#dd1b16" />, name: 'Angular', level: 70, tooltip: 'TypeScript-based web app framework' },
    { icon: <SiJquery color="#0769ad" />, name: 'jQuery', level: 65, tooltip: 'JavaScript library for DOM manipulation' },
  ],
  Backend: [
    { icon: <FaPython color="#3776ab" />, name: 'Python', level: 90, tooltip: 'General-purpose programming language' },
    { icon: <FaNodeJs color="#68a063" />, name: 'Node.js', level: 85, tooltip: 'JavaScript runtime for the backend' },
    { icon: <SiExpress color="#000000" />, name: 'Express.js', level: 80, tooltip: 'Web framework for Node.js' },
    { icon: <SiFastapi color="#009688" />, name: 'FastAPI', level: 85, tooltip: 'Modern Python web framework' },
    { icon: <SiDjango color="#092e20" />, name: 'Django', level: 80, tooltip: 'Python framework for rapid development' },
    { icon: <SiFlask color="#000000" />, name: 'Flask', level: 75, tooltip: 'Lightweight WSGI web app framework' },
    { icon: <SiStreamlit color="#ff4b4b" />, name: 'Streamlit', level: 70, tooltip: 'Python framework for data apps' },
    { icon: <SiMongodb color="#47a248" />, name: 'MongoDB', level: 85, tooltip: 'NoSQL document database' },
    { icon: <SiPostgresql color="#336791" />, name: 'PostgreSQL', level: 80, tooltip: 'Advanced open-source relational DB' },
    { icon: <FaDocker color="#2496ed" />, name: 'Docker', level: 75, tooltip: 'Containerization platform' },
    { icon: <SiPostman color="#ff6c37" />, name: 'Postman', level: 80, tooltip: 'API development tool' },
    { icon: <SiDotnet color="#512bd4" />, name: 'ASP.NET', level: 75, tooltip: 'Microsoft web framework' },
    { icon: <SiXampp color="#fb7a24" />, name: 'XAMPP', level: 70, tooltip: 'Apache distribution for local dev' },
  ],
  Tools: [
    { icon: <FaGitAlt color="#f1502f" />, name: 'Git', level: 90, tooltip: 'Version control system' },
    { icon: <SiGooglecloud color="#4285f4" />, name: 'Google Cloud', level: 80, tooltip: 'Cloud platform by Google' },
    { icon: <FaGithub color="#181717" />, name: 'GitHub', level: 90, tooltip: 'Code hosting platform' },
    { icon: <FaLinkedin color="#0a66c2" />, name: 'LinkedIn', level: 90, tooltip: 'Professional networking' },
  ],
  Languages: [
    { icon: <SiC color="#a8b9cc" />, name: 'C', level: 85, tooltip: 'General-purpose low-level language' },
    { icon: <SiCplusplus color="#00599c" />, name: 'C++', level: 90, tooltip: 'Object-oriented extension of C' },
    { icon: <FaJava color="#007396" />, name: 'Java', level: 80, tooltip: 'Popular object-oriented language' },
    { icon: <SiJavascript color="#f7df1e" />, name: 'JavaScript', level: 90, tooltip: 'Versatile scripting language for the web' },
    { icon: <SiTypescript color="#3178c6" />, name: 'TypeScript', level: 80, tooltip: 'Typed superset of JavaScript' },
  ],
};

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState<CategoryType>('Frontend');

  return (
    <section
      id="techstack"
      className="min-h-screen bg-[#0f0f0f] text-white py-24 px-6 md:px-20 scroll-mt-24"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
          Tech Stack
        </h2>
        <p className="text-white/70 mt-4 max-w-xl mx-auto">
          Tools, languages, and frameworks I use to bring ideas to life.
        </p>
      </div>

      <div className="flex justify-center mb-10 flex-wrap gap-4">
        {Object.keys(categories).map((tab) => (
          <button
            key={tab}
            className={`px-5 py-2 rounded-full border text-sm font-semibold transition duration-300 flex items-center gap-2 ${
              activeTab === tab
                ? 'bg-blue-400 text-black border-blue-400'
                : 'bg-transparent border-white/20 text-white hover:bg-white/10'
            }`}
            onClick={() => setActiveTab(tab as CategoryType)}
            aria-pressed={activeTab === tab}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {categories[activeTab].map((tech, idx) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 p-6 rounded-xl transition-transform duration-300 hover:border-blue-400 hover:shadow-lg"
          >
            <Tippy content={tech.tooltip} placement="top" animation="shift-away" arrow={true}>
              <div className="text-4xl mb-2 cursor-pointer">{tech.icon}</div>
            </Tippy>
            <p className="text-white font-medium mb-2">{tech.name}</p>
            <div className="w-full h-2 bg-white/10 rounded-full">
              <div
                className="h-full bg-blue-400 rounded-full"
                style={{ width: `${tech.level}%` }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
