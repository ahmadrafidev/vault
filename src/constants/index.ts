import type { AnimationConfig } from "@/src/types";

// Animation constants
export const ANIMATION_CONFIG: AnimationConfig = {
  easing: 'cubic-bezier(.215, .61, .355, 1)',
  duration: 300,
};

// Resource categories
export const RESOURCE_CATEGORIES_DATA = [
  {
    id: "articles",
    name: "Articles",
    description: "Thought-provoking articles on design and engineering principles, trends, and insights",
    iconName: "FileText" as const,
  },
  {
    id: "videos",
    name: "Videos",
    description: "Curated video content about design engineering, user experience, and creative processes",
    iconName: "PlayCircle" as const,
  },
  {
    id: "people",
    name: "People",
    description: "Inspiring designers, engineers, creators, and innovators shaping the future of design",
    iconName: "Users" as const,
  },
  {
    id: "other",
    name: "Other",
    description: "Miscellaneous resources, tools, and discoveries that don't fit traditional categories",
    iconName: "MoreHorizontal" as const,
  },
] as const;

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
