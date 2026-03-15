'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function AboutSection() {
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-[#0f0f0f] text-white py-24 px-6 md:px-20 scroll-mt-24 flex flex-col justify-center"
    >
      <div className="border border-white/30 rounded-3xl p-10 md:p-16 backdrop-blur-sm shadow-xl shadow-white/10 transition-all duration-500 hover:shadow-white/30">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
          ABOUT ME
        </h2>

        {/* Content Block */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Image */}
          <div className="flex-shrink-0">
            <Image
              src="/images/About-Image.jpeg"
              alt="Profile"
              width={500}
              height={500}
              className="rounded-xl object-cover border-2 border-white/20"
            />
          </div>

          {/* Bio & Contact */}
          <div className="text-left max-w-xl text-center md:text-left">
            <h3 className="text-4xl md:text-3xl font-semibold mb-2">
              Hi There! I’m <span className="text-blue-400">Himadri</span>
            </h3>
            <p className="text-lg text-white-300 mb-6">
              I’m a passionate developer with experience in design, frontend, and digital products. I help businesses create sleek, user-friendly experiences with clean code and creativity.
            </p>

            <ul className="mb-6 text-white-400 text-sm space-y-2">
              <li><strong>Phone:</strong> +91 9038005306</li>
              <li><strong>Email:</strong> himadridey165@gmail.com</li>
              <li><strong>Location:</strong> Kolkata, West Bengal, India</li>
              <li><strong>Freelance:</strong> Available</li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center md:justify-start mb-6">
              <a
                href="https://github.com/ThisIsHD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 text-2xl transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/himadri-dey-1505b1236/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 text-2xl transition"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 md:justify-start justify-center" ref={dropdownRef}>
              {/* Contact Me Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowOptions(!showOptions)}
                  className="bg-blue-400 hover:bg-blue-500 text-black font-semibold py-2 px-6 rounded-lg transition duration-300"
                >
                  Contact Me
                </button>
                <div
                  className={`absolute top-full mt-2 w-44 z-10 transform transition-all duration-300 origin-top ${
                    showOptions ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                  } bg-white text-black rounded-lg shadow-lg overflow-hidden`}
                >
                  <a
                    href="mailto:himadridey165@gmail.com"
                    className="block px-4 py-2 hover:bg-blue-100 transition"
                  >
                    📧 By Mail
                  </a>
                  <a
                    href="tel:+919038005306"
                    className="block px-4 py-2 hover:bg-blue-100 transition"
                  >
                    📞 By Call
                  </a>
                </div>
              </div>

              {/* Download Resume Button */}
              <a
                href="/HimadriDey-Resume.pdf"
                download
                className="bg-blue-400 hover:bg-blue-500 text-black font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
