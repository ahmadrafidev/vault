"use client";

import { useResponsive, useResponsiveValue } from "./use-responsive";

interface MobileLayoutConfig {
  reducePadding?: boolean;
  compactSpacing?: boolean;
  adaptiveMaxWidth?: boolean;
}

interface MobileLayoutState {
  containerPadding: string;
  sectionSpacing: string;
  heroSpacing: string;
  navSpacing: string;
  maxWidth: string;
  titleSize: string;
  descriptionSize: string;
}

/**
 * Hook to optimize layout for mobile devices
 */
export function useMobileLayout(config: MobileLayoutConfig = {}): MobileLayoutState {
  const {
    reducePadding = true,
    compactSpacing = true,
    adaptiveMaxWidth = true,
  } = config;

  const { isMobile } = useResponsive();

  const containerPadding = useResponsiveValue({
    mobile: reducePadding ? "px-4" : "px-6",
    tablet: "px-6",
    desktop: "px-8",
  });

  const sectionSpacing = useResponsiveValue({
    mobile: compactSpacing ? "py-6" : "py-8",
    tablet: "py-8 sm:py-10",
    desktop: "py-8 sm:py-12",
  });

  const heroSpacing = useResponsiveValue({
    mobile: compactSpacing ? "mb-4" : "mb-6",
    tablet: "mb-6 md:mb-8",
    desktop: "mb-6 md:mb-8",
  });

  const navSpacing = useResponsiveValue({
    mobile: compactSpacing ? "mb-3" : "mb-4",
    tablet: "mb-4 md:mb-6",
    desktop: "mb-4 md:mb-6",
  });

  const maxWidth = useResponsiveValue({
    mobile: adaptiveMaxWidth ? "max-w-full" : "max-w-5xl",
    tablet: "max-w-4xl",
    desktop: "max-w-5xl",
  });

  const titleSize = useResponsiveValue({
    mobile: "text-2xl",
    tablet: "text-2xl sm:text-3xl",
    desktop: "text-2xl sm:text-3xl md:text-4xl",
  });

  const descriptionSize = useResponsiveValue({
    mobile: "text-sm",
    tablet: "text-base",
    desktop: "text-base",
  });

  return {
    containerPadding,
    sectionSpacing,
    heroSpacing,
    navSpacing,
    maxWidth,
    titleSize,
    descriptionSize,
  };
}
