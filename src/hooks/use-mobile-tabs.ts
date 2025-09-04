"use client";

import { useResponsive, useResponsiveValue } from "./use-responsive";

interface MobileTabsConfig {
  stackOnMobile?: boolean;
  compactSpacing?: boolean;
  fullWidthOnMobile?: boolean;
}

interface MobileTabsState {
  shouldStack: boolean;
  tabSpacing: string;
  containerWidth: string;
  tabPadding: string;
  fontSize: string;
}

/**
 * Hook to optimize tab behavior for mobile devices
 */
export function useMobileTabs(config: MobileTabsConfig = {}): MobileTabsState {
  const {
    stackOnMobile = true,
    compactSpacing = true,
    fullWidthOnMobile = true,
  } = config;

  const { isMobile, isTablet } = useResponsive();

  const shouldStack = useResponsiveValue({
    mobile: stackOnMobile,
    tablet: false,
    desktop: false,
  });

  const tabSpacing = useResponsiveValue({
    mobile: compactSpacing ? "gap-1" : "gap-2",
    tablet: "gap-2",
    desktop: "gap-2",
  });

  const containerWidth = useResponsiveValue({
    mobile: fullWidthOnMobile ? "w-full" : "w-full max-w-sm",
    tablet: "w-full max-w-md",
    desktop: "w-full max-w-md",
  });

  const tabPadding = useResponsiveValue({
    mobile: compactSpacing ? "px-3 py-1.5" : "px-4 py-2",
    tablet: "px-4 py-2",
    desktop: "px-4 py-2",
  });

  const fontSize = useResponsiveValue({
    mobile: "text-xs",
    tablet: "text-sm",
    desktop: "text-sm",
  });

  return {
    shouldStack,
    tabSpacing,
    containerWidth,
    tabPadding,
    fontSize,
  };
}
