"use client";

import { useState, useRef, useLayoutEffect, useCallback } from "react";
import type { TabItem, TabIndicatorStyle, AnimationConfig } from "@/src/types";
import { calculateIndicatorStyle, findActiveTabIndex, ensureRefArrayLength } from "@/src/utils";

interface UsePillTabsProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
  animationConfig: AnimationConfig;
}

interface UsePillTabsReturn {
  activeTab: string;
  indicatorStyle: TabIndicatorStyle;
  tabContainerRef: React.RefObject<HTMLDivElement | null>;
  triggerRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  setActiveTab: (tabId: string) => void;
  updateIndicator: () => void;
  isAnimating: boolean;
}

export function usePillTabs({
  tabs,
  defaultActiveTab = tabs[0]?.id || "",
  animationConfig,
}: UsePillTabsProps): UsePillTabsReturn {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const [indicatorStyle, setIndicatorStyle] = useState<TabIndicatorStyle>({});
  const [isAnimating, setIsAnimating] = useState(false);
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  triggerRefs.current = ensureRefArrayLength(triggerRefs.current, tabs.length);

  const updateIndicator = useCallback(() => {
    const container = tabContainerRef.current;
    const activeIndex = findActiveTabIndex(tabs, activeTab);
    const activeButton = triggerRefs.current[activeIndex];

    const newStyle = calculateIndicatorStyle(container, activeButton, animationConfig);
    if (newStyle) {
      setIsAnimating(true);
      setIndicatorStyle(newStyle);
      
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
      
      animationTimeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
      }, animationConfig.duration + 100);
    }
  }, [activeTab, tabs, animationConfig]);

  // Position indicator on tab change
  useLayoutEffect(() => {
    updateIndicator();
  }, [activeTab, updateIndicator]);

  // Setup resize observers
  useLayoutEffect(() => {
    const container = tabContainerRef.current;

    const handleResize = () => {
      const activeIndex = findActiveTabIndex(tabs, activeTab);
      const activeButton = triggerRefs.current[activeIndex];
      const newStyle = calculateIndicatorStyle(container, activeButton, animationConfig);

      if (newStyle) {
        setIndicatorStyle(newStyle);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);

    if (container) {
      resizeObserver.observe(container);
    }

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [tabs, activeTab, animationConfig]);

  useLayoutEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  return {
    activeTab,
    indicatorStyle,
    tabContainerRef,
    triggerRefs,
    setActiveTab,
    updateIndicator,
    isAnimating,
  };
}
