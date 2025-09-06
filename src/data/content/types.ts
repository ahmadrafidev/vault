/**
 * Content types and interfaces 
 */

/**
 * Content types supported
 */
export type ContentType = 'video' | 'article' | 'person' | 'resource';

/**
 * Base content item structure
 */
export interface BaseContentItem {
  id: string;
  title: string;
  description: string;
  link: string;
  date: string; 
  category: string;
  tags: string[];
  featured?: boolean;
}

/**
 * Video content item
 */
export interface VideoContent extends BaseContentItem {
  type: 'video';
  platform: 'youtube' | 'vimeo' | 'twitch' | 'other';
  duration: string; 
  thumbnail?: string;
}

/**
 * Article content item
 */
export interface ArticleContent extends BaseContentItem {
  type: 'article';
  author: string;
  readTime: number; // minutes
  platform: 'medium' | 'dev.to' | 'blog' | 'other';
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
  platform?: string;
}

export type ContentItem = VideoContent | ArticleContent | PersonContent | ResourceContent;
