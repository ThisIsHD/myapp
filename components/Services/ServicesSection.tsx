'use client';

import { motion } from 'framer-motion';
import {
  FaPencilRuler,
  FaCode,
  FaDatabase,
  FaBug,
  FaRocket,
  FaUsers,
} from 'react-icons/fa';

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="min-h-screen bg-[#0f0f0f] text-white py-24 px-6 md:px-20 scroll-mt-24 flex flex-col justify-center"
    >
      <div className="border border-white/30 rounded-3xl p-10 md:p-16 backdrop-blur-sm shadow-xl shadow-white/10 hover:shadow-white/30 transition-all duration-500">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
          SERVICES
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Design & Planning */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-lg hover:shadow-pink-400/20 transition"
          >
            <FaPencilRuler className="text-4xl text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Design & Planning</h3>
            <p className="text-sm text-gray-300">
              Gathering requirements, designing architecture, and modeling software workflows using visual tools.
            </p>
          </motion.div>

          {/* Coding & Implementation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-lg hover:shadow-purple-400/20 transition"
          >
            <FaCode className="text-4xl text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Coding & Implementation</h3>
            <p className="text-sm text-gray-300">
              Writing clean, scalable code, developing APIs, and building responsive web and mobile apps.
            </p>
          </motion.div>

          {/* Database & API Dev */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-lg hover:shadow-blue-400/20 transition"
          >
            <FaDatabase className="text-4xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Database & APIs</h3>
            <p className="text-sm text-gray-300">
              Designing robust databases and building secure APIs for seamless integration across platforms.
            </p>
          </motion.div>

          {/* Testing & QA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-lg hover:shadow-yellow-400/20 transition"
          >
            <FaBug className="text-4xl text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Testing & QA</h3>
            <p className="text-sm text-gray-300">
              Ensuring high-quality code through unit, integration, system, and user acceptance testing.
            </p>
          </motion.div>

          {/* Deployment & Maintenance */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-lg hover:shadow-green-400/20 transition"
          >
            <FaRocket className="text-4xl text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Deployment & Maintenance</h3>
            <p className="text-sm text-gray-300">
              Deploying software to production environments and maintaining it with timely updates and fixes.
            </p>
          </motion.div>

          {/* Collaboration & Communication */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-lg hover:shadow-cyan-400/20 transition"
          >
            <FaUsers className="text-4xl text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
            <p className="text-sm text-gray-300">
              Working closely with cross-functional teams and translating complex concepts for all stakeholders.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
