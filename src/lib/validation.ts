/**
 * schemas for the vault application
 */

import { z } from 'zod';

// Category validation
export const CategorySchema = z.enum(['articles', 'videos', 'people', 'tools', 'other']);

// URL validation with proper error messages
export const UrlSchema = z
  .string()
  .min(1, 'URL is required')
  .url('Please enter a valid URL')
  .refine(
    (url) => {
      try {
        const parsedUrl = new URL(url);
        return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
      } catch {
        return false;
      }
    },
    'URL must be a valid HTTP or HTTPS link'
  );

// suggestion schema
export const SuggestionSchema = z.object({
  category: CategorySchema,
  url: UrlSchema,
});

// Type inference from schema
export type SuggestionFormData = z.infer<typeof SuggestionSchema>;

// Validation helper functions
export const validateSuggestion = (data: unknown) => {
  return SuggestionSchema.safeParse(data);
};

export const validateUrl = (url: string) => {
  return UrlSchema.safeParse(url);
};

export const validateCategory = (category: string) => {
  return CategorySchema.safeParse(category);
};
