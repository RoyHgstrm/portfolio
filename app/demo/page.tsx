"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';

type ConnectionType = 'local' | 'network' | 'custom' | null;

export default function DemoPage() {
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
        if (!isConnected && !activeUrl) {
          setConnectionType(null);
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
  }, [networkUrl, possibleUrls, isConnected, activeUrl]);

  return (
    <main className="min-h-screen pt-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto py-6 sm:py-8 md:py-12">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
            Video to Text Converter
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            This demo showcases a custom-built application that transcribes speech from videos to text. 
            The app runs on my local network and is accessible through this iframe.
          </p>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-10 sm:py-16">
            <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Checking application status...</p>
          </div>
        ) : isConnected && activeUrl ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <p className="flex items-center gap-2 text-sm sm:text-base">
                <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full"></span>
                Video to Text Converter - Connected via {connectionType === 'local' ? 'localhost' : connectionType === 'network' ? 'local network' : 'custom URL'}
              </p>
            </div>
            <div className="h-[350px] sm:h-[450px] md:h-[550px] lg:h-[700px] w-full">
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
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 text-center max-w-xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                <FaExclamationTriangle className="text-yellow-500 text-xl sm:text-2xl" />
              </div>
            </div>
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">Application Not Available</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
              The Video to Text Converter application is not currently available. 
              Please make sure it&apos;s running on one of the following URLs:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-4 rounded-md text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-mono mb-6 text-left">
              <ul className="ml-4 list-disc">
                <li>localhost:8025</li>
                <li>video-to-text:8025</li>
                <li>{networkUrl.replace('http://', '')}</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )}

        <div className="mt-6 sm:mt-8 space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">About This Project</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              This application is developed with Python and FastAPI backend, featuring a modern React frontend.
              It uses machine learning to transcribe spoken words from video files into text.
            </p>
          </div>
          
          <div className="flex justify-center mt-4 sm:mt-6">
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 text-xs sm:text-sm"
            >
              <FaArrowLeft className="mr-1.5 sm:mr-2" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 