"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from "react-icons/fa";

// Add fallback values to prevent type errors with undefined
const ownerName = process.env.NEXT_PUBLIC_OWNER_NAME || 'Portfolio';
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || '#';
const ownerEmail = process.env.NEXT_PUBLIC_OWNER_EMAIL || '#';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-gray-400 py-24 rounded-t-[32px] relative">
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="Back to top"
      >
        <FaArrowUp className="animate-pulse-slow" />
        <span className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75" style={{ animationDuration: '3s' }}></span>
      </button>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About column */}
          <div className="transform transition duration-500 hover:translate-x-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <h3 className="text-white text-xl font-bold">{ownerName}</h3>
            </div>
            <div className="border-l-2 border-gray-800 pl-4 mb-6">
              <p className="mb-6 text-sm leading-relaxed">
                IT student specializing in web development, cloud computing, and cybersecurity.
                Based in Finland.
              </p>
              <div className="flex space-x-4">
                <Link 
                  href={githubUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full text-white hover:text-blue-400 transition-all hover:scale-110 transform duration-300 shadow-md"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </Link>
                <Link 
                  href="#" // Add your LinkedIn URL if available
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full text-white hover:text-blue-400 transition-all hover:scale-110 transform duration-300 shadow-md"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </Link>
                <Link 
                  href="#" // Add your Twitter URL if available
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full text-white hover:text-blue-400 transition-all hover:scale-110 transform duration-300 shadow-md"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </Link>
                <Link 
                  href={`mailto:${ownerEmail}`}
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full text-white hover:text-blue-400 transition-all hover:scale-110 transform duration-300 shadow-md"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Links column */}
          <div className="transform transition duration-500 hover:translate-x-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <h3 className="text-white text-xl font-bold">Links</h3>
            </div>
            <div className="border-l-2 border-gray-800 pl-4">
              <nav>
                <ul className="space-y-3">
                  <li>
                    <a href="#about" className="hover:text-white transition-colors group flex items-center">
                      <span className="w-0 h-[1px] bg-white inline-block mr-0 group-hover:w-3 group-hover:mr-2 transition-all"></span>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="hover:text-white transition-colors group flex items-center">
                      <span className="w-0 h-[1px] bg-white inline-block mr-0 group-hover:w-3 group-hover:mr-2 transition-all"></span>
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="hover:text-white transition-colors group flex items-center">
                      <span className="w-0 h-[1px] bg-white inline-block mr-0 group-hover:w-3 group-hover:mr-2 transition-all"></span>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#skills-progress" className="hover:text-white transition-colors group flex items-center">
                      <span className="w-0 h-[1px] bg-white inline-block mr-0 group-hover:w-3 group-hover:mr-2 transition-all"></span>
                      Skills Progress
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-white transition-colors group flex items-center">
                      <span className="w-0 h-[1px] bg-white inline-block mr-0 group-hover:w-3 group-hover:mr-2 transition-all"></span>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Contact column */}
          <div className="transform transition duration-500 hover:translate-x-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <h3 className="text-white text-xl font-bold">Contact</h3>
            </div>
            <div className="border-l-2 border-gray-800 pl-4">
              <a
                href={`mailto:${ownerEmail}`}
                className="hover:text-white transition-colors inline-flex items-center gap-2 group bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full shadow-md"
              >
                <FaEnvelope className="text-blue-400 group-hover:scale-110 transition-transform" />
                {ownerEmail}
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {currentYear} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{ownerName}</span>. All rights reserved.</p>
          <p className="mt-4 md:mt-0 text-xs text-gray-500">
            Built with <span className="text-blue-400">Next.js</span>, <span className="text-blue-400">TypeScript</span> and <span className="text-blue-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
} 