"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { FaGithub, FaBars, FaTimes, FaEnvelope } from "react-icons/fa";

// Add fallback values to prevent type errors with undefined
const ownerName = process.env.NEXT_PUBLIC_OWNER_NAME || 'Portfolio';
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || '#';
const ownerEmail = process.env.NEXT_PUBLIC_OWNER_EMAIL || '#';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Toggle body scroll when mobile menu is open
  const toggleBodyScroll = useCallback((shouldLock: boolean) => {
    if (typeof document !== 'undefined') {
      if (shouldLock) {
        // Save current scroll position
        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.overflow = 'hidden';
      } else {
        // Restore scroll position
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, []);

  // Toggle mobile menu
  const toggleMenu = useCallback(() => {
    const newState = !isOpen;
    setIsOpen(newState);
    toggleBodyScroll(newState);
  }, [isOpen, toggleBodyScroll]);

  // Close mobile menu on window resize (to prevent it remaining open on desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
        toggleBodyScroll(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, toggleBodyScroll]);

  // Handle navigation click
  const handleNavClick = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    if (isOpen) {
      setIsOpen(false);
      toggleBodyScroll(false);
    }
  }, [isOpen, toggleBodyScroll]);

  // Clean up body styles on unmount
  useEffect(() => {
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        document.body.style.overflow = '';
      }
    };
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

          {/* Mobile navigation button */}
          <button 
            className="md:hidden text-xl focus:outline-none transform transition-all hover:scale-110 duration-300 hover:text-blue-600 z-[110] bg-gray-100 dark:bg-gray-800 p-3 rounded-full shadow-md"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div 
        className={`fixed inset-0 z-[105] md:hidden transition-all duration-300 ${
          isOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop with blur effect */}
        <div 
          className={`absolute inset-0 bg-gray-900/60 backdrop-blur-md transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
        
        {/* Menu panel with slide-in effect */}
        <div 
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            {/* Menu header with close button */}
            <div className="flex items-center justify-between p-4 pt-6 border-b border-gray-200 dark:border-gray-800">
              <span className="font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Menu
              </span>
              <button 
                onClick={toggleMenu}
                className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>
            
            {/* Menu content */}
            <nav className="px-6 py-8 flex-1">
              <ul className="space-y-4">
                <li>
                  <a 
                    href="#about" 
                    className={`flex items-center py-3 px-4 rounded-lg transition-colors text-base ${
                      activeSection === "about" 
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 font-medium" 
                        : "hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => handleNavClick("about")}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#skills" 
                    className={`flex items-center py-3 px-4 rounded-lg transition-colors text-base ${
                      activeSection === "skills" 
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 font-medium" 
                        : "hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => handleNavClick("skills")}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className={`flex items-center py-3 px-4 rounded-lg transition-colors text-base ${
                      activeSection === "projects" 
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 font-medium" 
                        : "hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => handleNavClick("projects")}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#skills-progress" 
                    className={`flex items-center py-3 px-4 rounded-lg transition-colors text-base ${
                      activeSection === "skills-progress" 
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 font-medium" 
                        : "hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => handleNavClick("skills-progress")}
                  >
                    Skills Progress
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className={`flex items-center py-3 px-4 rounded-lg transition-colors text-base ${
                      activeSection === "contact" 
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 font-medium" 
                        : "hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => handleNavClick("contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            
            {/* Menu footer with social icons */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex justify-around">
                <Link 
                  href={githubUrl}
                  target="_blank"
                  className="flex items-center justify-center w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-blue-600 transition-all transform hover:scale-110 shadow-md"
                  onClick={toggleMenu}
                  aria-label="GitHub"
                >
                  <FaGithub className="text-2xl" />
                </Link>
                <Link 
                  href={`mailto:${ownerEmail}`}
                  className="flex items-center justify-center w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-blue-600 transition-all transform hover:scale-110 shadow-md"
                  onClick={toggleMenu}
                  aria-label="Email"
                >
                  <FaEnvelope className="text-2xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 