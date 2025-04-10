"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { FaGithub, FaEnvelope } from "react-icons/fa";

// Add fallback values to prevent type errors with undefined
const ownerName = process.env.NEXT_PUBLIC_OWNER_NAME || 'Portfolio';
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || '#';
const ownerEmail = process.env.NEXT_PUBLIC_OWNER_EMAIL || '#';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle navigation click
  const handleNavClick = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
  }, []);

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
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
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
            onClick={() => handleNavClick("home")}
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
                  onClick={() => handleNavClick("about")}
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
                  onClick={() => handleNavClick("skills")}
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
                  onClick={() => handleNavClick("projects")}
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
                  onClick={() => handleNavClick("skills-progress")}
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
                  onClick={() => handleNavClick("contact")}
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
        </div>
      </div>
    </header>
  );
} 