"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';

export default function DemoPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Get the app URL from environment variables with a fallback
  const networkUrl = process.env.NEXT_PUBLIC_VIDEO_TO_TEXT_APP_URL || 'http://192.168.1.106:8025';
  const localhostUrl = 'http://localhost:8025';
  
  // The active URL will be set based on which connection succeeds
  const [activeUrl, setActiveUrl] = useState<string | null>(null);

  // Check connection to the app
  useEffect(() => {
    const checkConnection = async () => {
      try {
        // Try localhost first
        const checkLocalhost = async () => {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 2000);
          try {
            await fetch(`${localhostUrl}/health`, {
              method: 'HEAD',
              signal: controller.signal,
              mode: 'no-cors',
            });
            clearTimeout(timeoutId);
            return true;
          } catch (error) {
            clearTimeout(timeoutId);
            return false;
          }
        };
        
        // Then try configured IP address
        const checkConfiguredAddress = async () => {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 2000);
          try {
            await fetch(`${networkUrl}/health`, {
              method: 'HEAD',
              signal: controller.signal,
              mode: 'no-cors',
            });
            clearTimeout(timeoutId);
            return true;
          } catch (error) {
            clearTimeout(timeoutId);
            return false;
          }
        };
        
        // Check connections
        const isLocalAvailable = await checkLocalhost();
        if (isLocalAvailable) {
          setActiveUrl(localhostUrl);
          setIsConnected(true);
        } else {
          const isNetworkAvailable = await checkConfiguredAddress();
          if (isNetworkAvailable) {
            setActiveUrl(networkUrl);
            setIsConnected(true);
          } else {
            setActiveUrl(null);
            setIsConnected(false);
          }
        }
      } catch (error) {
        console.log("App service not available");
        setIsConnected(false);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkConnection();
  }, [localhostUrl, networkUrl]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center">
          <div className="flex items-center gap-2">
            <Link 
              href="/#projects" 
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
            >
              <FaArrowLeft />
            </Link>
            <h1 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Video to Text Converter Demo
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-10 md:py-16">
            <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">Loading application...</p>
          </div>
        ) : isConnected && activeUrl ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-3 md:p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <p className="flex items-center gap-2 text-sm md:text-base">
                <span className="inline-block w-2 h-2 md:w-2.5 md:h-2.5 bg-green-400 rounded-full"></span>
                Video to Text Converter
              </p>
            </div>
            <div className="h-[500px] md:h-[700px] w-full">
              <iframe
                src={activeUrl}
                className="w-full h-full"
                title="Video to Text Converter"
                sandbox="allow-same-origin allow-scripts allow-forms"
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 text-center max-w-xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                <FaExclamationTriangle className="text-yellow-500 text-xl md:text-2xl" />
              </div>
            </div>
            <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-800 dark:text-gray-200">Application Not Available</h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6">
              The Video to Text Converter application is not currently available. 
              Please try again later or contact the portfolio owner for a demonstration.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <Link
                href="/#projects"
                className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm md:text-base"
              >
                Return to Portfolio
              </Link>
              <button
                onClick={() => window.location.reload()}
                className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="container mx-auto px-4 py-4 md:py-6 mt-auto">
        <p className="text-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
          This interactive demo is embedded directly in the portfolio.
        </p>
      </footer>
    </div>
  );
} 