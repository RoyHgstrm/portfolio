"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaBars, FaTimes, FaEnvelope } from "react-icons/fa";

const ownerName = process.env.NEXT_PUBLIC_OWNER_NAME || 'Roy';
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/RoyHgstrm';
const ownerEmail = 'roy.h@mail.com';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect and active section
  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Handle active section
      const sections = ["home", "about", "skills", "projects", "skills-progress", "contact"];
      const sectionElements = sections.map(id => 
        id === "home" ? document.documentElement : document.getElementById(id)
      );
      
      // Find which section is currently in view
      const currentPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section) {
          const sectionTop = sections[i] === "home" ? 0 : section.offsetTop;
          if (currentPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass shadow-sm" 
          : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="font-bold text-lg relative group overflow-hidden"
            onClick={() => setActiveSection("home")}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{ownerName}</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-10">
              <li>
                <a 
                  href="#about" 
                  className={`relative group transition-colors hover:text-blue-600 ${
                    activeSection === "about" ? "text-blue-600 font-medium" : ""
                  }`}
                  onClick={() => setActiveSection("about")}
                >
                  About
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full transform transition-transform duration-300 ${
                    activeSection === "about" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  } origin-left`}></span>
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className={`relative group transition-colors hover:text-blue-600 ${
                    activeSection === "skills" ? "text-blue-600 font-medium" : ""
                  }`}
                  onClick={() => setActiveSection("skills")}
                >
                  Skills
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full transform transition-transform duration-300 ${
                    activeSection === "skills" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  } origin-left`}></span>
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={`relative group transition-colors hover:text-blue-600 ${
                    activeSection === "projects" ? "text-blue-600 font-medium" : ""
                  }`}
                  onClick={() => setActiveSection("projects")}
                >
                  Projects
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full transform transition-transform duration-300 ${
                    activeSection === "projects" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  } origin-left`}></span>
                </a>
              </li>
              <li>
                <a 
                  href="#skills-progress" 
                  className={`relative group transition-colors hover:text-blue-600 ${
                    activeSection === "skills-progress" ? "text-blue-600 font-medium" : ""
                  }`}
                  onClick={() => setActiveSection("skills-progress")}
                >
                  Skills Progress
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full transform transition-transform duration-300 ${
                    activeSection === "skills-progress" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  } origin-left`}></span>
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={`relative group transition-colors hover:text-blue-600 ${
                    activeSection === "contact" ? "text-blue-600 font-medium" : ""
                  }`}
                  onClick={() => setActiveSection("contact")}
                >
                  Contact
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full transform transition-transform duration-300 ${
                    activeSection === "contact" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  } origin-left`}></span>
                </a>
              </li>
              <li className="flex space-x-4 ml-4">
                <Link 
                  href={githubUrl}
                  target="_blank"
                  className="text-xl hover:text-blue-600 transition-all hover:scale-110 transform duration-300 bg-gray-100 dark:bg-gray-800 p-2 rounded-full"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </Link>
                <Link 
                  href={`mailto:${ownerEmail}`}
                  className="text-xl hover:text-blue-600 transition-all hover:scale-110 transform duration-300 bg-gray-100 dark:bg-gray-800 p-2 rounded-full"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile navigation button */}
          <button 
            className="md:hidden text-xl focus:outline-none transform transition-all hover:scale-110 duration-300 hover:text-blue-600 z-50 bg-gray-100 dark:bg-gray-800 p-3 rounded-full shadow-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isOpen && (
        <div className="fixed inset-0 glass z-40 md:hidden flex items-center justify-center">
          <nav className="container px-4 py-4 text-center">
            <ul className="space-y-8 text-2xl">
              <li>
                <a 
                  href="#about" 
                  className={`block py-2 hover:text-blue-600 transition-colors relative group ${
                    activeSection === "about" ? "text-blue-600 font-medium" : ""
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection("about");
                  }}
                >
                  About
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full group-hover:left-0 rounded-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className={`block py-2 hover:text-blue-600 transition-colors relative group ${
                    activeSection === "skills" ? "text-blue-600 font-medium" : ""
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection("skills");
                  }}
                >
                  Skills
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full group-hover:left-0 rounded-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={`block py-2 hover:text-blue-600 transition-colors relative group ${
                    activeSection === "projects" ? "text-blue-600 font-medium" : ""
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection("projects");
                  }}
                >
                  Projects
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full group-hover:left-0 rounded-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#skills-progress" 
                  className={`block py-2 hover:text-blue-600 transition-colors relative group ${
                    activeSection === "skills-progress" ? "text-blue-600 font-medium" : ""
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection("skills-progress");
                  }}
                >
                  Skills Progress
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full group-hover:left-0 rounded-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={`block py-2 hover:text-blue-600 transition-colors relative group ${
                    activeSection === "contact" ? "text-blue-600 font-medium" : ""
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection("contact");
                  }}
                >
                  Contact
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full group-hover:left-0 rounded-full"></span>
                </a>
              </li>
              <li className="flex justify-center space-x-8 pt-8">
                <Link 
                  href={githubUrl}
                  target="_blank"
                  className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-blue-600 transition-all transform hover:scale-110 shadow-lg"
                  onClick={() => setIsOpen(false)}
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </Link>
                <Link 
                  href={`mailto:${ownerEmail}`}
                  className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-blue-600 transition-all transform hover:scale-110 shadow-lg"
                  onClick={() => setIsOpen(false)}
                  aria-label="Email"
                >
                  <FaEnvelope className="text-xl" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
} 