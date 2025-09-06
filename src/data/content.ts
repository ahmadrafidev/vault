/**
 * Content data source for the vault application
 */

import { videosData } from "./content/videos";
import { articlesData } from "./content/articles";
import { peopleData } from "./content/people";
import { otherData } from "./content/other";
import type { ContentItem, ContentType } from "./content/types";

// Re-export types
export type { ContentItem, ContentType } from "./content/types";

/**
 * Content data organized by category
 */
export const CONTENT_DATA: Record<string, ContentItem[]> = {
  videos: videosData,
  articles: articlesData,
  people: peopleData,
  other: otherData,
};

/**
 * Get all content items
 * @returns Array of all content items across all categories
 */
export function getAllContent(): ContentItem[] {
  return Object.values(CONTENT_DATA).flat();
}

/**
 * Get content by category
 * @param category - The category to filter by
 * @returns Array of content items for the specified category
 */
export function getContentByCategory(category: string): ContentItem[] {
  return CONTENT_DATA[category] || [];
}

/**
 * Get featured content
 * @returns Array of all featured content items
 */
export function getFeaturedContent(): ContentItem[] {
  return getAllContent().filter(item => item.featured);
}

/**
 * Get featured content by category
 * @param category - The category to filter by
 * @returns Array of featured content items for the specified category
 */
export function getFeaturedContentByCategory(category: string): ContentItem[] {
  return getContentByCategory(category).filter(item => item.featured);
}

/**
 * Get content by type
 * @param type - The content type to filter by
 * @returns Array of content items of the specified type
 */
export function getContentByType(type: ContentType): ContentItem[] {
  return getAllContent().filter(item => item.type === type);
}

/**
 * Get content by ID
 * @param id - The content ID to find
 * @returns The content item or undefined if not found
 */
export function getContentById(id: string): ContentItem | undefined {
  return getAllContent().find(item => item.id === id);
}

/**
 * Search content by query
 * @param query - Search query
 * @returns Array of content items matching the search query
 */
export function searchContent(query: string): ContentItem[] {
  const lowercaseQuery = query.toLowerCase();
  return getAllContent().filter(item =>
    item.title.toLowerCase().includes(lowercaseQuery) ||
    item.description.toLowerCase().includes(lowercaseQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

/**
 * Get content by tag
 * @param tag - The tag to filter by
 * @returns Array of content items with the specified tag
 */
export function getContentByTag(tag: string): ContentItem[] {
  return getAllContent().filter(item =>
    item.tags.some(itemTag => itemTag.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get recent content
 * @param limit - Number of items to return (default: 10)
 * @returns Array of most recent content items
 */
export function getRecentContent(limit: number = 10): ContentItem[] {
  return getAllContent()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

/**
 * Get content count by category
 * @param category - The category to count
 * @returns Number of content items in the specified category
 */
export function getContentCountByCategory(category: string): number {
  return getContentByCategory(category).length;
}

/**
 * Get all unique tags
 * @returns Array of all unique tags across all content
 */
export function getAllTags(): string[] {
  const tags = getAllContent().flatMap(item => item.tags);
  return [...new Set(tags)].sort();
}

/**
 * Get content statistics
 * @returns Object with various content statistics
 */
export function getContentStats() {
  const allContent = getAllContent();
  return {
    total: allContent.length,
    byCategory: {
      videos: getContentCountByCategory('videos'),
      articles: getContentCountByCategory('articles'),
      people: getContentCountByCategory('people'),
      other: getContentCountByCategory('other'),
    },
    byType: {
      video: allContent.filter(item => item.type === 'video').length,
      article: allContent.filter(item => item.type === 'article').length,
      person: allContent.filter(item => item.type === 'person').length,
      resource: allContent.filter(item => item.type === 'resource').length,
    },
    featured: allContent.filter(item => item.featured).length,
  };
}
