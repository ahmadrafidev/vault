import type { AnimationConfig } from "@/src/types";
import { CATEGORIES_CONFIG } from "@/src/data";

// Animation constants
export const ANIMATION_CONFIG: AnimationConfig = {
  easing: 'cubic-bezier(.215, .61, .355, 1)',
  duration: 300,
};

// Resource categories - imported from data source
export const RESOURCE_CATEGORIES_DATA = CATEGORIES_CONFIG;

// Tab navigation
export const RESOURCE_TABS = [
  { id: "videos", label: "Videos" },
  { id: "articles", label: "Articles" },
  { id: "people", label: "People" },
  { id: "other", label: "Other" },
];

// Default active tab
export const DEFAULT_ACTIVE_TAB = "videos";

// Layout
export const PAGE_LAYOUT = {
  maxWidth: "max-w-5xl",
  padding: "px-6 md:px-8",
  spacing: {
    section: "py-8 sm:py-12",
    hero: "mb-6 md:mb-8",
    nav: "mb-4 md:mb-6",
  },
} as const;
