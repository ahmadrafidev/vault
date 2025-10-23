'use client';

/**
 * Featured Resources Component
 * Displays curated high-quality resources from the archive
 */

import Link from "next/link";
import { ExternalLink, ChevronRight, PlayCircle, FileText, Wrench, Users } from "lucide-react";
import { getIcon } from "@/src/utils/icon-utils";
import { getCategoryById } from "@/src/data";
import type { VideoContent, ArticleContent, ToolContent, PersonContent, ContentItem } from "@/src/data/content/types";

// Curated featured resources from different categories
const featuredResources: ContentItem[] = [
  {
    id: "designing-fluid-interface",
    title: "Designing Fluid Interfaces",
    description: "Gestures and motion that feel intuitive and natural.",
    link: "https://developer.apple.com/videos/play/wwdc2018/803",
    category: "videos",
    type: "video",
    duration: "64:41",
    creator: "Apple",
    thumbnail: "/images/content/videos/designing-fluid-interfaces.png",
    tags: ["interfaces", "gestures", "motion"],
  } as VideoContent,
  {
    id: "conversation-on-quality",
    title: "Conversation on quality",
    description: "Conversation on quality.",
    link: "https://linear.app/quality",
    category: "videos",
    type: "video",
    creator: "Linear",
    thumbnail: "/images/content/videos/conversations-on-quality.png",
    tags: ["quality", "design", "conversation"],
  } as VideoContent,
  {
    id: "emil-kowalski",
    title: "Emil Kowalski",
    description: "Designer engineer at Linear. Previously at Vercel.",
    link: "https://emilkowal.ski/",
    category: "people",
    type: "person",
    role: "Designer Engineer",
    company: "Linear",
    tags: ["designer engineer", "linear", "vercel"],
  } as PersonContent,
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'video':
      return <PlayCircle className="w-4 h-4" />;
    case 'article':
      return <FileText className="w-4 h-4" />;
    case 'tool':
      return <Wrench className="w-4 h-4" />;
    case 'person':
      return <Users className="w-4 h-4" />;
    default:
      return <ExternalLink className="w-4 h-4" />;
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'video':
      return 'Video';
    case 'article':
      return 'Article';
    case 'tool':
      return 'Tool';
    case 'person':
      return 'Person';
    default:
      return 'Resource';
  }
};

interface FeaturedResourcesProps {
  className?: string;
}

export function FeaturedResources({ className }: FeaturedResourcesProps) {
  return (
    <div className={className}>
      <div className="flex items-center mb-2 md:mb-4">
        <div>
          <h3 className="text-base font-medium text-foreground">
            Featured Resources
          </h3>
          <p className="text-sm text-foreground/60 mt-1">
            Hand-picked highlights from the archive
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {featuredResources.map((resource) => {
          const categoryMeta = getCategoryById(resource.category);
          const categoryIcon = getIcon(categoryMeta?.iconName || 'FileText');

          return (
            <Link
              key={resource.id}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-gradient-to-br from-foreground/[0.02] to-foreground/[0.06] rounded-lg p-4 border border-foreground/10 hover:border-foreground/20 transition-all duration-200 hover:shadow-sm hover:shadow-foreground/5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    {'thumbnail' in resource && resource.thumbnail ? (
                      <div className="w-12 h-12 rounded-md overflow-hidden bg-foreground/5 flex items-center justify-center">
                        <img
                          src={resource.thumbnail}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-md bg-foreground/5 flex items-center justify-center text-foreground/40 group-hover:text-foreground/60 transition-colors">
                        {getTypeIcon(resource.type)}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-medium text-foreground text-sm leading-tight group-hover:text-foreground/80 transition-colors line-clamp-2">
                        {resource.title}
                      </h4>
                      <ExternalLink className="w-4 h-4 text-foreground/30 group-hover:text-foreground/50 transition-colors flex-shrink-0 mt-0.5" />
                    </div>

                    <p className="text-xs text-foreground/60 mt-1 line-clamp-2 leading-relaxed">
                      {resource.description}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      {/* Type */}
                      <div className="flex items-center gap-1.5 text-xs text-foreground/50">
                        <span className="text-foreground/40">
                          {getTypeIcon(resource.type)}
                        </span>
                        <span className="capitalize">{getTypeLabel(resource.type)}</span>
                      </div>

                      {/* Additional info */}
                      {resource.type === 'video' && (resource as VideoContent).duration && (
                        <span className="text-xs text-foreground/50">
                          {(resource as VideoContent).duration}
                        </span>
                      )}

                      {resource.type === 'article' && (resource as ArticleContent).author && (
                        <span className="text-xs text-foreground/50">
                          by {(resource as ArticleContent).author}
                        </span>
                      )}

                      {resource.type === 'tool' && (resource as ToolContent).platform && (
                        <span className="text-xs text-foreground/50 capitalize">
                          {(resource as ToolContent).platform}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-6">
        <Link
          href="/resources"
          className="inline-flex items-center gap-1.5 text-sm text-foreground/60 hover:text-foreground/80 transition-colors font-medium group"
        >
          <span>Explore all resources</span>
          <ChevronRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
