"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Clock, User, Play, FileText, Users, Wrench, Loader2 } from "lucide-react";
import { useState } from "react";

import type { ContentItem } from "@/src/data";
import { cn } from "@/src/utils";

interface ContentCardProps {
  content: ContentItem;
  className?: string;
}

export function ContentCard({ content, className }: ContentCardProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const getTypeIcon = () => {
    switch (content.type) {
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'article':
        return <FileText className="w-4 h-4" />;
      case 'person':
        return <Users className="w-4 h-4" />;
      case 'tool':
        return <Wrench className="w-4 h-4" />;
      case 'resource':
        return <FileText className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getImageSrc = () => {
    switch (content.type) {
      case 'video':
      case 'article':
      case 'tool':
        return content.thumbnail;
      case 'person':
        return content.avatar;
      case 'resource':
        return undefined;
      default:
        return undefined;
    }
  };

  const getAriaLabel = () => {
    return `View ${content.type}: ${content.title} (opens in new tab)`;
  };

  const getAltText = () => {
    if (content.type === 'person') return `${content.title} avatar`;
    if (content.type === 'tool') return `${content.title} logo`;

    return `${content.title} thumbnail`;
  };

  const getThumbnailConfig = () => {
    switch (content.type) {
      case 'tool':
        return {
          containerSize: 'w-full h-full',
          imageClasses: 'object-scale-down object-center p-3'
        };
      case 'person':
        return {
          containerSize: 'w-24 h-24', 
          imageClasses: 'object-cover object-center rounded-full'
        };
      case 'video':
        return {
          containerSize: 'w-full h-full',
          imageClasses: 'object-cover rounded-sm'
        };
      case 'article':
        return {
          containerSize: 'w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[4/3]',
          imageClasses: 'object-cover object-center rounded-sm'
        };
      default:
        return {
          containerSize: 'w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[4/3]',
          imageClasses: 'object-cover object-center rounded-sm'
        };
    }
  };

  return (
    <article className={cn(
      "group relative h-full min-h-64 transition-all duration-150 group-focus-visible:ring-2 group-focus-visible:ring-gray-500/50 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-white dark:group-focus-visible:ring-offset-gray-900 outline-none",
      className
    )}>
      <Link
        href={content.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={getAriaLabel()}
        className="block h-full"
      >
        {/* Outer card layer */}
        <div className={cn(
          "absolute inset-0 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 transition-all duration-150 ease-out group-hover:shadow-sm group-hover:bg-gray-50/50 dark:group-hover:bg-zinc-800/40 group-hover:border-gray-300 dark:group-hover:border-zinc-600 p-1.5 flex flex-col"
        )}>

          {/* Inner card layer */}
          <div className="relative w-full flex-1 rounded-sm bg-zinc-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 transition-all duration-150 ease-out group-hover:bg-gray-50/80 dark:group-hover:bg-zinc-800/80 group-hover:border-gray-300 dark:group-hover:border-zinc-600 overflow-hidden mb-1">
            {getImageSrc() && !imageError ? (
              <div className={cn(
                "relative overflow-hidden",
                (content.type === 'tool' || content.type === 'person')
                  ? "flex items-center justify-center w-full h-full"
                  : "",
                getThumbnailConfig().containerSize
              )}>

                {/* Loading skeleton */}
                {imageLoading && (
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center" aria-hidden="true">
                    <Loader2 className="w-6 h-6 text-gray-400 animate-spin" aria-hidden="true" />
                  </div>
                )}

                <Image
                  src={getImageSrc()!}
                  alt={getAltText()}
                  fill
                  sizes={content.type === 'tool' ? "80px" :
                        content.type === 'person' ? "96px" :
                        "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"}
                  priority={false}
                  className={cn(
                    "transition-all duration-300 ease-out group-hover:scale-[1.02] group-hover:brightness-105",
                    getThumbnailConfig().imageClasses,
                    imageLoading ? "opacity-0" : "opacity-100"
                  )}
                  onLoad={() => setImageLoading(false)}
                  onError={() => {
                    setImageLoading(false);
                    setImageError(true);
                  }}
                />
              </div>
            ) : (

              /* Type Icon */
              <div className={cn(
                "flex items-center justify-center h-full",
                (content.type === 'tool' || content.type === 'person')
                  ? "w-full h-full"
                  : "w-full h-full"
              )}>
                <div className={cn(
                  "bg-gray-100 dark:bg-gray-800 border border-gray-300/50 dark:border-gray-600/40 flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-md group-hover:bg-gray-200 dark:group-hover:bg-gray-700",
                  content.type === 'tool' ? "w-12 h-12 rounded-lg" :
                  content.type === 'person' ? "w-16 h-16 rounded-full" :
                  "w-16 h-16 rounded-lg"
                )}>
                  <div className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                    {getTypeIcon()}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Content Details */}
          <div className="px-2 pb-2 space-y-0.5 md:space-y-1">

            {/* Title */}
            <h3 className="font-bold text-lg md:text-xl tracking-tight text-gray-900 dark:text-white transition-colors duration-300 ease-out group-hover:text-black dark:group-hover:text-gray-100 line-clamp-1">
              {content.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-snug transition-colors duration-300 ease-out group-hover:text-gray-700 dark:group-hover:text-gray-400 line-clamp-2">
              {content.description}
            </p>

            {/* Metadata */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                {content.type === 'video' && (
                  <>
                    {'duration' in content && (
                      <>
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        <span>{content.duration}</span>
                      </>
                    )}
                    {'creator' in content && (
                      <>
                        <User className="w-3 h-3" aria-hidden="true" />
                        <span className="truncate">{content.creator}</span>
                      </>
                    )}
                  </>
                )}
                {content.type === 'article' && 'author' in content && (
                  <>
                    <User className="w-3 h-3" aria-hidden="true" />
                    <span className="truncate">{content.author}</span>
                  </>
                )}
                {content.type === 'person' && 'company' in content && (
                  <span className="truncate text-xs md:text-sm font-medium">{content.company}</span>
                )}
                {content.type === 'tool' && content.tags && content.tags.length > 0 && (
                  <div className="flex items-center gap-1.5">
                    {content.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50 transition-all duration-200 hover:shadow-sm hover:scale-105"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <ExternalLink className="w-3 h-3 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300" aria-hidden="true" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
