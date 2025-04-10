"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaTimesCircle } from 'react-icons/fa';

type ConnectionType = 'local' | 'network' | 'custom' | null;

export default function EmbeddedAppDemo() {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [connectionType, setConnectionType] = useState<ConnectionType>(null);
  const [activeUrl, setActiveUrl] = useState<string | null>(null);
  
  // Get the app URL from environment variables with a fallback
  const networkUrl = process.env.NEXT_PUBLIC_VIDEO_TO_TEXT_APP_URL || 'http://192.168.1.106:8025';
  // Define possible URLs to check
  const possibleUrls = [
    { type: 'local' as ConnectionType, url: 'http://localhost:8025' },
    { type: 'network' as ConnectionType, url: networkUrl },
    { type: 'custom' as ConnectionType, url: 'http://video-to-text:8025' }
  ];
  
  // Check connection to the app
  useEffect(() => {
    const checkConnection = async () => {
      try {
        // Helper function to check a URL with timeout
        const checkUrl = async (url: string) => {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 2000);
          try {
            await fetch(`${url}/health`, {
              method: 'HEAD',
              signal: controller.signal,
              mode: 'no-cors',
            });
            clearTimeout(timeoutId);
            return true;
          } catch (_) {
            clearTimeout(timeoutId);
            return false;
          }
        };
        
        // Check all possible URLs
        for (const endpoint of possibleUrls) {
          const isAvailable = await checkUrl(endpoint.url);
          if (isAvailable) {
            setConnectionType(endpoint.type);
            setActiveUrl(endpoint.url);
            setIsConnected(true);
            break;
          }
        }
        
        // If none of the URLs work, set as not connected
        if (!isConnected) {
          setConnectionType(null);
          setActiveUrl(null);
          setIsConnected(false);
        }
      } catch (_) {
        console.log("App service not available");
        setIsConnected(false);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkConnection();
  }, [networkUrl, isConnected, possibleUrls]);

  return (
    <div className="relative p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-4 md:py-6">
          <div className="w-6 md:w-8 h-6 md:h-8 border-2 md:border-3 border-blue-500 border-t-transparent rounded-full animate-spin mb-2 md:mb-3"></div>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Checking connection...</p>
        </div>
      ) : isConnected ? (
        <div className="space-y-2 md:space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></span>
              <h3 className="text-sm md:text-base font-medium text-gray-900 dark:text-gray-100">
                Application is running
              </h3>
            </div>
            <div className="text-[10px] md:text-xs bg-gray-100 dark:bg-gray-700 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full text-gray-600 dark:text-gray-300">
              {connectionType === 'local' ? 'localhost' : 
               connectionType === 'network' ? 'network' : 'custom'}
            </div>
          </div>
          
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
            The Video to Text Converter app is active and ready to use. Access the demo through the dedicated page below.
          </p>
          
          <div className="flex justify-center mt-2 md:mt-3">
            <Link 
              href="/demo"
              className="inline-flex items-center justify-center px-2.5 py-1 md:px-4 md:py-2 rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-sm text-xs md:text-sm"
            >
              Open Demo Page
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-2 md:space-y-4">
          <div className="flex items-center space-x-2">
            <FaTimesCircle className="text-red-500 text-sm md:text-lg" />
            <h3 className="text-sm md:text-base font-medium text-gray-900 dark:text-gray-100">
              Application is not running
            </h3>
          </div>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
            To use the Video to Text Converter, you need to start the application first.
            The app should be running on port 8025.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-2 md:p-3 rounded-md text-[11px] md:text-xs text-gray-700 dark:text-gray-300 font-mono">
            <p>Checked URLs:</p>
            <ul className="ml-3 md:ml-4 list-disc text-[10px] md:text-xs">
              <li>localhost:8025</li>
              <li>video-to-text:8025</li>
              <li>{networkUrl.replace('http://', '')}</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-2.5 py-1 md:px-4 md:py-2 rounded-md text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 text-xs md:text-sm"
            >
              Try Demo Page Anyway
            </Link>
          </div>
        </div>
      )}
    </div>
  );
} 