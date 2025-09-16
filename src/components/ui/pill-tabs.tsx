"use client";

import React from "react";
import type { PillTabsProps } from "@/src/types";
import { usePillTabs, useMobileTabs } from "@/src/hooks";
import { ANIMATION_CONFIG } from "@/src/constants";
import { cn } from "@/src/utils";

export function PillTabs({ tabs, activeTab, onTabChange, className }: PillTabsProps) {
  const {
    indicatorStyle,
    tabContainerRef,
    triggerRefs,
    setActiveTab,
    isAnimating,
  } = usePillTabs({
    tabs,
    defaultActiveTab: activeTab,
    animationConfig: ANIMATION_CONFIG,
  });

  const {
    shouldStack,
    tabSpacing,
    containerWidth,
    tabPadding,
    fontSize,
  } = useMobileTabs({
    stackOnMobile: true,
    compactSpacing: true,
    fullWidthOnMobile: true,
  });

  React.useEffect(() => {
    setActiveTab(activeTab);
  }, [activeTab, setActiveTab]);

  return (
    <div className={cn(
      "mb-6",
      shouldStack 
        ? "flex flex-col" 
        : "flex flex-col sm:flex-row sm:items-center"
    )}>
      {/* Pill Tab Container */}
      <div className={cn(containerWidth, className)}>
        <div
          ref={tabContainerRef}
          role="tablist"
          aria-orientation="horizontal"
          aria-label="Resource categories"
          className={cn(
            "relative inline-flex rounded-full overflow-hidden bg-foreground/5 p-1 border border-foreground/20",
            tabSpacing
          )}
        >
          {/* Animated Indicator */}
          <div
            aria-hidden="true"
            className={cn(
              "absolute rounded-full bg-foreground shadow-sm border border-foreground/30 pointer-events-none",
              isAnimating && "shadow-lg"
            )}
            style={{ 
              ...indicatorStyle,
              zIndex: 0,
              backfaceVisibility: 'hidden',
            }}
          />
          
          {/* Tab Buttons */}
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              ref={(el) => {
                triggerRefs.current[idx] = el;
              }}
              onClick={() => onTabChange(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              className={cn(
                'relative font-medium rounded-full z-10 outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2',
                'transition-colors duration-200 ease',
                tabPadding,
                fontSize,
                activeTab === tab.id
                  ? 'bg-foreground text-background'
                  : 'text-foreground/60 hover:text-foreground'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
