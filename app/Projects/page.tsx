'use client';

import Link from 'next/link';
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiPostgresql, SiRedis,
  SiAmazon, SiDocker, SiKubernetes, SiAuth0, SiExpress, SiThreedotjs, SiGithub
} from 'react-icons/si';

const techIcons: Record<string, JSX.Element> = {
  React: <SiReact className="text-sky-400" />,
  'Next.js': <SiNextdotjs className="text-white" />,
  'Node.js': <SiNodedotjs className="text-green-400" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  PostgreSQL: <SiPostgresql className="text-blue-400" />,
  Redis: <SiRedis className="text-red-400" />,
  AWS: <SiAmazon className="text-yellow-400" />,
  Docker: <SiDocker className="text-blue-300" />,
  Kubernetes: <SiKubernetes className="text-blue-400" />,
  OAuth2: <SiAuth0 className="text-indigo-400" />,
  Express: <SiExpress className="text-gray-400" />,
  'Three.js': <SiThreedotjs className="text-yellow-200" />,
  'NASA API': <SiGithub className="text-white" />,
};

const projects = [
  {
    name: 'Citizen’s Advocate - Personalized Complaint Portal',
    description:
      `• Built with MERN stack (MongoDB, Express.js, React, Node.js) and styled using Tailwind CSS for a responsive, modern UI.
• Implements RESTful API architecture for complaint submission and status tracking across multiple government portals.
• Integrated Twilio API for real-time SMS/WhatsApp updates to users and automated authority notifications.
• Uses MongoDB for structured complaint storage and efficient querying with indexing for performance optimization.`,
    github: 'https://github.com/yourusername/citizens-advocate',
    live: 'https://citizens-advocate.vercel.app',
    tech: ['React','Express', 'Node.js', 'MongoDB', 'Docker' , 'Kubernetes','OAuth2'],
  },
  {
    name: 'Orrery Web App',
    description: `• Built with Three.js for rendering interactive 3D planetary models with orbital animations and real-time spatial scaling.
• Integrated NASA Open APIs (APOD, EPIC, and NeoWs) to fetch live astronomical data and enrich celestial object information.
• Uses React for component-based UI structure and state management of planetary interactions and tooltips.
• Implements responsive design and optimized asset loading using dynamic imports and lazy loading techniques.`,
    github: 'https://github.com/yourusername/solar-system-explorer',
    live: 'https://solar-explorer.vercel.app',
    tech: ['Three.js', 'React','Express', 'Node.js' , 'MongoDB', 'NASA API'],
  },
  {
    name: 'MedAssist- Medical Assistance',
    description:
      `• Developed entirely using Next.js with server-side rendering (SSR) and API routes for seamless full-stack functionality.
• Implements a real-time appointment scheduling system using WebSockets (Socket.io) for instant updates and conflict resolution.
• Integrated push notifications and email alerts using Firebase Cloud Messaging (FCM) and Nodemailer for timely reminders.
• Utilizes Tailwind CSS for responsive design and Prisma ORM for type-safe database access and scheduling logic.`,
    github: 'https://github.com/yourusername/citizens-advocate',
    live: 'https://citizens-advocate.vercel.app',
    tech: ['Next.js'],
  },
   {
    name: 'MediChain —  Medical Record System',
    description: `• Built using MERN/ERN stack with SQL and Redis for high-performance data handling.
• Offers passkey-based secure access and QR code sharing of medical records.
• Implements RBAC for patients, doctors, and hospitals.
• End-to-end encryption using AES-256 and RSA hybrid models.
• RESTful API architecture with audit-logged endpoints using OAuth2.
• PostgreSQL/MySQL + MongoDB for metadata & Redis for caching.
• Deployed on AWS/GCP with autoscaling via Docker and Kubernetes.`,

    github: 'https://github.com/yourusername/medi-chain',
    live: 'https://medi-chain.in',
    tech: [
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'AWS',
      'Docker',
      'Kubernetes',
      'OAuth2',
    ],
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-6 py-24 md:px-20 bg-[#0f0f0f] text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
          Projects
        </h2>
        <p className="text-white/100 mt-4 max-w-xl mx-auto">
          A collection of my favorite projects — built with passion, fueled by curiosity.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-black/5 border border-white/50 p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold mb-4 text-blue-300">{project.name}</h3>

            <p className="text-sm whitespace-pre-line text-white/100">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech?.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-white/10 border border-white/20"
                >
                  {techIcons[tech] ?? <span>🚀</span>}
                  {tech}
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-4">
              <Link
                href={project.github}
                className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white font-medium text-sm"
                target="_blank"
              >
                GitHub
              </Link>
              <Link
                href={project.live}
                className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-white font-medium text-sm"
                target="_blank"
              >
                Live Demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
