"use client";

import { useEffect } from 'react';

export default function ScrollAnimator() {
  useEffect(() => {
    // Function to handle scroll animations
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      // Add .is-visible class to elements in viewport
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Check if element is in viewport
        const isVisible = 
          elementTop < window.innerHeight - 100 && 
          elementBottom > 0;
        
        if (isVisible) {
          element.classList.add('is-visible');
        }
      });
    };
    
    // Run once on mount to animate elements already in view
    handleScrollAnimations();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
    };
  }, []);
  
  return null; // This is a utility component that doesn't render anything
} 