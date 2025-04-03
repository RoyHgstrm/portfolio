"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function EmbeddedAppDemo() {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [connectionType, setConnectionType] = useState<'local' | 'network' | null>(null);
  
  // Get the app URL from environment variables with a fallback
  const networkUrl = process.env.NEXT_PUBLIC_VIDEO_TO_TEXT_APP_URL || 'http://192.168.1.106:8025';
  const localhostUrl = 'http://localhost:8025';
  
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
          setConnectionType('local');
          setIsConnected(true);
        } else {
          const isNetworkAvailable = await checkConfiguredAddress();
          if (isNetworkAvailable) {
            setConnectionType('network');
            setIsConnected(true);
          } else {
            setConnectionType(null);
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
    <div className="relative p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-6 md:py-10">
          <div className="w-8 md:w-10 h-8 md:h-10 border-3 md:border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3 md:mb-4"></div>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">Checking connection...</p>
        </div>
      ) : isConnected ? (
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-full animate-pulse"></span>
              <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100">
                Application is running
              </h3>
            </div>
          </div>
          
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            The Video to Text Converter app is active and ready to use. Access the demo through the dedicated page below.
          </p>
          
          <div className="flex justify-center">
            <Link 
              href="/demo"
              className="inline-flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-sm text-sm md:text-base"
            >
              Open Demo Page
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center space-x-2">
            <FaTimesCircle className="text-red-500 text-lg md:text-xl" />
            <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100">
              Application is not running
            </h3>
          </div>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            To use the Video to Text Converter, you need to start the application first.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-3 md:p-4 rounded-md text-xs md:text-sm text-gray-700 dark:text-gray-300 font-mono">
            <p>1. Start the Video to Text Converter application</p>
            <p>2. Make sure it's running on port 8025</p>
            <p>3. Refresh this page</p>
          </div>
          <div className="flex justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 rounded-md text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 text-sm md:text-base"
            >
              Try Demo Page Anyway
            </Link>
          </div>
        </div>
      )}
    </div>
  );
} 