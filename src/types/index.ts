import { ReactNode, CSSProperties } from 'react';

// Common types
export type IconType = ReactNode;
export type IconName = 'FileText' | 'PlayCircle' | 'Users' | 'MoreHorizontal';

// Resource types
export interface ResourceCategoryData {
  id: string;
  name: string;
  description: string;
  iconName: IconName;
}

export interface ResourceCategory {
  id: string;
  name: string;
  description: string;
  icon: IconType;
}

// Tab types
export interface TabItem {
  id: string;
  label: string;
}

export interface TabIndicatorStyle extends CSSProperties {
  left?: string;
  width?: string;
  height?: string;
  transition?: string;
}

// Animation types
export interface AnimationConfig {
  easing: string;
  duration: number;
}

// Component props types
export interface PillTabsProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export interface EmptyStateProps {
  category: ResourceCategory;
  className?: string;
}

// Layout types
export interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  className?: string;
}
