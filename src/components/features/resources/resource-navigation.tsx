"use client";

import type { TabItem } from "@/src/types";
import { PillTabs } from "@/src/components/ui";

interface ResourceNavigationProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function ResourceNavigation({ 
  tabs, 
  activeTab, 
  onTabChange 
}: ResourceNavigationProps) {
  return (
    <PillTabs 
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={onTabChange}
    />
  );
}
