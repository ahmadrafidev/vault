import { Clock } from "lucide-react";
import type { EmptyStateProps } from "@/src/types";
import { cn } from "@/src/utils";
import { useResponsiveValue } from "@/src/hooks";

export function EmptyState({ category, className }: EmptyStateProps) {
  const padding = useResponsiveValue({
    mobile: "py-8 px-4",
    tablet: "py-10 px-6", 
    desktop: "py-12 px-6",
  });

  const iconSize = useResponsiveValue({
    mobile: "w-10 h-10",
    tablet: "w-12 h-12",
    desktop: "w-12 h-12",
  });

  const titleSize = useResponsiveValue({
    mobile: "text-base",
    tablet: "text-lg",
    desktop: "text-lg",
  });

  const descriptionSize = useResponsiveValue({
    mobile: "text-xs",
    tablet: "text-sm",
    desktop: "text-sm",
  });

  return (
    <div className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", className)}>
      {/* Empty state card */}
      <div className="col-span-full">
        <div className={cn(
          "flex flex-col items-center justify-center border-2 border-dashed border-foreground/[0.1] rounded-lg",
          padding
        )}>
          <div
            className={cn(
              "flex items-center justify-center rounded-full bg-foreground/[0.04] mb-4",
              iconSize
            )}
            role="img"
            aria-label={`${category.name} category icon`}
          >
            <span aria-hidden="true">{category.icon}</span>
          </div>
          <h3 className={cn(titleSize, "font-medium text-foreground mb-2")}>
            No {category.name.toLowerCase()} yet
          </h3>
          <p className={cn(
            descriptionSize,
            "text-foreground/60 text-center max-w-sm mb-4"
          )}>
            {category.description}
          </p>
          <div className="flex items-center gap-2 text-xs text-foreground/40" role="status" aria-live="polite">
            <Clock className="w-4 h-4" aria-hidden="true" />
            <span>Coming soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}
