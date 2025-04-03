"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaEnvelope, FaArrowRight, FaStar, FaCode, FaServer, FaShieldAlt } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollAnimator from "./components/ScrollAnimator";
import Todo from "./components/Todo";

// Access environment variables with fallback values
const ownerName = process.env.NEXT_PUBLIC_OWNER_NAME || 'Roy';
const ownerRole = process.env.NEXT_PUBLIC_OWNER_ROLE || 'IT Student & Web Developer';
const ownerLocation = process.env.NEXT_PUBLIC_OWNER_LOCATION || 'Finland';
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/RoyHgstrm';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <Navbar />
      
      {/* ScrollAnimator */}
      <ScrollAnimator />

      <main className="pt-24 container mx-auto px-4">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-16 min-h-[90vh]">
          <div className="space-y-8 max-w-xl animate-fade-in">
            <span className="py-1 px-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium shadow-sm">Web Developer</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="block">Hello, I'm</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text animate-gradient shadow-text">{ownerName}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 animate-fade-in-delayed">
              {ownerRole} from {ownerLocation}, focused on creating modern web experiences.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-delayed" style={{ animationDelay: "0.6s" }}>
              <Link 
                href={githubUrl}
                target="_blank"
                className="btn-primary group"
              >
                <FaGithub className="text-xl" />
                GitHub
                <span className="absolute inset-0 w-full h-full bg-white/10 rounded-full scale-0 transition-transform group-hover:scale-100 duration-300"></span>
              </Link>
              <a 
                href="#contact"
                className="btn-secondary group"
              >
                Contact Me
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="relative h-80 w-80 md:h-[450px] md:w-[450px] animate-fade-in-right">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-400/10 dark:to-purple-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="relative h-full w-full rounded-full border-2 border-gray-200 dark:border-gray-800 overflow-hidden animate-float">
              {/* Replace with your actual image, or keep this placeholder */}
              <div className="h-full w-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-80"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-yellow-300 dark:bg-yellow-500 rounded-full opacity-70 animate-float" style={{ animationDelay: "1s" }}></div>
            <div className="absolute -top-8 -left-8 h-16 w-16 bg-pink-400 dark:bg-pink-600 rounded-full opacity-60 animate-float" style={{ animationDelay: "2s" }}></div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 animate-on-scroll">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-10 bg-blue-500 rounded-full"></div>
              <h2 className="text-3xl font-bold relative">
                About Me
              </h2>
            </div>
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <p className="transform transition duration-500 hover:scale-[1.01] modern-card p-6">
                I am an IT student from Finland, majoring in web development, cloud computing, and cybersecurity. 
                Through personal projects and online courses, I have built a solid foundation in these areas 
                and am eager to expand my knowledge and skills further.
              </p>
              <p className="transform transition duration-500 hover:scale-[1.01] modern-card p-6">
                My focus is on applying what I learn to real-world challenges, especially those that can make a positive impact. 
                I am motivated to keep improving as a developer and contribute to projects that promote innovation and practical solutions.
              </p>
              <p className="transform transition duration-500 hover:scale-[1.01] modern-card p-6">
                I am also interested in collaborating with like-minded professionals who value creativity, 
                teamwork, and continuous learning.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 bg-gray-50 dark:bg-gray-900/30 -mx-4 px-4 animate-on-scroll rounded-[32px]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-10 bg-blue-500 rounded-full"></div>
              <h2 className="text-3xl font-bold relative">
                Skills
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="modern-card p-8 animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
                <h3 className="text-xl font-semibold mb-6 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Frontend Development</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                    <span>JavaScript & TypeScript</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 bg-purple-500 rounded-full"></span>
                    <span>Tailwind CSS</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                    <span>UI Libraries & Frameworks</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 bg-purple-500 rounded-full"></span>
                    <span>Responsive Design</span>
                  </li>
                </ul>
              </div>
              <div className="modern-card p-8 animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
                <h3 className="text-xl font-semibold mb-6 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Server Management</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                    <span>Docker & Containerization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 bg-purple-500 rounded-full"></span>
                    <span>Proxmox Virtualization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                    <span>Self-hosted Services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 bg-purple-500 rounded-full"></span>
                    <span>Linux Administration</span>
                  </li>
                </ul>
              </div>
              <div className="modern-card p-8 animate-on-scroll" style={{ transitionDelay: "0.3s" }}>
                <h3 className="text-xl font-semibold mb-6 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Security & Networks</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                    <span>Network Security</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 bg-purple-500 rounded-full"></span>
                    <span>Server Hardening</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                    <span>Home Lab Management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 bg-purple-500 rounded-full"></span>
                    <span>Firewalls & Access Control</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32 animate-on-scroll">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-10 bg-blue-500 rounded-full"></div>
              <h2 className="text-3xl font-bold relative">
                Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
              {/* Project 1 */}
              <div className="modern-card p-5 md:p-8 animate-on-scroll group" style={{ transitionDelay: "0.1s" }}>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  SketchGuess
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                  A real-time multiplayer drawing and guessing game built with Socket.io, React, and Node.js.
                  Players take turns drawing while others try to guess what's being drawn.
                </p>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 p-3 md:p-4 rounded-lg mb-4 md:mb-6 overflow-x-auto">
                  <div className="flex flex-wrap gap-2 min-w-[300px]">
                    <span className="px-2 md:px-3 py-1 bg-blue-200 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs">Socket.io</span>
                    <span className="px-2 md:px-3 py-1 bg-blue-200 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs">React</span>
                    <span className="px-2 md:px-3 py-1 bg-blue-200 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs">Node.js</span>
                    <span className="px-2 md:px-3 py-1 bg-blue-200 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs">Express</span>
                    <span className="px-2 md:px-3 py-1 bg-blue-200 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs">Canvas API</span>
                  </div>
                </div>

                {/* Visual Preview Section */}
                <div className="mb-6 relative p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 md:w-3 h-2 md:h-3 bg-blue-500 rounded-full animate-pulse"></span>
                      <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100">
                        Project in Development
                      </h3>
                    </div>
                    
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                      I'm currently building this interactive multiplayer drawing game where friends can join rooms and compete in real-time.
                    </p>
                    
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg text-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        <span className="font-medium">Current Status:</span>
                      </div>
                      <ul className="space-y-1 pl-4 list-disc text-gray-600 dark:text-gray-400">
                        <li>Real-time drawing synchronization ✓</li>
                        <li>User authentication system ✓</li>
                        <li>Game room management ✓</li>
                        <li>Multiplayer logic - In progress</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <Link href="https://github.com/RoyHgstrm/sketchguess" target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs md:text-sm">
                    <FaGithub className="mr-2" />
                    View Code
                  </Link>
                  <span className="text-gray-500 text-xs md:text-sm">2025</span>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className="modern-card p-5 md:p-8 animate-on-scroll group" style={{ transitionDelay: "0.2s" }}>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Video to Text Converter
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                  A FastAPI application that extracts and transcribes speech from video files using machine learning. 
                  Features include timestamp generation and support for multiple languages.
                </p>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 p-3 md:p-4 rounded-lg mb-4 md:mb-6 overflow-x-auto">
                  <div className="flex flex-wrap gap-2 min-w-[300px]">
                    <span className="px-2 md:px-3 py-1 bg-blue-200 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs">Python</span>
                    <span className="px-2 md:px-3 py-1 bg-blue-200 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs">FastAPI</span>
                    <span className="px-2 md:px-3 py-1 bg-blue-200 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs">ML</span>
                    <span className="px-2 md:px-3 py-1 bg-blue-200 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs">Docker</span>
                    <span className="px-2 md:px-3 py-1 bg-blue-200 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs">FFmpeg</span>
                  </div>
                </div>

                {/* Live Demo Section */}
                <div className="mb-6">
                  <div className="relative p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 md:w-3 h-2 md:h-3 bg-blue-500 rounded-full animate-pulse"></span>
                        <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100">
                          Try the Video to Text Converter
                        </h3>
                      </div>
                      
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                        This app extracts and transcribes speech from video files using machine learning. 
                        Check out the live demo in the dedicated demo page.
                      </p>
                      
                      <div className="flex justify-center mt-2">
                        <Link 
                          href="/demo"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-sm"
                        >
                          <span>View Demo</span>
                          <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <Link href="https://github.com/RoyHgstrm/video-to-text" target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs md:text-sm">
                    <FaGithub className="mr-2" />
                    View Code
                  </Link>
                  <span className="text-gray-500 text-xs md:text-sm">2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Proficiency Section */}
        <section id="skills-progress" className="py-32 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 -mx-4 px-4 animate-on-scroll rounded-[32px]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-10 bg-blue-500 rounded-full"></div>
              <h2 className="text-3xl font-bold relative">
                Skills Proficiency
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-10 text-lg">
              Here's a detailed breakdown of my technical skills and proficiency levels in different areas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Web Development Skills */}
              <div className="modern-card p-8 animated-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                    <FaCode size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Web Development
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {/* JavaScript */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">JavaScript</span>
                      <span className="text-blue-600">80%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  
                  {/* Tailwind CSS */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Tailwind CSS</span>
                      <span className="text-blue-600">90%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  
                  {/* PHP */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">PHP</span>
                      <span className="text-blue-600">85%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  
                  {/* React & Next.js */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">React & Next.js</span>
                      <span className="text-blue-600">75%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Server Management Skills */}
              <div className="modern-card p-8 animated-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400">
                    <FaServer size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    Server Management
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {/* Docker */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Docker</span>
                      <span className="text-purple-600">85%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  
                  {/* Linux Systems */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Linux Systems</span>
                      <span className="text-purple-600">80%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  
                  {/* Proxmox */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Proxmox</span>
                      <span className="text-purple-600">90%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  
                  {/* Self-Hosting */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Self-Hosting</span>
                      <span className="text-purple-600">95%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Network & Security Skills */}
              <div className="modern-card p-8 animated-border md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
                    <FaShieldAlt size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                    Network & Security
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Network Security */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Network Security</span>
                      <span className="text-green-600">85%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  
                  {/* Firewalls & Access Control */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Firewalls & Access Control</span>
                      <span className="text-green-600">80%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  
                  {/* Server Hardening */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Server Hardening</span>
                      <span className="text-green-600">80%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  
                  {/* Home Lab Management */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Home Lab Management</span>
                      <span className="text-green-600">95%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-gray-50 dark:bg-gray-900/30 -mx-4 my-10 px-4 animate-on-scroll rounded-[32px]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-10 bg-blue-500 rounded-full"></div>
              <h2 className="text-3xl font-bold relative">
                Contact
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-12 text-lg max-w-2xl">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="flex flex-col items-center animate-on-scroll">
              <a 
                href="mailto:roy.h@mail.com" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <FaEnvelope className="text-2xl" />
                <span className="text-xl font-medium">roy.h@mail.com</span>
                <FaArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
