/**
 * Content types and interfaces 
 */

/**
 * Content types supported
 */
export type ContentType = 'video' | 'article' | 'person' | 'resource' | 'tool';

/**
 * Base content item structure
 */
export interface BaseContentItem {
  id: string;
  title: string;
  description: string;
  link: string;
  category: string;
  tags: string[];
}

/**
 * Video content item
 */
export interface VideoContent extends BaseContentItem {
  type: 'video';
  duration?: string;
  thumbnail?: string;
  creator: string;
}

/**
 * Article content item
 */
export interface ArticleContent extends BaseContentItem {
  type: 'article';
  author: string;
  thumbnail?: string;
}

/**
 * Person content item
 */
export interface PersonContent extends BaseContentItem {
  type: 'person';
  role: string;
  company?: string;
  location?: string;
  avatar?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

/**
 * General resource content item
 */
export interface ResourceContent extends BaseContentItem {
  type: 'resource';
  resourceType: 'tool' | 'library' | 'tutorial' | 'template' | 'other';
}

/**
 * Tool content item - specialized for design/development tools
 */
export interface ToolContent extends BaseContentItem {
  type: 'tool';
  thumbnail?: string;
  platform?: 'web' | 'desktop' | 'mobile' | 'cross-platform';
  website?: string;
}

export type ContentItem = VideoContent | ArticleContent | PersonContent | ResourceContent | ToolContent;
