/**
 * Data sources and configurations for the vault application
 */

// Categories data source
export {
  CATEGORIES_CONFIG,
  CATEGORY_METADATA,
  getCategories,
  getCategoryById,
  getCategoriesByPriority,
  getCategoryIds,
  categoryExists,
  getCategoriesCount,
  getCategoryMetadata,
} from "./categories";

export type { ResourceCategoryData } from "../types";

// Content data source
export {
  CONTENT_DATA,
  getAllContent,
  getContentByCategory,
  getFeaturedContent,
  getFeaturedContentByCategory,
  getContentByType,
  getContentById,
  searchContent,
  getContentByTag,
  getRecentContent,
  getContentCountByCategory,
  getAllTags,
  getContentStats,
  type ContentItem,
  type ContentType,
} from "./content";

// Re-export content types
export type {
  VideoContent,
  ArticleContent,
  PersonContent,
  ResourceContent,
} from "./content/types";
