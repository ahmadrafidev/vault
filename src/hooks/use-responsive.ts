"use client";

import { useState, useEffect } from "react";

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
  height: number;
  orientation: 'portrait' | 'landscape';
}

/**
 * Custom hook to handle responsive behavior and mobile optimization
 */
export function useResponsive(): ResponsiveState {
  const [state, setState] = useState<ResponsiveState>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    width: 1024, // Default fallback
    height: 768,
    orientation: 'landscape',
  });

  useEffect(() => {
    const updateResponsiveState = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const orientation = width > height ? 'landscape' : 'portrait';

      setState({
        isMobile: width < BREAKPOINTS.md,
        isTablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
        isDesktop: width >= BREAKPOINTS.lg,
        width,
        height,
        orientation,
      });
    };

    // Set initial state
    updateResponsiveState();

    // Add event listener
    window.addEventListener('resize', updateResponsiveState, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateResponsiveState);
    };
  }, []);

  return state;
}

/**
 * Hook to check if current viewport matches a specific breakpoint
 */
export function useBreakpoint(breakpoint: Breakpoint): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(min-width: ${BREAKPOINTS[breakpoint]}px)`;
    const mediaQuery = window.matchMedia(query);

    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    setMatches(mediaQuery.matches);

    try {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } catch {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [breakpoint]);

  return matches;
}

/**
 * Hook for mobile-first responsive values
 */
export function useResponsiveValue<T>(values: {
  mobile: T;
  tablet?: T;
  desktop?: T;
}): T {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  if (isMobile) return values.mobile;
  if (isTablet && values.tablet) return values.tablet;
  if (isDesktop && values.desktop) return values.desktop;
  
  // Fallback chain
  return values.desktop || values.tablet || values.mobile;
}
