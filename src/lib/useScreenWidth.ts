'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Custom hook that dynamically calculates and returns the width of the screen.
 * Only re-renders when the screen width actually changes.
 * Uses throttling to prevent excessive updates during resize.
 * 
 * @returns {number} The current screen width in pixels
 */
export function useScreenWidth(): number {
  // Initialize with current window width, or 0 if on server
  const [screenWidth, setScreenWidth] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 0;
  });

  // Use ref to track if we have a pending animation frame
  const rafRef = useRef<number | null>(null);

  // Throttled resize handler using requestAnimationFrame
  const handleResize = useCallback(() => {
    // Cancel any pending animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    // Schedule the update for the next animation frame
    rafRef.current = requestAnimationFrame(() => {
      const newWidth = window.innerWidth;
      setScreenWidth(prevWidth => {
        // Only update if width actually changed
        return prevWidth !== newWidth ? newWidth : prevWidth;
      });
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Set initial width
    setScreenWidth(window.innerWidth);

    // Add event listener
    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [handleResize]);

  return screenWidth;
} 