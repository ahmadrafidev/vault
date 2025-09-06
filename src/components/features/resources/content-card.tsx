import { ExternalLink, Clock, User, Play, FileText, Users } from "lucide-react";
import type { ContentItem } from "@/src/data";
import { cn } from "@/src/utils";

interface ContentCardProps {
  content: ContentItem;
  className?: string;
}

export function ContentCard({ content, className }: ContentCardProps) {
  const getTypeIcon = () => {
    switch (content.type) {
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'article':
        return <FileText className="w-4 h-4" />;
      case 'person':
        return <Users className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <article className={cn(
      "group relative h-full min-h-64 transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-gray-500/50 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-white dark:group-focus-visible:ring-offset-gray-900 outline-none",
      className
    )}>
      <a
        href={content.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${content.type}: ${content.title} (opens in new tab)`}
        className="block h-full"
      >
        {/* Outer card layer */}
        <div className={cn(
          "absolute inset-0 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-out group-hover:shadow-md group-hover:bg-gray-50/50 dark:group-hover:bg-gray-800/60 group-hover:border-gray-300 dark:group-hover:border-gray-600 p-1.5 flex flex-col"
        )}>

          {/* Inner card layer */}
          <div className="relative w-full flex-1 rounded-sm bg-zinc-50 dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-out group-hover:bg-gray-50/80 dark:group-hover:bg-gray-900 group-hover:border-gray-300 dark:group-hover:border-gray-600 overflow-hidden mb-1">

            <div className="flex items-center justify-center h-full">
              {/* Type Icon */}
              <div className="flex-shrink-0">
                <div className="relative w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-300/50 dark:border-gray-600/40 flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-md group-hover:bg-gray-200 dark:group-hover:bg-gray-700">
                  <div className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                    {getTypeIcon()}
                  </div>
                </div>
              </div>
            </div>
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
              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                {content.type === 'video' && 'duration' in content && (
                  <>
                    <Clock className="w-3 h-3" />
                    <span>{content.duration}</span>
                  </>
                )}
                {content.type === 'article' && 'readTime' in content && (
                  <>
                    <Clock className="w-3 h-3" />
                    <span>{content.readTime} min</span>
                  </>
                )}
                {content.type === 'person' && 'company' in content && (
                  <span className="truncate">{content.company}</span>
                )}
              </div>

              <ExternalLink className="w-3 h-3 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </a>
    </article>
  );
}
