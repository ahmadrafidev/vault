import type { ResourceCategoryData } from "@/src/types";

/**
 * Categories data source 
 */

/**
 * Resource categories configuration
 */
export const CATEGORIES_CONFIG: readonly ResourceCategoryData[] = [
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

/**
 * Category metadata for additional context
 */
export const CATEGORY_METADATA = {
  articles: {
    priority: 1,
    color: "blue",
    tags: ["writing", "insights", "knowledge"],
  },
  videos: {
    priority: 2,
    color: "green",
    tags: ["visual", "tutorials", "demonstrations"],
  },
  people: {
    priority: 3,
    color: "purple",
    tags: ["community", "inspiration", "networking"],
  },
  other: {
    priority: 4,
    color: "gray",
    tags: ["miscellaneous", "tools", "utilities"],
  },
} as const;

/**
 * Get all categories
 * @returns Array of all available categories
 */
export function getCategories(): readonly ResourceCategoryData[] {
  return CATEGORIES_CONFIG;
}

/**
 * Get a category by ID
 * @param id - The category ID to find
 * @returns The category data or undefined if not found
 */
export function getCategoryById(id: string): ResourceCategoryData | undefined {
  return CATEGORIES_CONFIG.find(category => category.id === id);
}

/**
 * Get categories sorted by priority
 * @returns Array of categories sorted by their priority order
 */
export function getCategoriesByPriority(): readonly ResourceCategoryData[] {
  return [...CATEGORIES_CONFIG].sort((a, b) => {
    const aPriority = CATEGORY_METADATA[a.id as keyof typeof CATEGORY_METADATA]?.priority ?? 999;
    const bPriority = CATEGORY_METADATA[b.id as keyof typeof CATEGORY_METADATA]?.priority ?? 999;
    return aPriority - bPriority;
  });
}

/**
 * Get category IDs
 * @returns Array of all category IDs
 */
export function getCategoryIds(): string[] {
  return CATEGORIES_CONFIG.map(category => category.id);
}

/**
 * Check if a category exists
 * @param id - The category ID to check
 * @returns True if category exists, false otherwise
 */
export function categoryExists(id: string): boolean {
  return CATEGORIES_CONFIG.some(category => category.id === id);
}

/**
 * Get categories count
 * @returns Total number of categories
 */
export function getCategoriesCount(): number {
  return CATEGORIES_CONFIG.length;
}

/**
 * Get category metadata
 * @param id - The category ID
 * @returns Category metadata or undefined if not found
 */
export function getCategoryMetadata(id: string) {
  return CATEGORY_METADATA[id as keyof typeof CATEGORY_METADATA];
}